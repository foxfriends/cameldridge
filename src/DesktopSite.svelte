<script>
  import { onMount, tick } from 'svelte';
  import NameCard from './pages/NameCard.svelte';
  import About from './pages/About.svelte';
  import ProjectsOverview from './pages/ProjectsOverview.svelte';
  import ConArtist from './pages/ConArtist.svelte';
  import Syncat from './pages/Syncat.svelte';
  import Paper from './pages/Paper.svelte';
  import White from './pages/White.svelte';
  import End from './pages/End.svelte';
  import wait from './util/wait.js';
  import divide from './util/divide.js';
  export let width, height, mouseX, mouseY, scroll, contentHeight;

  let maxScroll = 0;
  $: maxScroll = Math.max(0, contentHeight - height);

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

  const pages = [
    { name: 'name-card', },
    { name: 'about', collision: () => Collision.vertical(), },
    { name: 'projects-overview', collision: () => Collision.vertical({ minFriction: 0.15, maxFriction: 0.25 }), },
    { name: 'conartist', collision: () => Collision.horizontal(), horizontal: true, },
    { name: 'syncat', collision: () => Collision.vertical({ minRotation: -5, maxRotation: 5, minFriction: 0.15, maxFriction: 0.25 }), },
    { name: 'paper', collision: () => Collision.vertical({ minRotation: -5, maxRotation: 5, minFriction: 0.15, maxFriction: 0.25 }), },
    { name: 'white', collision: () => Collision.vertical({ minRotation: -5, maxRotation: 5, minFriction: 0.15, maxFriction: 0.25 }), },
    { name: 'end', collision: () => Collision.vertical({ minRotation: -5, maxRotation: 5, minFriction: 0.05, maxFriction: 0.15 }), },
  ].reverse();
  $: pageStop = [...divide(maxScroll, pages.length)];

  let autoscroll = '';
  async function setScroll(page) {
    const stop = pages.findIndex(({ name }) => name === page);
    if (stop === -1) { return }
    autoscroll = 'auto-scroll';
    await tick();
    window.scrollTo(0, pageStop[pageStop.length - stop - 1]);
    await wait(200);
    await tick();
    autoscroll = '';
  }

  const transform = {};
  const collisions = {};
  const collisionTransform = {};
  const elements = {};
  // NOTE: there is a bug (Firefox only) where the offsetHeight is measured incorrectly during the initial loading
  //       this may be due to a bug in Firefox, and not in this code...
  $: {
    if (scroll === undefined || contentHeight === undefined) {} else {
      pages.forEach((page, i) => {
        if (pages.length - i - 2 >= 0) {
          const scrollStart = pageStop[pages.length - i - 2];
          const scrollEnd = pageStop[pages.length - i - 1];
          const currentScroll = Math.min(scrollEnd, Math.max(scrollStart, scroll)) - scrollStart;
          const scale = currentScroll / (scrollEnd - scrollStart);
          if (page.horizontal) {
            transform[page.name] = `translateX(100vw) translateY(50vh) translateY(-50%) translateX(-${50 * scale}vw) translateX(-${50 * scale}%) ${collisionTransform[page.name] || ''}`;
          } else {
            transform[page.name] = `translateX(50vw) translateY(100vh) translateX(-50%) translateY(-${50 * scale}vh) translateY(-${50 * scale}%) ${collisionTransform[page.name] || ''}`;
          }

          const prevPage = pages[i+1];
          if (prevPage && elements[page.name] && elements[prevPage.name]) {
            let collisionScale, collisionDistance;
            if (page.horizontal) {
              const collisionRight = (width + elements[prevPage.name].offsetWidth) / 2;
              const collisionLeft = (width - elements[page.name].offsetWidth) / 2;
              const expectedLeft = (width * (100 - 50 * scale) / 100) - (elements[page.name].offsetWidth * (50 * scale) / 100);
              const collisionPoint = Math.min(collisionRight, Math.max(expectedLeft, collisionLeft));
              collisionDistance = collisionPoint - collisionRight;
              collisionScale = Math.abs(collisionDistance / (collisionRight - collisionLeft))
            } else {
              const collisionBottom = (height + elements[prevPage.name].offsetHeight) / 2;
              const collisionTop = (height - elements[page.name].offsetHeight) / 2;
              const expectedTop = (height * (100 - 50 * scale) / 100) - (elements[page.name].offsetHeight * (50 * scale) / 100);
              const collisionPoint = Math.min(collisionBottom, Math.max(expectedTop, collisionTop));
              collisionDistance = collisionPoint - collisionBottom;
              collisionScale = Math.abs(collisionDistance / (collisionBottom - collisionTop));
            }

            if (collisionScale) {
              collisions[prevPage.name] = collisions[prevPage.name] || page.collision();
              const { rotation, slideY, slideX } = collisions[prevPage.name].apply(collisionScale, collisionDistance).merge(...pages.slice(0, i+1).map(({ name }) => collisions[name]));
              collisionTransform[prevPage.name] = `translate(${slideX}px, ${slideY}px) rotate(${rotation}deg)`;
            } else if (!collisionScale) {
              delete collisions[prevPage.name];
              delete collisionTransform[prevPage.name];
            }
          }
        } else {
          transform[page.name] = `translate(50vw, 50vh) translate(-50%, -50%) ${collisionTransform[page.name] || ''}`;
        }
      });
    }
  }
</script>

<div
  class='page name-card {autoscroll}'
  style='transform: {transform['name-card'] || 'none'}'
  bind:this={elements['name-card']}
  on:click={() => setScroll('name-card')}>
  <NameCard />
</div>

<div
  class='page about {autoscroll}'
  style='transform: {transform.about || 'none'}'
  bind:this={elements.about}
  on:click={() => setScroll('about')}>
  <About />
</div>

<div
  class='page horizontal-collision projects-overview {autoscroll}'
  style='transform: {transform['projects-overview'] || 'none'}'
  bind:this={elements['projects-overview']}
  on:click={() => setScroll('projects-overview')}>
  <ProjectsOverview on:scroll={({ detail }) => setScroll(detail)}/>
</div>

<div
  class='page conartist {autoscroll}'
  style='transform: {transform.conartist || 'none'}'
  bind:this={elements.conartist}
  on:click={() => setScroll('conartist')}>
  <ConArtist />
</div>

<div
  class='page syncat {autoscroll}'
  style='transform: {transform.syncat || 'none'}'
  bind:this={elements.syncat}
  on:click={() => setScroll('syncat')}>
  <Syncat />
</div>

<div
  class='page paper {autoscroll}'
  style='transform: {transform.paper || 'none'}'
  bind:this={elements.paper}
  on:click={() => setScroll('paper')}>
  <Paper />
</div>

<div
  class='page white {autoscroll}'
  style='transform: {transform.white || 'none'}'
  bind:this={elements.white}
  on:click={() => setScroll('white')}>
  <White />
</div>

<div
  class='page end {autoscroll}'
  style='transform: {transform.end || 'none'}'
  bind:this={elements.end}
  on:click={() => setScroll('end')}>
  <End />
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
