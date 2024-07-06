<script>
  export let label = ''
  export let value = ''
  export let placeholder = ''
  let show = false
  $: eye = show ? '/icons/ic_eye_close.svg' : '/icons/ic_eye_open.svg'
</script>

<div class="flex flex-col w-full gap-1">

  {#if label !== ''}
    <label for="" class="text-xs text-left text-black">{label}</label>
  {/if}

  <div class="flex justify-start items-center h-12 px-3 py-2 rounded-lg bg-white border border-gray-400">
    {#if show}
       <input 
         type="text" 
         placeholder={placeholder}
         class="text-sm w-full focus:outline-none focus:ring-0" 
         bind:value
       >
    {:else}
       <input 
         type="password" 
         placeholder={placeholder}
         class="text-sm w-full focus:outline-none focus:ring-0" 
         bind:value
       >
    {/if}
       
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img 
      src={eye}
      alt="eye-open"
      on:click={()=>show = !show}
    >
       
  </div>
  
</div>