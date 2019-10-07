<script>
  import Paper from '../component/Paper.svelte';
  import Rule from '../component/Rule.svelte';
  import Text from '../component/Text.svelte';
  import Image from '../component/Image.svelte';
  import Link from '../component/Link.svelte';
</script>

<div class='syncat'>
  <Paper hmargin={'6rem'} vmargin={'3rem'}>
    <header class='header'>
      <Text heading>Syncat</Text>
      <div class='rule'><Rule /></div>
    </header>
    <div class='content'>
      <p>
        <Text>
          Syncat integrates with Tree-sitter to parse a number of languages into a labelled 
          parse tree. It then matches the parse tree to a
          <Link href='https://github.com/oinkiguana/syncat-themes' external>Syncat stylesheet</Link>, 
          which is similar in appearance and behaviour to CSS, allowing detailed and 
          accurate syntax highlighting.
        </Text>
      </p>
      <p>
        <Text>
          Extra features include Git integration, line numbering, print invisible characters, and adding 
          a frame around each file.
        </Text>
      </p>
      <p>
        <Text>
          Watch as your files go from looking like this:
        </Text>
      </p>
      <pre class='code'><code><Text mono>{''
     }fn main() -&gt; Result&lt;(), Error&gt; {'{'}
{''  }    println!("Hello world");
{''  }    Ok(())
{''  }{'}'}
      </Text></code></pre>
      <p>
        <Text>
          To this:
        </Text>
      </p>
      <pre class='code'><code><Text mono>{''
       }<span class='entity'>~</span>   <span class='comment'>1 │</span> <span class='keyword'>fn</span> <span class='function'>main</span>() <span class='keyword'>-&gt;</span> <span class='entity'>Result</span><span class='keyword'>&lt;</span>(), <span class='entity'>Error</span><span class='keyword'>&gt;</span> {'{'}<span class='comment'>¬</span>
{'    '}<span class='comment'>2 │</span>{'     '}<span class='support'>println!</span>(<span class='string'>"Hello world"</span>);<span class='comment'>¬</span>
{''    }<span class='string'>+</span>   <span class='comment'>3 │</span>{'     '}<span class='support'>Ok</span>(())<span class='comment'>¬</span>
{'    '}<span class='comment'>4 │</span> {'}'}<span class='comment'>¬</span>
      </Text></code></pre>
      <p>
        <Text>
          Unfortunately, the way Syncat is currently compiled, the resulting binary is too 
          large to be hosted on crates.io, so if you wish to try it out you will have to clone
          the repository and compile it yourself. Dynamically linking to the Tree-sitter parsers
          and handling installation of new parsers on the fly is a feature for the future.
        </Text>
      </p>
    </div>
  </Paper>
</div>

<style>
  .syncat {
    width: 40rem;
    height: 60rem;
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
  }

  .comment { color: var(--color__one-dark--comment); }
  .function { color: var(--color__one-dark--function); }
  .keyword { color: var(--color__one-dark--keyword); }
  .entity { color: var(--color__one-dark--entity); }
  .support { color: var(--color__one-dark--support); }
  .string { color: var(--color__one-dark--string); }
</style>
