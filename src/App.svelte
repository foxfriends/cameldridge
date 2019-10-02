<script>
  import DesktopSite from './DesktopSite.svelte';
  import MobileSite from './MobileSite.svelte';
  let width = 0, height = 0, mouseX = null, mouseY = null, scroll = 0;
</script>

{#if width > 700}
  <div class='noscroll'>
    <DesktopSite {width} {height} {mouseX} {mouseY} {scroll} />
  </div>
  <div class='scroll' style='height: 0' />
{:else}
  <MobileSite />
{/if}

<svelte:body on:mousemove={e => { mouseX = e.clientX; mouseY = e.clientY; }} />
<svelte:window bind:innerWidth={width} bind:innerHeight={height} bind:scrollY={scroll} />

<style>
  .noscroll {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  .scroll {
    position: relative;
    top: 0;
    left: 0;
    pointer-events: none;
    min-height: 100vh;
  }
</style>
