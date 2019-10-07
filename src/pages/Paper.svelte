<script>
  import Paper from '../component/Paper.svelte';
  import Rule from '../component/Rule.svelte';
  import Text from '../component/Text.svelte';
  import Image from '../component/Image.svelte';
  import Link from '../component/Link.svelte';
</script>

<div class='paper'>
  <Paper hmargin={'6em'} vmargin={'3em'}>
    <pre><Text mono>
─────────────────────────────────────────────────────────
    <b>Paper</b>
─────────────────────────────────────────────────────────

<b>Paper</b> is a command line application that takes Markdown
files and prints them just like you see it here---page,
shadow and all.  Despite Markdown being designed to be
easy to parse even as plain text, there's no denying that
a properly formatted document is easier to read.

Pretty much every feature of Markdown is supported
including a number of extensions as well as automatic
line wrapping.

Paper can even integrate with <b>Syncat</b> to highlight
tagged code blocks in your document.  Certain other
settings can be customized by use of the same Syncat
stylesheets.

<b>Paper</b> is hosted on crates.io, so if you have <b>Cargo</b> 
set up, you can install it now with just one command:

<code>
<span class='function'>cargo</span> install paper-terminal
                                                   <span class='comment'>sh</span>
</code>
    </Text></pre>
  </Paper>
</div>

<style>
  .paper {
    --paper--image: none;
    --paper--color: var(--color__one-dark--white);
    --paper--shadow: 1em 1em var(--color__one-dark--lightblack);

    --text--font: 'Fira Sans', sans-serif;
    --text--font-heading: 'Fira Sans', sans-serif;
    --text--font-accent: 'Fira Sans', sans-serif;

    --color-ink: var(--color__one-dark--black);
  }

  code {
    box-sizing: border-box;
    display: block;
    padding: 1rem 1rem 0 1rem;

    background-color: var(--color__one-dark--black);
    color: var(--color__one-dark--white);
  }

  .function {
    color: var(--color__one-dark--function);
  }

  .comment {
    color: var(--color__one-dark--comment);
  }
</style>
