<script>
  import Paper from '../component/Paper.svelte';
  import Rule from '../component/Rule.svelte';
  import Text from '../component/Text.svelte';
  import Project from '../component/Project.svelte';
  import Image from '../component/Image.svelte';
</script>

<div class='description'>
  <Paper hmargin={'6rem'} vmargin={'3rem'}>
  </Paper>
  <div class='conartist'>
    <Paper>
      <header class='header'>
        <div class='logo'>
          <Image name='conartist' />
        </div>
        <Text heading>ConArtist</Text>
      </header>
    </Paper>
  </div>
</div>

<style>
  .description {
    position: relative;
    width: 40rem;
    height: 60rem;
  }

  .conartist {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 35rem;
    height: 20rem;

    transform: translate(0.78rem, -1rem) rotate(-4deg);

    color: var(--color-ink);

    --paper--image: none;
    --paper--color: #333333;

    --text--font: 'Fira Sans', sans-serif;
    --text--font-heading: 'Fira Sans', sans-serif;
    --text--font-accent: 'Fira Sans', sans-serif;

    --color-ink: white;
  }

  .conartist .header {
    position: absolute;
    left: 2rem;
    top: 2rem;

    display: flex;
    align-items: center;

    font-size: var(--font-size-title);
    font-weight: bold;
  }

  .conartist .logo {
    width: 4rem;
    height: 4rem;
    margin-right: 0.5rem;
  }
</style>
