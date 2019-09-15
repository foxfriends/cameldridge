<script>
  import range from './util/range';
  import { createEventDispatcher } from 'svelte';

  let width = 0, height = 0;
  let gradient = 'linear-gradient(to bottom right, white, white)';

  const dispatch = createEventDispatcher();

  export let interval = 32; // px

  export let pulseDuration = 1400; // ms
  export let spotlightRadius = 400; // px
  export let spotlightFadeInDuration = 1000; // ms
  export let spotlightX = null, spotlightY = null;

  let onPulseComplete;
  export let pulseComplete = new Promise(resolve => { onPulseComplete = resolve });

  function pulseAnimation(duration) {
    if (duration === 0) {
      return () => window.requestAnimationFrame(spotlightAnimation(spotlightRadius));
    }

    let lastTime = null;
    let progress = 0;

    const updater = time => {
      const dtime = lastTime === null ? 0 : time - lastTime;
      lastTime = time;
      progress = Math.min(1, progress + dtime / duration);

      gradient = `radial-gradient(
        ${150 * (1 - Math.abs(progress * 2 - 1))}%
        ${150 * (1 - Math.abs(progress * 2 - 1))}%
        at
          ${100 * progress}%
          ${100 * progress}%
        ,transparent, white)`;

      if (progress === 1) {
        window.requestAnimationFrame(spotlightAnimation(spotlightFadeInDuration, spotlightRadius));
      } else {
        window.requestAnimationFrame(updater);
      }
    }

    return updater;
  }

  function spotlightAnimation(duration, radius) {
    let lastTime = null;
    let progress = 0;

    dispatch('pulseComplete');

    const updater = time => {
      if (spotlightX === null || spotlightY === null) { 
        window.requestAnimationFrame(updater);
        return; 
      }

      const dtime = lastTime === null ? 0 : time - lastTime;
      lastTime = time;
      progress = Math.min(1, progress + dtime / duration);

      gradient = `radial-gradient(${radius * progress}px at ${spotlightX}px ${spotlightY}px, rgba(255, 255, 255, 0.25), white)`;

      window.requestAnimationFrame(updater);
    }

    return updater;
  }

  window.requestAnimationFrame(pulseAnimation(pulseDuration));
</script>

<div class='container'>
  {#each range(width / interval) as i}
    <div class='vertical' style='transform: translateX({ (width - Math.floor(width / interval) * interval) / 2 + interval * i }px)'></div>
  {/each}
  {#each range(1, height / interval) as i}
    <div class='horizontal' style='transform: translateY({ interval * i }px)'></div>
  {/each}
  <div class='overlay' style='background-image: { gradient }'></div>
</div>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height} />

<style>
  .container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .vertical, .horizontal {
    background-color: rgba(0, 0, 0, 0.24);
    position: absolute;
    top: 0;
    left: 0;
  }

  .vertical {
    width: 1px;
    height: 100vh;
  }

  .horizontal {
    width: 100vw;
    height: 1px;
  }
</style>
