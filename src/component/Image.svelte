<script context='module'>
  import { writable } from 'svelte/store';
  const darkMode = writable(false);
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener(({ matches }) => darkMode.set(matches));
</script>

<script>
  import images from '../image/**/*.{png,svg}';

  export let name;
  export let type = 'svg';
  export let alt;

  $: themedImages = $darkMode ? images.dark : images;
  $: src = themedImages[name][type];
</script>

<img {src} alt={alt || name} class='{type}' />

<style>
  .svg {
    width: 100%;
    height: 100%;
  }
</style>
