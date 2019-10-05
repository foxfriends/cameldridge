<!--
  # Paper

  The `Paper` component expands to fill its parent container, providing a paper-textured backing
  for its child contents. The paper has a (configurable) shadow.

  ## Usage

  ```html
  <div class='container'>
    <Paper> Content </Paper>
  </div>

  <style>
    .container {
      width: 35rem;
      height: 20rem;
    }
  </style>
  ```
-->

<script>
  export let hmargin = '0', vmargin = '0';
</script>

<!--
  ## Slots

  *   `default`: The contents of the paper.
-->

<div class='paper' style='padding: {vmargin} {hmargin}'>
  <slot></slot>
</div>

<!--
  ## Styles

  *   `--paper--image`: the image to use as the background for the paper.
  *   `--paper--color`: the color of the paper in the case of no paper image. Default: `#FAFAFA`
  *   `--paper--shadow-size`: the size of the drop shadow. Default: `0.125rem`
-->

<style>
  .paper {
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    position: relative;
    background-color: var(--paper--color, #FAFAFA);
    background-image: var(--paper--image);
    box-shadow: 
      var(--paper--shadow-size, 0.125rem) 
      var(--paper--shadow-size, 0.125rem) 
      calc(2 * var(--paper--shadow-size, 0.125rem))
      rgba(0, 0, 0, 0.6);
  }
</style>
