<script>
  import Paper from './component/Paper.svelte';
  import Rule from './component/Rule.svelte';
  import Text from './component/Text.svelte';
  export let interval = 32; // px
</script>

<Paper {interval} width={8} height={4}>
  <Text {interval} x={1} y={1} text='Cameron Eldridge' size={interval / 4} heading />
</Paper>
