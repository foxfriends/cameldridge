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
        as much as we are all consumers of programs.
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
        I like using <i><b>strong</b> and <b>expressive</b> logical systems</i>
        to create safe but powerful applications.
      </Text>
    </p>

    <p>
      <Text>
        I apply a range of techniques from across <b>multiple disciplines</b>, to
        solve each problem as accurately as I can.
      </Text>
    </p>

    <p>
      <Text>
        I use <b>Rust</b> whenever possible. I know <b>JavaScript</b> about as
        well as anyone can expect to. I am always ready for another language.
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
