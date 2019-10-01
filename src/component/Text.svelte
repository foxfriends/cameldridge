<script>
  export let heading = false;
  $: classes = Object.entries({ text: true, heading })
    .filter(([, include]) => include)
    .map(([name]) => name)
    .join(' ');
</script>

<span class={classes}>
  <slot />
</span>

<style>
  .text {
    font-family: var(--font-body);
  }

  .heading {
    font-family: var(--font-display);
  }

  .mono {
    font-family: var(--font-code);
  }

  .accent {
    font-family: var(--font-accent);
  }
</style>
