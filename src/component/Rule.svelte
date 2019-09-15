<script>
  export let interval = 32; // px
  export let horizontal = false, vertical = false, fade = false;

  export let x, y, l; // cells
  export let w; // px
  $: classes = Object.entries({ rule: true, horizontal, vertical, fade })
    .filter(([, include]) => include)
    .map(([name]) => name)
    .join(' ');
</script>

<div class={classes} style='
  width: {l * interval}px;
  height: {w}px;
  left: {x * interval}px;
  top: {y * interval}px;
'></div>

<style>
  .rule {
    position: absolute;
    pointer-events: none;
    transform-origin: left center;
    background-color: var(--color-ink);
  }

  .vertical {
    transform: rotate(90deg);
  }

  .fade {
    background-color: unset;
    background-image: linear-gradient(to right, transparent, var(--color-ink) 15%, var(--color-ink) 15%, transparent);
  }
</style>
