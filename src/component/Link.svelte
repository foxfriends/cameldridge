<!--
  # Link

  The `Link` component encapsulates the regular `<a>` tag, providing the default styling.

  ## Usage

  ```
  <Link href='https://cameldridge.com'>cameldridge.com</Link>
  ```

  ## Props

  *   `href`: The URL this link points to. Default: `undefined`
  *   `external`: Flag to set `target='_blank'` on the link, to open in a new tab. Default: `false`
  *   `download`: Flag to make this link a download link. Default: `false`
  *   `discrete`: Flag that enables a more discrete styling for the link. Default: `false`

  ## Events

  *   `click`: Emitted when the link content is clicked.
-->
<script>
  export let href = undefined;
  export let external = undefined;
  export let download = undefined;
  export let discrete = undefined;

  $: target = external ? '_blank' : undefined;
</script>

<!--
  ## Slots

  *   `default`: The content to render as a link.
-->

{#if href}
  <a on:click|stopPropagation {href} {target} {download} class='link {discrete ? 'discrete' : ''}'>
    <slot />
  </a>
{:else}
  <div on:click|stopPropagation class='link {discrete ? 'discrete' : ''}'>
    <slot />
  </div>
{/if}

<!--
  ## Styles

  *   `--link--color`: The colour of the link text.
  *   `--link--color-hover`: The colour of the link text when the mouse hovers over it.
-->

<style>
  .link {
    cursor: pointer;
  }

  .link:link, .link:visited, .link:active {
    color: var(--link--color);
    text-decoration: none;
  }

  .link:hover, .link:focus {
    color: var(--link--color-hover);
    text-decoration: underline;
  }

  .link.discrete {
    color: var(--color-ink);
  }
</style>
