<script>
  import Paper from './component/Paper.svelte';
  import Rule from './component/Rule.svelte';
  import Text from './component/Text.svelte';
  import Image from './component/Image.svelte';
</script>

<div class='name-card'>
  <Paper>
    <div class='name'>
      <Text heading>Cameron Eldridge</Text>
    </div>
    <a href='https://github.com/OinkIguana' class='logo github'>
      <Image name='github' alt='GitHub' /><span class='link-text'><Text>OinkIguana</Text></span>
    </a>
  </Paper>
</div>

<style>
  .name-card {
    width: 40rem;
    height: 20rem;
  }

  .name {
    position: absolute;
    left: 3rem;
    top: 3rem;
    font-size: 20pt;
  }

  .logo {
    position: absolute;
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;
  }

  .github {
    left: 3rem;
    bottom: 3rem;
  }

  .link-text {
    margin-left: 1rem;
    font-size: 16pt;
  }
</style>
