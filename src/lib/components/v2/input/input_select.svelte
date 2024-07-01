<script>
  export let label = ''
  export let value = 1
  export let options = [
		{ id: 1, text: `Where did you` },
		{ id: 2, text: `What is your` },
		{ id: 3, text: `What is another` }
	];
</script>

<div class="flex flex-col w-full gap-1">

  {#if label !== ''}
    <label for="" class="text-xs text-left text-black">{label}</label>
  {/if}

  <div class="flex justify-start items-center h-12 px-3 py-2 rounded-lg bg-white border border-gray-400 gap-2">
    <select class="text-sm w-full focus:outline-none focus:ring-0 bg-transparent" bind:value>
      {#each options as option}
        <option value={option.id}>
          {option.text}
        </option>
      {/each}
    </select>
  </div>
  
</div>