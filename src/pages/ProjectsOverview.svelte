<script>
  import { createEventDispatcher } from 'svelte';
  import Paper from '../component/Paper.svelte';
  import Rule from '../component/Rule.svelte';
  import Text from '../component/Text.svelte';
  import Project from '../component/Project.svelte';
  import Image from '../component/Image.svelte';
  import Link from '../component/Link.svelte';

  export let mobile = false;
  const dispatch = createEventDispatcher();

  function setScroll(page) { dispatch('scroll', page) }
</script>

<div class='projects-overview {mobile ? 'mobile' : ''}'>
  <Paper hmargin={mobile ? '3rem' : '6rem'} vmargin='3rem'>
    <header class='header'>
      <Text heading>Projects</Text>
      <div class='rule'><Rule /></div>
    </header>

    <section class='group'>
      <div class='group-name'>
        <Text accent>Apps</Text>
      </div>

      <Project name='ConArtist' on:click={() => setScroll('conartist')}>
        <svelte:fragment slot='links'>
          <div class='link'>
            <Link href='https://conartist.app' external><Image name='home' alt='Homepage' /></Link>
          </div>
          <div class='link'>
            <Link href='https://github.com/foxfriends/conartist' external><Image name='github' alt='Repository' /></Link>
          </div>
        </svelte:fragment>

        A sales and inventory tracking solution specialized for con(vention) artists. With over 200 users
        signed up and sales recorded at more than 20 conventions worldwide, this has been my biggest project
        to-date. Right now there are web and iOS apps, with Android hopefully soon to follow.
      </Project>

    </section>

    <section class='group'>
      <div class='group-name'>
        <Text accent>Tools</Text>
      </div>

      <Project name='Syncat' on:click={() => setScroll('syncat')}>
        <div class='link' slot='links'>
          <Link href='https://github.com/foxfriends/syncat' external><Image name='github' alt='Repository' /></Link>
        </div>
        A replacement for the standard <Text mono>cat</Text> tool featuring syntax highlighting,
        Git integration, and other useful features for displaying code on your terminal. CSS-like
        &ldquo;Syncat stylesheets&rdquo; allow for fine-grained highlighting of the parse tree, as parsed by
        Tree-sitter.
      </Project>

      <Project name='Paper' on:click={() => setScroll('paper')}>
        <svelte:fragment slot='links'>
          <div class='link'>
            <Link href='https://github.com/foxfriends/paper-terminal' external><Image name='github' alt='Repository' /></Link>
          </div>
          <div class='link'>
            <Link href='https://crates.io/crates/paper-terminal' external><Image name='download' alt='Download' /></Link>
          </div>
        </svelte:fragment>
        Paper typesets your text files directly in your terminal making quick reading of documents much easier.
        It works particularly well with Markdown and can even integrate with Syncat to highlight code blocks.
        Some of the rendering options for Markdown documents can be customized using the same Syncat stylesheets.
      </Project>

    </section>

    <section class='group'>
      <div class='group-name'>
        <Text accent>Games</Text>
      </div>

      <Project name='White' on:click={() => setScroll('white')}>
        <svelte:fragment slot='links'>
          <div class='link'>
            <Link href='https://github.com/foxfriends/white' external><Image name='github' alt='Repository' /></Link>
          </div>
          <div class='link'>
            <Link href='http://cameldridge.com/game/White/index.html' external><Image name='play' alt='Play' /></Link>
          </div>
          <div class='link'>
            <Link href='https://cameldridge.com/game/White.exe' download><Image name='download' alt='Download' /></Link>
          </div>
        </svelte:fragment>
        In a place where the only colour is white, you have discovered a spark of something new. Explore the
        world which reveals itself around you as you bring colours back and discover the truth about why they 
        were missing in the first place.
      </Project>
    </section>

    <section class='group'>
      <div class='group-name'>
        <Text accent>Writing</Text>
      </div>

      <Project name='My Blog' on:click={() => { window.location.href = 'https://blog.cameldridge.com'; }}>
        <svelte:fragment slot='links'>
          <div class='link'>
            <Link href='https://blog.cameldridge.com' external><Image name='home' alt='Homepage' /></Link>
          </div>
          <div class='link'>
            <Link href='https://github.com/foxfriends/blog' external><Image name='github' alt='Repository' /></Link>
          </div>
        </svelte:fragment>
        If reading blogs is something you're into, on rare occasions I will post a thought I have.
        I guess you can look if you want to.
      </Project>
    </section>

  </Paper>
</div>

<style>
  .projects-overview {
    max-width: 100%;
    width: 50rem;
    height: 70rem;
  }

  .projects-overview.mobile {
    margin: 2rem auto;
    height: unset;
  }

  .header {
    font-size: var(--font-size-title);
    text-align: center;
    padding: 3rem 0;
  }

  .mobile .header {
    padding: 0 0 3rem 0;
  }

  .rule {
    max-width: 100%;
    width: 25rem;
    margin: 1rem auto 0 auto;
  }

  .group {
    display: flex;
    flex-direction: column;
  }

  .group-name {
    font-size: var(--font-size-note);
    margin: 1rem -1.33rem;
  }

  .link {
    width: 1.75rem;
    height: 1.75rem;
  }

  .link + .link {
    margin-left: 0.75rem;
  }
</style>
