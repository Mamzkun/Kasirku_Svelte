<script>
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  const c = () => dispatch("click")
  
  export let name
  export let icon
  export let isActive
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex flex-col gap-1 items-center w-16" on:click={c}>
  <div 
    class="flex justify-center items-center custom-shadow bg-white border border-black rounded-lg h-14 w-14 py-1 px-3"
    class:bg-violet-300={isActive}
  >
    {icon}
  </div>
  <p class="text-center">{name}</p>
</div>