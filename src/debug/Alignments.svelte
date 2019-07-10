<script>
  import range from '../util/range';

  let width = 0, height = 0;
  export let interval = 32;
</script>

<div class='container'>
  {#each range(width / interval) as i}
    <div class='vertical' style='transform: translateX({ (width - Math.floor(width / interval) * interval) / 2 + interval * i }px)'></div>
  {/each}
  {#each range(1, height / interval) as i}
    <div class='horizontal' style='transform: translateY({ interval * i }px)'></div>
  {/each}
</div>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

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

  .vertical, .horizontal {
    background-color: rgba(0, 0, 0, 0.12);
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
