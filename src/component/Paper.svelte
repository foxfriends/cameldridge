<script>
  export let x, y;
  export let width = 16, height = 10, interval = 32;
</script>

<div class='paper' style='
  width: {width * interval}px; 
  height: {height * interval}px;
  transform: translate({x * interval}px, {y * interval}px);
'>
  <slot></slot>
</div>

<style>
  .paper {
    position: relative;
    background-color: #FAFAFA;
    /* TODO: is there a nicer paper texture? */
    background-image: var(--image-paper);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.6);
  }
</style>
