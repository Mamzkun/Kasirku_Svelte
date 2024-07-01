<script>
  export let title = 'title'
  export let showBack = true
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<header class="flex justify-between items-center w-full px-6 py-4 bg-white">
  <div class="w-6">
     {#if showBack}
     <img 
       src="/icons/ic_back.svg" 
       alt="back"
       on:click={()=> history.go(-1)}
     >
     {/if}
  </div>
  <h1 class="text-base text-center text-black font-semibold">{title}</h1>
  <div class="w-6"></div>
</header>