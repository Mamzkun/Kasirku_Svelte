<script>
  export let isRed = false
</script>

<button 
  class="custom-shadow bg-green-300 border border-black rounded-lg h-10 py-1 px-3 w-full"
  class:bg-red-400={isRed}
  on:click
>
  <slot></slot>
</button>