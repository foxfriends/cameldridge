<script context='module'>
  import { writable } from 'svelte/store';
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const darkMode = writable(media.matches);
  media.addListener(({ matches }) => darkMode.set(matches));
</script>

<script>
  import images from '../image/**/*.{png,svg}';

  export let name;
  export let type = 'svg';
  export let alt;

  $: themedImages = $darkMode ? images.dark : images;
  $: src = (themedImages[name] || {})[type];
  $: imageDownload = fetch(src).then(image => image.text());
</script>

{#if type === 'svg'}
  <div class='svg'>
    {#await imageDownload}
      <img {src} alt={alt} class='image {type}' />
    {:then image}
      {@html image}
    {/await}
  </div>
{:else}
  <img {src} alt={alt || name} class='image {type}' />
{/if}

<style>
  .image {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-body);
    font-size: 0.8rem;
  }

  .svg {
    width: 100%;
    height: 100%;
  }

  .svg :global(svg) { 
    width: 100%; 
    height: 100%;
  }
</style>
