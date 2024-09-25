<script>
  import Paper from 'scattered-papers/Paper.svelte';
  import Rule from 'scattered-papers/Rule.svelte';
  import Text from 'scattered-papers/Text.svelte';
  import Image from 'scattered-papers/Image.svelte';
  import Link from 'scattered-papers/Link.svelte';

  export let mobile = false;
</script>

<div class='trilogy {mobile ? 'mobile' : ''}'>
  <Paper hmargin={mobile ? '3rem' : '6rem'} vmargin={'3rem'}>
    <header class='header'>
      <Text heading>Trilogy</Text>
      <div class='rule'><Rule /></div>
    </header>
    <div class='content'>
      <p>
        <Text>
          Trilogy is an experimental triple-paradigm programming language, featuring imperative,
          functional, and logic programming each as first-class citizens. It also includes more
          powerful control flow constructs than most languages, including effect handlers and
          first-class keyword continuations.
        </Text>
      </p>
      <p>
        <Text>
          Although Trilogy is still in its early stages, and is currently only a playground in
          which I can explore the new types of expressivity that the language features provide,
          my hope is that it eventually becomes useful (and performant) enough that it will
          become my default choice for small scale tools or embedded scripting for my own games.
        </Text>
      </p>
    </div>
  </Paper>
</div>

<style>
  .trilogy {
    width: 40rem;
    max-width: 100%;
    height: 60rem;
  }

  .trilogy.mobile {
    height: unset;
    margin: 2rem auto;
  }

  .header {
    font-size: var(--font-size-title);
    text-align: center;
    padding-top: 3rem;
  }

  .trilogy.mobile .header {
    padding-top: 0;
  }

  .rule {
    width: 25rem;
    margin: 1rem auto;
  }

  p {
    margin-bottom: 1rem;
  }

  p + p {
    text-indent: 2rem;
  }

  pre {
    padding: 1em;
    background-color: var(--color__one-dark--black);
    color: var(--color__one-dark--white);
    overflow-x: auto;
  }

  .comment { color: var(--color__one-dark--comment); }
  .function { color: var(--color__one-dark--function); }
  .keyword { color: var(--color__one-dark--keyword); }
  .entity { color: var(--color__one-dark--entity); }
  .support { color: var(--color__one-dark--support); }
  .string { color: var(--color__one-dark--string); }
</style>
