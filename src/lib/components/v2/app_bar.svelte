<script>
  export let title = 'title'
  export let showBack = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<header class="flex justify-between items-center w-full px-6 py-4 bg-white h-16 border-b">
  <div class="w-6">
     {#if showBack}
     <img 
       src="/icons/ic_back.svg" 
       alt="back"
       on:click={()=> history.go(-1)}
     >
     {/if}
  </div>
  <h1 class="text-lg text-center text-black font-medium">{title}</h1>
  <div class="w-6"><slot/></div>
</header>