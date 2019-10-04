<script>
  import { onMount } from 'svelte';
  import NameCard from './NameCard.svelte';
  import ProjectsOverview from './ProjectsOverview.svelte';
  import wait from './util/wait.js';
  export let width, height, mouseX, mouseY, scroll, contentHeight;

  let maxScroll = 0;
  $: maxScroll = Math.max(0, contentHeight - height);

  // prevent animation on initial load
  let animated = '';
  onMount(async () => {
    await wait(0);
    animated = 'animated';
  });

  function printStyles(styles) {
    if (!styles) { return '' }
    return Object.entries(styles)
      .map(entry => entry.join(':'))
      .join(';');
  }

  const MAX_ROTATION = 30;
  const MIN_DELAY = 0.05, MAX_DELAY = 0.15;
  const MIN_FRICTION = 0.65, MAX_FRICTION = 0.85;
  const MIN_XFACTOR = 0, MAX_XFACTOR = 0.15;
  class Collision {
    constructor() {
      this.angle = Math.random() * MAX_ROTATION * 2 - MAX_ROTATION;
      this.delay = (Math.random() * (MAX_DELAY - MIN_DELAY)) + MIN_DELAY;
      this.friction = (Math.random() * (MAX_FRICTION - MIN_FRICTION)) + MIN_FRICTION;
      this.xfactor = ((Math.random() * (MAX_XFACTOR - MIN_XFACTOR) * 2) - MIN_XFACTOR) * this.angle / MAX_ROTATION;
    }

    apply(rotation, slideX, slideY, scale, distance) {
      // apply parent sliding
      rotation = rotation * this.friction;
      slideX = slideX * this.friction;
      slideY = slideY * this.friction;

      // rotate mostly before starting slide
      rotation = rotation + this.angle * (scale / (this.delay + 0.45));

      // then start sliding after the delay
      if (scale >= this.delay) {
        slideX = slideX + (distance - distance / scale * this.delay) * this.friction * this.xfactor;
        slideY = slideY + (distance - distance / scale * this.delay) * this.friction;
      }

      return [rotation, slideX, slideY];
    }
  }

  const transform = {};
  const collisions = {};
  let nameCard, projectsOverview;
  $: {
    let rotation = 0, slideX = 0, slideY = 0;
    PROJECTS_OVERVIEW: {
      const scale = scroll / maxScroll;
      transform.projectsOverview = `translateX(50vw) translateX(-50%) translateY(${100 - 50 * scale}vh) translateY(-${10 + (40 * scale)}%) rotate(${rotation}deg)`;

      if (nameCard && projectsOverview) {
        const collisionBottom = (height + nameCard.clientHeight) / 2;
        const collisionTop = (height - projectsOverview.clientHeight) / 2;
        const expectedTop = (height * (100 - 50 * scale) / 100) - (projectsOverview.clientHeight * (10 + (40 * scale)) / 100);
        const collisionPoint = Math.min(collisionBottom, Math.max(expectedTop, collisionTop));
        const collisionDistance = collisionBottom - collisionPoint;
        const collisionScale = collisionDistance / (collisionBottom - collisionTop);

        if (!collisions.nameCard && collisionScale) {
          collisions.nameCard = new Collision();
        } else if (!collisionScale) {
          delete collisions.nameCard;
        }

        if (collisions.nameCard) {
          [rotation, slideX, slideY] = collisions.nameCard.apply(rotation, slideX, slideY, collisionScale, collisionDistance);
        }
      }
    };
    NAME_CARD: {
      transform.nameCard = `translateX(50vw) translateX(-50%) translateY(50vh) translateY(-50%) translateX(${slideX}px) translateY(-${slideY}px) rotate(${rotation}deg)`;
    };
  }
</script>

<div class='{animated} page name-card' style='transform: {transform.nameCard || 'none'}' bind:this={nameCard}>
  <NameCard />
</div>
<div class='{animated} page projects-overview' style='transform: {transform.projectsOverview || 'none'}' bind:this={projectsOverview}>
  <ProjectsOverview />
</div>

<style>
  .page {
    position: absolute;
    transform-origin: bottom center;
  }
</style>
