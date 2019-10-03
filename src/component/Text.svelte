<!--
  # Text

  The `Text` component renders some text. It is not supported to include tags other than
  text styling tags as the content for this component.

  ## Usage

  ```
  <Text>Hello world</Text>
  ```

  ## Props

  *   `heading`: Flag to use the heading font. Default: `false`
  *   `mono`: Flag to enable the monospaced font. Default: `false`
  *   `accent`: Flag to enable an accent font. Default: `false`
-->

<script>
  export let heading = false;
  export let mono = false;
  export let accent = false;
  $: classes = Object.entries({ text: true, heading, mono, accent })
    .filter(([, include]) => include)
    .map(([name]) => name)
    .join(' ');
</script>

<!--
  ## Slots

  *   `default`: The text to render.
-->

<span class={classes}>
  <slot />
</span>

<!--
  ## Styles

  *   `--text--font`: The default font to use.
  *   `--text--font-heading`: The heading font to use.
  *   `--text--font-mono`: The monospaced font to use.
  *   `--text--font-accent`: The accent font to use.
-->

<style>
  .text {
    font-family: var(--text--font);
  }

  .heading {
    font-family: var(--text--font-heading);
  }

  .mono {
    font-family: var(--text--font-mono);
  }

  .accent {
    font-family: var(--text--font-accent);
  }
</style>
