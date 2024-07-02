<script>
  export let styleType = 'fill'
  let looks
  switch (styleType) {
    case 'outline':
      looks = 'text-blue-400 bg-white border border-blue-400'
      break;
    case 'danger':
      looks = 'text-white bg-red-400'
      break;
    default:
      looks = 'text-white bg-blue-400'
      break;
  }
</script>

<button 
    class="w-full px-2.5 py-3 rounded-md text-xs {looks}"
    on:click
  >
    <slot />
</button>