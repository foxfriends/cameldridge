<script>
  import _ from '../util/keypath';
  import tween from '../util/tween';
  export let keyframes, step;

  let keys, current, components;
  $: keys = Object.keys(keyframes).map(x => +x).sort();
  $: {
    const closest = [];
    for (const key of keys) {
      if (key <= step) {
        closest[0] = key;
      }
      if (closest[0] !== step && key > step) {
        closest[1] = key;
        break;
      }
    }
    current = closest;
  }

  $: {
    components = []
      .concat(...current.map(key => Object.entries(keyframes[key])))
      .reduce((comps, [name, spec]) => {
        if (!comps[name]) { 
          comps[name] = { ...spec };
        } else {
          comps[name] = { ...spec, transform: tween.easeInOut(comps[name].transform || {}, spec.transform || {}, (step - current[0]) / (current[1] - current[0])) };
        }
        return comps;
      }, {});
  }
</script>

{#each Object.entries(components) as [name, component] (name) }
  <div class='container' style='transform: translate({_.transform.translate.x(component) || 0}px, {_.transform.translate.y(component) || 0}px)'>
    <svelte:component this={component.component} {...component.props || {}} />
  </div>
{/each}

<style>
  .container {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
