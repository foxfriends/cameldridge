<script>
  import NameCard from './NameCard.svelte';
  export let width, height, mouseX, mouseY, scroll;
</script>

<div class='page name-card'>
  <NameCard />
</div>

<style>
  .page {
    transition: 
      left 0.2s, 
      top 0.2s,
      transform 0.2s;
  }

  .name-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
