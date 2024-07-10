<script>
  import { timestampToDateString } from '$lib/helpers/dateFormatter'
  
  export let title = 'Meja no.1'
  export let time = 1720578875
  export let price = '30.000'
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex justify-between items-center px-5 py-3 mb-2 rounded-lg bg-white border border-gray-400" on:click>
  <div class="flex justify-between items-center flex-grow">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
      <p class="flex-grow-0 flex-shrink-0 text-base text-left text-black">{title}</p>
      <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-black">{timestampToDateString(time * 1000)}</p>
    </div>
    <p class="flex-grow-0 flex-shrink-0 text-base text-right text-black">{price}</p>
  </div>
</div>