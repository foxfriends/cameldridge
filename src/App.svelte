<script>
  import Alignments from './debug/Alignments.svelte';
</script>

<Alignments interval={48} />

<style>
  :global(:root) {
    --font-display: 'Cutive', serif;
    --font-code: 'Cutive Mono', serif;
    --font-body: 'Spectral', serif;
    --font-accent: 'Spectral SC', serif;
  }

  :global(body) { margin: 0; padding: 0 }
</style>
