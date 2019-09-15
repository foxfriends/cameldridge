<script>
  import Background from './Background.svelte';
  import NameCard from './NameCard.svelte';
  import Storyboard from './component/Storyboard.svelte';

  let width = 0, height = 0, mouseX = null, mouseY = null, scroll;
  const interval = 48;
  const pulseDuration = 1000;
  let showCards = false;

  const props = { interval };

  function transform(...transforms) {
    return { transform: transforms.reduce((acc, transform) => Object.assign(acc, transform), {}) };
  }

  function translate(x, y) {
    return { translate: { x: x * interval, y: y * interval } };
  }

  let h = 0, w = 0, keyframes;
  $: w = Math.ceil(width / interval) + 1;
  $: h = Math.ceil(height / interval);

  $: keyframes = {
    [-1]: {
      namecard: { component: NameCard, props, ...transform(translate(2, h)) },
    },
    [0]: {
      namecard: { component: NameCard, props, ...transform(translate(2, 2)) },
    }
  };
  let step = -1;

  function wait(duration) {
    let lastTime = null;
    let progress = 0;

    const updater = time => {
      const dtime = lastTime === null ? 0 : time - lastTime;
      lastTime = time;
      progress = Math.min(1, progress + dtime / duration);
      if (progress === 1) {
        window.requestAnimationFrame(start());
      } else {
        window.requestAnimationFrame(updater);
      }
    };

    return updater;
  }

  function start() {
    showCards = true;
    let lastTime = null;
    let progress = 0;
    const duration = pulseDuration / 4 * 3;

    const updater = time => {
      const dtime = lastTime === null ? 0 : time - lastTime;
      lastTime = time;
      progress = Math.min(1, progress + dtime / duration);

      step = progress - 1;

      if (progress === 1) {
        window.requestAnimationFrame(followScroll());
      } else {
        window.requestAnimationFrame(updater);
      }
    };

    return updater;
  }

  function followScroll() {
    const updater = time => {
      step = scroll;
      window.requestAnimationFrame(updater);
    };
    return updater;
  }

  window.requestAnimationFrame(wait(pulseDuration / 3 * 2));
</script>

<Background {interval} {pulseDuration} spotlightX={mouseX} spotlightY={mouseY} />

{#if showCards}
  <div class='noscroll'>
    <div class='container' style='left: {(width - w * interval) / 2}px; width: {w * interval}px; height: {h * interval}px;'>
      <Storyboard {keyframes} {step} />
    </div>
  </div>
{/if}
<div class='scroll' style='height: {height + +Object.keys(keyframes).sort().slice(-1)[0]}px' />

<svelte:body on:mousemove={e => { mouseX = e.clientX; mouseY = e.clientY; }} />
<svelte:window bind:innerWidth={width} bind:innerHeight={height} bind:scrollY={scroll} />

<style>
  :global(:root) {
    --font-display: 'Cutive', serif;
    --font-code: 'Cutive Mono', serif;
    --font-body: 'Spectral', serif;
    --font-accent: 'Spectral SC', serif;

    --color-ink: rgba(0, 0, 0, 240);
  }

  :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  :global(#app) {
    overflow: auto;
  }

  .noscroll {
    overflow: hidden;
  }

  .container {
    position: absolute;
    top: 0;
  }

  .scroll {
    position: relative;
    top: 0;
    left: 0;
    pointer-events: none;
  }
</style>
