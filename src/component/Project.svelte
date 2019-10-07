<script>
  import Text from './Text.svelte';
  import Link from './Link.svelte';
  export let name;
</script>

<div class='project'>
  <div class='project-name'>
    <Link discrete on:click><Text heading>{name}</Text></Link>
    <div class='links'>
      <slot name='links' />
    </div>
  </div>
  <p class='project-description'>
    <Text>
      <slot />
    </Text>
  </p>
</div>

<style>
  .project {
    border-left: 1px solid var(--color-ink);
    margin-left: -1rem;
    padding: 0.25rem 0 0.25rem 1rem;
  }

  .project + .project {
    margin-top: 1.5rem;
  }

  .project-name {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    
    font-size: var(--font-size-heading);
    margin-bottom: 0.5rem;
  }

  .links {
    display: flex;
    align-items: center;
  }
</style>
