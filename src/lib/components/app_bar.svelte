<script>
  export let titlePage
  export let backTo
</script>

<nav class="sticky top-0 bg-white z-10 h-16 px-6 py-4 border flex justify-between">
  <div class="w-6 flex items-center">
    {#if backTo}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <h1 on:click={()=> {
          history.go(-1)
          console.log(123);
          
        }}>⬅️</h1>
    {/if}
  </div>  
  <div>
    <h1 class="text-xl">{titlePage}</h1>
  </div>  
  <div class="w-6"></div>
</nav>