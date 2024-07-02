<script>
  export let name
  let amount = 0
  const amountPlus = () => amount++
  const amountMinus = () => amount--
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
  class="flex justify-between items-center custom-shadow border border-black rounded-lg h-14 py-1 px-3 w-full"
  class:bg-violet-300={amount > 0}
>
  <div>
    {#if amount > 0}
      <div 
        class="custom-shadow bg-white border border-black rounded-md h-6 w-6 text-center"
        on:click={amountMinus}
      > - </div>
    {/if}
  </div>

  <div on:click={amountPlus}>
    {name}
    {#if amount > 0}
      (x{amount})
    {/if}
  </div>

  <div>
    {#if amount > 0}
      <div 
        class="custom-shadow bg-white border border-black rounded-md h-6 w-6 text-center"
        on:click={amountPlus}
      > + </div>
    {/if}
  </div>
</div>