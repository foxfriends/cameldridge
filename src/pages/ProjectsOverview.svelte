<script>
  import Paper from '../component/Paper.svelte';
  import Rule from '../component/Rule.svelte';
  import Text from '../component/Text.svelte';
  import Project from '../component/Project.svelte';
  import Image from '../component/Image.svelte';
</script>

<div class='projects-overview'>
  <Paper hmargin={'6rem'} vmargin={'3rem'}>
    <header class='header'>
      <Text heading>Projects</Text>
      <div class='rule'><Rule /></div>
    </header>

    <section class='group'>
      <div class='group-name'>
        <Text accent>Apps</Text>
      </div>

      <Project name='ConArtist'>
        <a href='https://conartist.app' target='_blank' class='link' slot='links'><Image name='home' alt='Homepage' /></a>
        <a href='https://github.com/foxfriends/conartist' target='_blank' class='link' slot='links'><Image name='github' alt='Repository' /></a>

        A sales and inventory tracking solution specialized for con(vention) artists. With over 200 users have
        signed up and sales recorded at more than 20 conventions worldwide, this has been my biggest project
        to-date. Right now there are web and iOS apps with Android hopefully soon to follow.
      </Project>

    </section>

    <section class='group'>
      <div class='group-name'>
        <Text accent>Tools</Text>
      </div>

      <Project name='Syncat'>
        <a href='https://github.com/foxfriends/syncat' target='_blank' class='link' slot='links'><Image name='github' alt='Repository' /></a>
        A replacement for the standard <Text mono>cat</Text> tool featuring syntax highlighting,
        Git integration, and other useful features for displaying code on your terminal. CSS-like
        &ldquo;Syncat stylesheets&rdquo; allow for fine-grained highlighting of the parse tree, as parsed by
        Tree-sitter.
      </Project>

      <Project name='Paper'>
        <a href='https://github.com/foxfriends/paper-terminal' target='_blank' class='link' slot='links'><Image name='github' alt='Repository' /></a>
        <a href='https://crates.io/crates/paper-terminal' target='_blank' class='link' slot='links'><Image name='download' alt='Download' /></a>
        Paper typesets your text files directly in your terminal making quick reading of documents much easier.
        It works particularly well with Markdown and can even integrate with Syncat to highlight code blocks.
        Some of the rendering options for Markdown documents can be customized using the same Syncat stylesheets.
      </Project>

    </section>

    <section class='group'>
      <div class='group-name'>
        <Text accent>Games</Text>
      </div>

      <Project name='White'>
        <a href='https://github.com/foxfriends/white' target='_blank' class='link' slot='links'><Image name='github' alt='Repository' /></a>
        <a href='http://cameldridge.com/game/White/index.html' target='_blank' class='link' slot='links'><Image name='play' alt='Play' /></a>
        <a href='https://cameldridge.com/game/white.exe' target='_blank' class='link' slot='links'><Image name='download' alt='Download' /></a>
        In a world where the only colour is white, you have discovered a spark of something new. Explore the
        which reveals itself around you as you bring colours back and discover the truth about why they were
        missing in the first place.
      </Project>
    </section>

  </Paper>
</div>

<style>
  .projects-overview {
    width: 50rem;
    height: 70rem;
  }

  .header {
    font-size: var(--font-size-title);
    text-align: center;
    padding: 3rem;
  }

  .rule {
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
