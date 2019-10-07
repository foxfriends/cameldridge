<script>
  import DesktopSite from './DesktopSite.svelte';
  import MobileSite from './MobileSite.svelte';
  let width, height, mouseX, mouseY, scroll, contentHeight;
</script>

{#if width > 700}
  <div class='noscroll'>
    <DesktopSite {width} {height} {contentHeight} {mouseX} {mouseY} {scroll} />
  </div>
  <div class='scroll' style='height: 500vh' bind:clientHeight={contentHeight} />
{:else}
  <MobileSite />
{/if}

<svelte:body on:mousemove={e => { mouseX = e.clientX; mouseY = e.clientY; }} />
<svelte:window bind:innerWidth={width} bind:innerHeight={height} bind:scrollY={scroll} />

<style>
  .noscroll {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .scroll {
    position: relative;
    top: 0;
    left: 0;
    pointer-events: none;
    min-height: 100vh;
  }
</style>
