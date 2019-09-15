<script>
  import { onMount } from 'svelte';

  export let interval = 32; // px
  export let x, y; // cells
  export let size = 14; // pt
  export let text;
  export let heading = false;
  export let speed = 0; // cps

  let shownText = text;
  $: classes = Object.entries({ text: true, heading })
    .filter(([, include]) => include)
    .map(([name]) => name)
    .join(' ');

  function type(text, speed) {
    const duration = text.length * 1000 / speed;

    let lastTime = null;
    let progress = 0;

    const updater = time => {
      const dtime = lastTime === null ? 0 : time - lastTime;
      lastTime = time;
      progress = Math.min(duration, progress + dtime);
      shownText = text.slice(0, Math.floor(progress / duration * text.length));
      if (progress < duration) {
        window.requestAnimationFrame(updater);
      }
    };

    return updater;
  }

  onMount(() => {
    if (speed !== 0) {
      shownText = '';
      window.requestAnimationFrame(type(text, speed));
    }
  });
</script>

<span class={classes} style='
  font-size: {size}pt;
  top: {y * interval}px;
  left: {x * interval}px;
'>
  {shownText}
</span>

<style>
  .text {
    position: absolute;
    color: var(--color-ink);
    font-family: var(--font-body);
    transform: translateY(-100%);
  }

  .heading {
    font-family: var(--font-display);
  }

  .mono {
    font-family: var(--font-code);
  }

  .accent {
    font-family: var(--font-accent);
  }
</style>
