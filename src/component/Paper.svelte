<div class='paper'>
  <slot></slot>
</div>

<style>
  .paper {
    width: 100%;
    height: 100%;

    position: relative;
    background-color: #FAFAFA;
    /* TODO: is there a nicer paper texture? */
    background-image: var(--image-paper);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.6);
  }
</style>
