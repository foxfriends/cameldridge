<script>
  import Paper from './component/Paper.svelte';
  import Text from './component/Text.svelte';
  import Image from './component/Image.svelte';
</script>

<div class='name-card'>
  <Paper>
    <div class='titles'>
      <div class='name'>
        <Text heading>Cameron Eldridge</Text>
      </div>
      <div class='role'>
        <Text>Software Developer</Text>
      </div>
    </div>
    <div class='links'>
      <a href='https://github.com/OinkIguana' class='link'>
        <span class='link-image logo'><Image name='github' alt='GitHub' /></span>
        <span class='link-text'><Text>foxfriends</Text></span>
      </a>
      <a href='https://cameldridge.com' class='link'>
        <span class='link-image logo'><Image name='globe' alt='Website' /></span>
        <span class='link-text'><Text>cameldridge.com</Text></span>
      </a>
      <a href='mailto:cam.eldridge@gmail.com' class='link'>
        <span class='link-image logo'><Image name='mail' alt='E-mail' /></span>
        <span class='link-text'><Text>cameldridge@gmail.com</Text></span>
      </a>
    </div>
    <div class='qr-code'>
      <Image name='qr-code' alt='' />
    </div>
  </Paper>
</div>

<style>
  .name-card {
    width: 35rem;
    height: 20rem;
  }
  
  .titles {
    position: absolute;
    left: 3rem;
    top: 3rem;
  }

  .name {
    font-size: var(--font-size-heading);
  }

  .role {
    font-size: var(--font-size-subheading);
  }

  .logo {
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }

  .links {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    left: 2rem;
    bottom: 2rem;
  }

  .link {
    display: inline-flex;
    align-items: center;
    margin-top: 0.5rem;
  }

  .link-image {
    margin-right: 1rem;
  }

  .link-text {
    font-size: var(--font-size-body);
  }

  .qr-code {
    position: absolute;
    width: 8rem;
    height: 8rem;
    right: 2rem;
    bottom: 2rem;
  }
</style>
