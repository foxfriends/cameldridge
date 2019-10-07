<script>
  import { onMount, tick } from 'svelte';
  import NameCard from './pages/NameCard.svelte';
  import About from './pages/About.svelte';
  import ProjectsOverview from './pages/ProjectsOverview.svelte';
  import ConArtist from './pages/ConArtist.svelte';
  import Syncat from './pages/Syncat.svelte';
  import Paper from './pages/Paper.svelte';
  import wait from './util/wait.js';
  import divide from './util/divide.js';
  export let width, height, mouseX, mouseY, scroll, contentHeight;

  let maxScroll = 0;
  $: maxScroll = Math.max(0, contentHeight - height);
  $: pageStop = [...divide(maxScroll, 6)];

  let autoscroll = '';
  async function setScroll(stop) {
    if (typeof stop === 'string') {
      switch (stop) {
        case 'namecard': stop = 0; break;
        case 'about': stop = 1; break;
        case 'projectsoverview': stop = 2; break;
        case 'conartist': stop = 3; break;
        case 'syncat': stop = 4; break;
        case 'paper': stop = 5; break;
        default: stop = 1; break;
      }
    }
    autoscroll = 'auto-scroll';
    await tick();
    window.scrollTo(0, pageStop[stop]);
    await wait(200);
    await tick();
    autoscroll = '';
  }

  class Collision {
    static horizontal({
      minRotation = -10,
      maxRotation = 10,
      minDelay = 0.05,
      maxDelay = 0.25,
      minFriction = 0.35,
      maxFriction = 0.85,
      minXFactor = 0,
      maxXFactor = 0.15,
    } = {}) {
      const collision = new Collision(minRotation, maxRotation, minDelay, maxDelay, minFriction, maxFriction, minXFactor, maxXFactor);
      collision.swap = true;
      return collision;
    }

    static vertical({ 
      minRotation = -10,
      maxRotation = 10,
      minDelay = 0.05,
      maxDelay = 0.15,
      minFriction = 0.65,
      maxFriction = 0.85,
      minXFactor = 0,
      maxXFactor = 0.15,
    } = {}) {
      return new Collision(minRotation, maxRotation, minDelay, maxDelay, minFriction, maxFriction, minXFactor, maxXFactor);
    }

    constructor(MIN_ROTATION, MAX_ROTATION, MIN_DELAY, MAX_DELAY, MIN_FRICTION, MAX_FRICTION, MIN_XFACTOR, MAX_XFACTOR) {
      this.angle = Math.random() * (MAX_ROTATION - MIN_ROTATION) + MIN_ROTATION;
      this.delay = (Math.random() * (MAX_DELAY - MIN_DELAY)) + MIN_DELAY;
      this.friction = (Math.random() * (MAX_FRICTION - MIN_FRICTION)) + MIN_FRICTION;
      this.xfactor = -((Math.random() * (MAX_XFACTOR - MIN_XFACTOR)) + MIN_XFACTOR) * this.angle / MAX_ROTATION;

      this.slideX = 0;
      this.slideY = 0;
      this.rotation = 0;
    }

    apply(scale, distance) {
      // rotate mostly before starting slide
      this.rotation = this.angle * Math.min(1, scale / (this.delay + 0.45));

      // then start sliding after the delay
      if (scale >= this.delay) {
        this.slideX = (distance - distance / scale * this.delay) * this.friction * this.xfactor;
        this.slideY = (distance - distance / scale * this.delay) * this.friction;
      } else {
        this.slideX = 0;
        this.slideY = 0;
      }

      if (this.swap) {
        [this.slideX, this.slideY] = [this.slideY, this.slideX];
      }

      return this;
    }

    merge(...others) {
      others = others.filter(x => x);
      if (!others.length) { return this }
      const [other, ...rest] = others;
      const merged = {
        slideX: this.slideX + other.slideX,
        slideY: this.slideY + other.slideY,
        rotation: this.rotation + other.rotation,
      }
      return Collision.prototype.merge.apply(merged, rest);
    }
  }

  const transform = {};
  const collisions = {};
  const collisionTransform = {};
  let nameCard, about, projectsOverview, conartist, syncat, paper;
  // NOTE: there is a bug (Firefox only) where the offsetHeight is measured incorrectly during the initial loading
  //       this may be due to a bug in Firefox, and not in this code...
  $: {
    if (scroll === undefined || contentHeight === undefined) {} else {
      let rotation = 0, slideX = 0, slideY = 0;

      PAPER: {
        const scrollStart = pageStop[4];
        const scrollEnd = pageStop[5];
        const currentScroll = Math.min(scrollEnd, Math.max(scrollStart, scroll)) - scrollStart;
        const scale = currentScroll / (scrollEnd - scrollStart);
        transform.paper = `translateX(50vw) translateY(100vh) translateX(-50%) translateY(-${50 * scale}vh) translateY(-${50 * scale}%)`;

        if (syncat && paper) {
          const collisionBottom = (height + syncat.offsetHeight) / 2;
          const collisionTop = (height - paper.offsetHeight) / 2;
          const expectedTop = (height * (100 - 50 * scale) / 100) - (paper.offsetHeight * (50 * scale) / 100);
          const collisionPoint = Math.min(collisionBottom, Math.max(expectedTop, collisionTop));
          const collisionDistance = collisionPoint - collisionBottom;
          const collisionScale = Math.abs(collisionDistance / (collisionBottom - collisionTop));

          if (collisionScale) {
            collisions.syncat = collisions.syncat || Collision.vertical({ minRotation: -5, maxRotation: 5, minFriction: 0.15, maxFriction: 0.25 });
            const { rotation, slideY, slideX } = collisions.syncat.apply(collisionScale, collisionDistance);
            collisionTransform.syncat = `translate(${slideX}px, ${slideY}px) rotate(${rotation}deg)`;
          } else if (!collisionScale) {
            delete collisions.syncat;
            delete collisionTransform.syncat;
          }
        }
      };

      SYNCAT: {
        const scrollStart = pageStop[3];
        const scrollEnd = pageStop[4];
        const currentScroll = Math.min(scrollEnd, Math.max(scrollStart, scroll)) - scrollStart;
        const scale = currentScroll / (scrollEnd - scrollStart);
        transform.syncat = `translateX(50vw) translateY(100vh) translateX(-50%) translateY(-${50 * scale}vh) translateY(-${50 * scale}%) ${collisionTransform.syncat || ''}`;

        if (conartist && syncat) {
          const collisionBottom = (height + conartist.offsetHeight) / 2;
          const collisionTop = (height - syncat.offsetHeight) / 2;
          const expectedTop = (height * (100 - 50 * scale) / 100) - (syncat.offsetHeight * (50 * scale) / 100);
          const collisionPoint = Math.min(collisionBottom, Math.max(expectedTop, collisionTop));
          const collisionDistance = collisionPoint - collisionBottom;
          const collisionScale = Math.abs(collisionDistance / (collisionBottom - collisionTop));

          if (collisionScale) {
            collisions.conartist = collisions.conartist || Collision.vertical({ minRotation: -5, maxRotation: 5, minFriction: 0.15, maxFriction: 0.25 });
            const { rotation, slideY, slideX } = collisions.conartist.apply(collisionScale, collisionDistance).merge(collisions.syncat);
            collisionTransform.conartist = `translate(${slideX}px, ${slideY}px) rotate(${rotation}deg)`;
          } else if (!collisionScale) {
            delete collisions.conartist;
            delete collisionTransform.conartist;
          }
        }
      };

      CONARTIST: {
        const scrollStart = pageStop[2];
        const scrollEnd = pageStop[3];
        const currentScroll = Math.min(scrollEnd, Math.max(scrollStart, scroll)) - scrollStart;
        const scale = currentScroll / (scrollEnd - scrollStart);
        transform.conartist = `translateX(100vw) translateY(50vh) translateY(-50%) translateX(-${50 * scale}vw) translateX(-${50 * scale}%) ${collisionTransform.conartist || ''}`;

        if (projectsOverview && conartist) {
          const collisionRight = (width + projectsOverview.offsetWidth) / 2;
          const collisionLeft = (width - conartist.offsetWidth) / 2;
          const expectedLeft = (width * (100 - 50 * scale) / 100) - (conartist.offsetWidth * (50 * scale) / 100);
          const collisionPoint = Math.min(collisionRight, Math.max(expectedLeft, collisionLeft));
          const collisionDistance = collisionPoint - collisionRight;
          const collisionScale = Math.abs(collisionDistance / (collisionRight - collisionLeft))

          if (collisionScale) {
            collisions.projectsOverview = collisions.projectsOverview || Collision.horizontal();
            const { rotation, slideY, slideX } = collisions.projectsOverview.apply(collisionScale, collisionDistance).merge(collisions.conartist, collisions.syncat);
            collisionTransform.projectsOverview = `translate(${slideX}px, ${slideY}px) rotate(${rotation}deg)`;
          } else if (!collisionScale) {
            delete collisions.projectsOverview;
            delete collisionTransform.projectsOverview;
          }
        }
      };

      PROJECTS_OVERVIEW: {
        const scrollStart = pageStop[1];
        const scrollEnd = pageStop[2];
        const currentScroll = Math.min(scrollEnd, Math.max(scrollStart, scroll)) - scrollStart;
        const scale = currentScroll / (scrollEnd - scrollStart);
        transform.projectsOverview = `translateX(50vw) translateX(-50%) translateY(${100 - 50 * scale}vh) translateY(-${50 * scale}%) ${collisionTransform.projectsOverview || ''}`;

        if (about && projectsOverview) {
          const collisionBottom = (height + about.offsetHeight) / 2;
          const collisionTop = (height - projectsOverview.offsetHeight) / 2;
          const expectedTop = (height * (100 - 50 * scale) / 100) - (projectsOverview.offsetHeight * (50 * scale) / 100);
          const collisionPoint = Math.min(collisionBottom, Math.max(expectedTop, collisionTop));
          const collisionDistance = collisionPoint - collisionBottom;
          const collisionScale = Math.abs(collisionDistance / (collisionBottom - collisionTop));

          if (collisionScale) {
            collisions.about = collisions.about || Collision.vertical({ minFriction: 0.15, maxFriction: 0.25 });
            const { rotation, slideY, slideX } = collisions.about.apply(collisionScale, collisionDistance).merge(collisions.projectsOverview, collisions.conartist, collisions.syncat);
            collisionTransform.about = `translate(${slideX}px, ${slideY}px) rotate(${rotation}deg)`;
          } else if (!collisionScale) {
            delete collisions.about;
            delete collisionTransform.about;
          }
        }
      };

      ABOUT: {
        const scrollStart = pageStop[0];
        const scrollEnd = pageStop[1];
        const currentScroll = Math.min(scrollEnd, Math.max(scrollStart, scroll)) - scrollStart;
        const scale = currentScroll / (scrollEnd - scrollStart);
        transform.about = `translateX(50vw) translateX(-50%) translateY(${100 - 50 * scale}vh) translateY(-${10 + (40 * scale)}%) ${collisionTransform.about || ''}`;

        if (nameCard && about) {
          const collisionBottom = (height + nameCard.offsetHeight) / 2;
          const collisionTop = (height - about.offsetHeight) / 2;
          const expectedTop = (height * (100 - 50 * scale) / 100) - (about.offsetHeight * (10 + (40 * scale)) / 100);
          const collisionPoint = Math.min(collisionBottom, Math.max(expectedTop, collisionTop));
          const collisionDistance = collisionPoint - collisionBottom;
          const collisionScale = Math.abs(collisionDistance / (collisionBottom - collisionTop));

          if (collisionScale) {
            collisions.nameCard = collisions.nameCard || Collision.vertical();
            const { rotation, slideY, slideX } = collisions.nameCard.apply(collisionScale, collisionDistance).merge(collisions.about, collisions.projectsOverview, collisions.conartist, collisions.syncat);
            collisionTransform.nameCard = `translate(${slideX}px, ${slideY}px) rotate(${rotation}deg)`;
          } else if (!collisionScale) {
            delete collisions.nameCard;
            delete collisionTransform.nameCard;
          }
        }
      };

      NAME_CARD: {
        transform.nameCard = `translateX(50vw) translateX(-50%) translateY(50vh) translateY(-50%) ${collisionTransform.nameCard || ''}`;
      };
    }
  }
</script>

<div
  class='page name-card {autoscroll}'
  style='transform: {transform.nameCard || 'none'}'
  bind:this={nameCard}
  on:click={() => setScroll('namecard')}>
  <NameCard />
</div>

<div
  class='page about {autoscroll}'
  style='transform: {transform.about || 'none'}'
  bind:this={about}
  on:click={() => setScroll('about')}>
  <About />
</div>

<div
  class='page horizontal-collision projects-overview {autoscroll}'
  style='transform: {transform.projectsOverview || 'none'}'
  bind:this={projectsOverview}
  on:click={() => setScroll('projectsoverview')}>
  <ProjectsOverview on:scroll={({ detail }) => setScroll(detail)}/>
</div>

<div
  class='page conartist {autoscroll}'
  style='transform: {transform.conartist || 'none'}'
  bind:this={conartist}
  on:click={() => setScroll('conartist')}>
  <ConArtist />
</div>

<div
  class='page syncat {autoscroll}'
  style='transform: {transform.syncat || 'none'}'
  bind:this={syncat}
  on:click={() => setScroll('syncat')}>
  <Syncat />
</div>

<div
  class='page paper {autoscroll}'
  style='transform: {transform.paper || 'none'}'
  bind:this={paper}
  on:click={() => setScroll('paper')}>
  <Paper />
</div>

<style>
  .auto-scroll {
    transition: transform 0.2s;
  }

  .page {
    position: absolute;
    transform-origin: bottom center;
  }

  .horizontal-collision {
    transform-origin: center right;
  }
</style>
