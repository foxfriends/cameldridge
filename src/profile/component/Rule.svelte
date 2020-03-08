<!--
  # Rule
  
  The `Rule` component renders a straight line, expanding to fill its parent container's width.

  ## Usage

  ```html
  <Rule />
  ```

  ## Props

  *   `fade`: Flag to fade the ends of the line. Default: `false`
-->

<script>
  export let fade = false;
  $: classes = Object.entries({ rule: true, fade })
    .filter(([, include]) => include)
    .map(([name]) => name)
    .join(' ');
</script>

<div class={classes} />

<!--
  ## Styles

  *   `--rule--height`: The thickness of the line. Default: `1px`
  *   `--rule--color`: The color of the line.
-->

<style>
  .rule {
    height: var(--rule--height, 1px);
    width: 100%;
    background-color: var(--rule--color);
    pointer-events: none;
  }

  .fade {
    background-color: unset;
    background-image: linear-gradient(to right, 
      transparent, 
      var(--rule--color) 50%, 
      transparent
    );
  }
</style>
