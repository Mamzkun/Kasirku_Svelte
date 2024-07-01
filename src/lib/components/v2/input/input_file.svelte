<script>
  export let label = ''
  let value = ''

  let file;
  let fileName = '';

  function handleFileChange(event) {
    file = event.target.files[0];
    if (file) {
      fileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        value = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

</script>

<div class="flex flex-col w-full gap-1">

  {#if label !== ''}
    <label for="" class="text-xs text-left text-black">{label}</label>
  {/if}

  <div class="flex justify-start items-center h-12 px-3 py-2 rounded-lg bg-white border border-gray-400 gap-2">
    <img src="/icons/ic_picture.svg" alt="picture_icon">
    <input id="file-input" type="file" accept="image/*" class="hidden" on:change={handleFileChange}/>
    <label for="file-input" class="text-sm w-full cursor-pointer focus:outline-none focus:ring-0">
      {fileName || 'Choose a file'}
    </label>
  </div>
  
</div>