<script>
  export let width = 16, height = 10, interval = 32, margin = 0;
</script>

<div class='paper' style='
  width: {width * interval}px; 
  height: {height * interval}px;
  margin: {margin * interval}px auto;
'>
  <slot></slot>
</div>

<style>
  .paper {
    position: relative;
    background-color: #FAFAFA;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.6);
  }
</style>
