<script>
  export let label = ''
  export let value = ''
  export let placeholder = ''
</script>

<div class="flex flex-col w-full gap-1">

  {#if label !== ''}
    <label for="" class="text-xs text-left text-black">{label}</label>
  {/if}

  <div class="flex justify-start items-center h-12 px-3 py-2 rounded-lg bg-white border border-gray-400">
    <input type="text" placeholder={placeholder} class="text-sm w-full focus:outline-none focus:ring-0" bind:value>
  </div>
  
</div>