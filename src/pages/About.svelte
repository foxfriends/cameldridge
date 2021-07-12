<script>
  import Paper from 'scattered-papers/Paper.svelte';
  import Text from 'scattered-papers/Text.svelte';
  import Image from 'scattered-papers/Image.svelte';
  import Link from 'scattered-papers/Link.svelte';

  export let mobile = false;
</script>

<div class='about {mobile ? 'mobile' : ''}'>
  <Paper hmargin={mobile ? '3rem' : '6rem'} vmargin={mobile ? '3rem' : '6rem'}>

    <p>
      <Text>
        As a programmer, I try not to forget that <b>I am a consumer of code</b>
        as much as we are all consumers of apps.
      </Text>
    </p>

    <p>
      <Text>
        I believe it is important to write code in ways that are both 
        <i><b>logically</b> and <b>visually</b> pleasing</i>.
      </Text>
    </p>

    <p>
      <Text>
        I like using <i><b>strong</b> and <b>expressive</b> type systems</i>
        to create safe but powerful systems.
      </Text>
    </p>

    <p>
      <Text>
        I like using <b>functional programming</b> techniques to make my code
        beautiful and concise.
      </Text>
    </p>

    <p>
      <Text>
        I use <b>Rust</b> whenever possible. I know <b>JavaScript</b> about as 
        well as anyone can. I use <b>Swift</b> because I have to.
      </Text>
    </p>

    <p>
      <Text>
        I make <b>websites, apps, games</b>&hellip; and pretty much anything else I feel 
        like building.
      </Text>
    </p>

    <p>
      <Text><b>I just like writing code.</b></Text>
    </p>

  </Paper>
</div>

<style>
  .about {
    max-width: 100%;
    width: 40rem;
  }

  .about.mobile {
    margin: 2rem auto;
  }

  p + p {
    margin-top: 1rem;
  }
</style>
