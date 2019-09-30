<script>
  import NameCard from './NameCard.svelte';

  let width = 0, height = 0, mouseX = null, mouseY = null, scroll;
  const h = 24, w = 24;

  $: interval = Math.floor(Math.min(width / w, height / h));
</script>

{#if interval >= 40}
  <div class='noscroll'>
    <div class='container' style='top: {(height - h * interval) / 2}; left: {(width - w * interval) / 2}px; width: {w * interval}px; height: {h * interval}px;'>
      <NameCard {interval} x={8} y={10} />
    </div>
  </div>
  <div class='scroll' style='height: 0' />
{:else}
  <div class='paper-background'>
    <h2>The mobile site is in progress.</h2>
    <h3>Sorry for the inconvenience.</h3>
  </div>
{/if}

<svelte:body on:mousemove={e => { mouseX = e.clientX; mouseY = e.clientY; }} />
<svelte:window bind:innerWidth={width} bind:innerHeight={height} bind:scrollY={scroll} />

<style>
  :global(:root) {
    --font-display: 'Cutive', serif;
    --font-code: 'Cutive Mono', serif;
    --font-body: 'Spectral', serif;
    --font-accent: 'Spectral SC', serif;

    --color-ink: rgba(0, 0, 0, 240);
    --image-paper: url('./image/paper/paper@2.png');
  }

  :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* TODO: not sure this wood is good... pretty sure it's not */
    /*background-image: url('./image/wood/wood@2.png');*/
  }

  :global(#app) {
    overflow: auto;
  }

  .noscroll {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .container {
    position: absolute;
  }

  .scroll {
    position: relative;
    top: 0;
    left: 0;
    pointer-events: none;
    min-height: 100vh;
  }

  .paper-background {
    width: 100vw;
    height: 100vh;
    background-image: var(--image-paper);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--font-accent);
  }
</style>
