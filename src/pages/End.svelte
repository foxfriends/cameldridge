<script>
  import Paper from 'scattered-papers/Paper.svelte';
  import Rule from 'scattered-papers/Rule.svelte';
  import Text from 'scattered-papers/Text.svelte';
  import Image from 'scattered-papers/Image.svelte';
  import Link from 'scattered-papers/Link.svelte';

  export let mobile = false;
</script>

<div class='end {mobile ? 'mobile' : ''}'>
  <Paper>
    <div class='thanks'>
      <div class='title'>
        <Text heading>Thanks for visiting.</Text>
      </div>
      <div class='subtitle'>
        <Link href='mailto:cam.eldridge@gmail.com'><Text accent>get in touch</Text></Link>
      </div>
    </div>

    <div class='copyright'>
      <Text>&copy; 2024 &ndash; Cameron Eldridge</Text>
    </div>
  </Paper>
</div>

<style>
  .end {
    position: relative;
    width: 35rem;
    height: 20rem;
    max-width: 100%;
  }

  .end.mobile {
    margin: 2rem auto;
  }

  .thanks {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .title {
    font-size: var(--font-size-title);
  }

  .subtitle {
    font-size: var(--font-size-note);
  }

  .copyright {
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
  }
</style>
