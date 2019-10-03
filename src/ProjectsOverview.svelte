<script>
  import Paper from './component/Paper.svelte';
  import Rule from './component/Rule.svelte';
  import Text from './component/Text.svelte';
</script>

<div class='projects-overview'>
  <Paper>
    <header class='header'>
      <Text heading>Projects</Text>
      <div class='rule'><Rule /></div>
    </header>
  </Paper>
</div>

<style>
  .projects-overview {
    width: 50rem;
    height: 70rem;
  }

  .header {
    font-size: var(--font-size-heading);
    text-align: center;
    padding: 3rem;
  }

  .rule {
    width: 25rem;
    margin: 1rem auto 0 auto;
  }
</style>
