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
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.6);
  }
</style>
