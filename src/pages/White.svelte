<script>
  import { onMount, tick } from 'svelte';
  import Paper from '../component/Paper.svelte';
  import Rule from '../component/Rule.svelte';
  import Text from '../component/Text.svelte';
  import Image from '../component/Image.svelte';
  import Link from '../component/Link.svelte';

  const loadingEngine = import('../white');

  onMount(async () => {
    const { default: white } = await loadingEngine;
    white();
  });
</script>

<div class='white'>
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
            You can <Link href='https://cameldridge.com/game/White.exe' download>download</Link> White for Windows (it works best that way), or play in browser
            <Link href='https://cameldridge.com/game/White/'>here</Link>.
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
    height: 40rem;
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
    grid-gap: 3rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  p + p {
    text-indent: 2rem;
  }

  .game {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
