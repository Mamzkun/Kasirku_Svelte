<script>
  export let styleType = 'fill'
  let looks = styleType === 'fill' ? 'text-white bg-blue-400' : 'text-blue-400 bg-white border border-blue-400'
</script>

<button 
    class="w-full px-2.5 py-3 rounded-md text-xs {looks}"
    on:click
  >
    <slot />
</button>