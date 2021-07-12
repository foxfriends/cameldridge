<script>
  import Paper from 'scattered-papers/Paper.svelte';
  import Rule from 'scattered-papers/Rule.svelte';
  import Text from 'scattered-papers/Text.svelte';
  import Image from 'scattered-papers/Image.svelte';
  import Link from 'scattered-papers/Link.svelte';

  export let mobile = false;
</script>

<div class='container {mobile ? 'mobile' : ''}'>

  <div class='description {mobile ? 'mobile' : ''}'>
    <Paper hmargin={mobile ? '3rem' : '6rem'} vmargin={'3rem'}>
      <header class='header'>
        <Text heading>ConArtist</Text>
        <div class='rule'><Rule /></div>
      </header>
      <div class='content'>
        <p>
          <Text>
            ConArtist had been my main project since around 2016 and, having undergone numerous rewrites and
            redesigns since then, was released to the public at the end of 2018. It now has over 200 sign-ups
            (but, admittedly, only 20 or so actual users).
          </Text>
        </p>
        <p>
          <Text>
            The initial project was built using Node.js, Angular, and React Native, but I soon found all three
            of these technologies to be hard to maintain. The final (current) version consists of:
          </Text>
        </p>
        <ul>
          <li><Text>a <b>Rust</b> web server, on top of</Text></li>
          <li><Text>a <b>PostgreSQL</b> database, exposing</Text></li>
          <li><Text>a <b>GraphQL</b> API, to</Text></li>
          <li><Text>a <b>React</b> web app, and</Text></li>
          <li><Text>a <b>Swift</b> native iOS app.</Text></li>
        </ul>
        <p>
          <Text>
            A native Android app is left as a project for my future self.
          </Text>
        </p>
      </div>

    </Paper>
  </div>

  <div class='conartist {mobile ? 'mobile' : ''}'>
    <Paper>
      <header class='header'>
        <div class='logo'>
          <Image name='conartist' />
        </div>
        <div class='title'>
          <div class='heading'><Text heading>ConArtist</Text></div>
          <div class='subheading'><Text>The money counter for the busy tabler</Text></div>
        </div>
      </header>
      <div class='links'>
        <Text>Get started at <span class='link'><Text sc semibold><Link href='https://conartist.app' external>conartist.app</Link></Text></span></Text>
      </div>
      <div class='stores'>
        <div class='appstore'>
          <Link href='https://itunes.apple.com/us/app/conartist/id1448972207' external>
            <Image name='app-store' alt='Download on the App Store' />
          </Link>
        </div>
      </div>
    </Paper>
  </div>

</div>

<style>
  .container {
    position: relative;
    max-width: 100%;
  }

  .container.mobile {
    overflow: hidden;
    margin: 2rem 0;
  }

  /** Description page */
  .description {
    width: 40rem;
    max-width: 100%;
    height: 60rem;
  }

  .description.mobile {
    height: unset;
    margin: 0 auto;
  }

  .description .header {
    font-size: var(--font-size-title);
    text-align: center;
    padding-top: 3rem;
  }

  .description.mobile .header {
    padding-top: 0;
  }

  .description.mobile .content {
    padding-bottom: 18rem;
  }

  .description .rule {
    width: 25rem;
    max-width: 100%;
    margin: 1rem auto;
  }

  .description p {
    margin-bottom: 1rem;
  }

  .description p + p {
    text-indent: 2rem;
  }

  /** ConArtist business card */
  .conartist {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 35rem;
    height: 20rem;

    transform-origin: top right;
    transform: translateY(-1em) rotate(-4deg);

    color: var(--color-ink);

    --paper--image: none;
    --paper--color: #333333;

    --text--font: 'Fira Sans', sans-serif;
    --text--font-heading: 'Fira Sans', sans-serif;
    --text--font-accent: 'Fira Sans', sans-serif;

    --color-ink: white;
    --link--color: #cf4516;
    --link--color-hover: #d9991e;
  }

  .conartist.mobile {
    transform: rotate(-4deg) scale(0.75);
  }

  .conartist .header {
    position: absolute;
    left: 2.5rem;
    top: 2.5rem;

    display: flex;
    align-items: center;
  }

  .conartist .logo {
    width: 4rem;
    height: 4rem;
    margin-right: 0.5rem;
  }

  .conartist .heading {
    font-size: var(--font-size-title);
    font-weight: 700;
  }

  .conartist .subheading {
    font-size: var(--font-size-note);
  }

  .conartist .links {
    position: absolute;
    bottom: 2rem;
    left: 3rem;
  }

  .conartist .link {
    font-size: 1.1em;
  }

  .stores {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }

  .appstore {
    width: 9rem;
  }
</style>
