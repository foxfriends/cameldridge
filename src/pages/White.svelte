<script context='module'>
  const loadingEngine = import('../white');
  loadingEngine.then(({ default: white }) => white());
</script>

<script>
  import { onMount, tick } from 'svelte';
  import Paper from 'scattered-papers/Paper.svelte';
  import Rule from 'scattered-papers/Rule.svelte';
  import Text from 'scattered-papers/Text.svelte';
  import Image from 'scattered-papers/Image.svelte';
  import Link from 'scattered-papers/Link.svelte';

  export let mobile = false;
</script>

<div class='white {mobile ? 'mobile' : ''}'>
  <Paper>
    <header class='header'>
      <Text heading>White</Text>
      <div class='rule'><Rule /></div>
    </header>
    <div class='content'>
      <div class='column'>

        <p>
          <Text>
            White is a puzzle platform game, and the first full game I actually built from 
            start to finish. It was also the first time I made all the components myself: 
            code, graphics, music, and sounds.
          </Text>
        </p>

        <p>
          <Text>
            The game takes place in a world where there are no colours other than pure
            white. One day, however, the main character sees a spark in his room of 
            something that is not white, and it opens up the whole world to him.
          </Text>
        </p>

      </div>

      <div class='column'>

        <p>
          <Text>
            White was made with GameMaker Studio. An early version was submitted to
            the GMC Jam, a 3-day game making event, and won me a few prizes! After that,
            I took a few months to finish building up the full game, which is now available
            to be played on a few other sites online.
          </Text>
        </p>

        <p>
          <Text>
            You can <Link href='/game/White.exe' download>download</Link> White for Windows (it works best that way), or play in browser
            <Link href='/game/White/'>here</Link>.
          </Text>
        </p>

      </div>
    </div>

    <canvas id='white' class='game' />
  </Paper>
</div>

<style>
  .white {
    position: relative;
    width: 60rem;
    max-width: 100%;
    height: 40rem;
  }

  .white.mobile {
    height: unset;
    margin: 2rem auto;
  }

  .header {
    font-size: var(--font-size-title);
    text-align: center;
    padding-top: 3rem;
  }

  .rule {
    width: 25rem;
    margin: 1rem auto;
  }

  .content {
    box-sizing: border-box;
    padding: 0 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 3rem;
  }

  .mobile .content {
    grid-template-columns: 1fr;
    padding: 0 3rem 10rem 3rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  p + p,
  .mobile .column + .column > p {
    text-indent: 2rem;
  }

  .game {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
