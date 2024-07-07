<script>
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputFile from '$lib/components/v2/input/input_file.svelte'
  import Button from '$lib/components/v2/button.svelte'

  export let product, afterSubmit
  let file, isLoading
  let id = product != undefined ? product.id : ''
  let name = product != undefined ? product.name : ''
  let category = product != undefined ? product.category : ''
  let price = product != undefined ? product.price : ''

  const handleSubmit = async () => {
    isLoading = true
    let res = null
    if (product != undefined) {
      res = await fetch('/api/product', {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({id, name, category, price, file})
      })
    } else {
      res = await fetch('/api/product', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name, category, price, file})
      })
    }
    const result = await res.json()
    if (result.error) {
      alert(result.message)
    } else {
      afterSubmit()
    }
    isLoading = false
  }

</script>

<div class="absolute bottom-0 right-0 left-0 mx-auto max-w-md z-20 flex justify-center">
  <div class="w-full bg-white border-t-2 rounded-xl py-4 px-6">
    <div class="flex justify-between">
      <h2 class="font-medium mb-6">Edit Menu</h2>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img src="/icons/ic_close.svg" alt="" class="h-6" on:click>
    </div>
      <div class="flex flex-col gap-4">
      <InputSelect label="kategori" bind:value={category} />
      <InputText label="nama" placeholder="nama produk" bind:value={name} />
      <InputNumber label="harga" placeholder="harga produk" bind:value={price} />
      <InputFile label="gambar produk (opsional)" bind:file />
      <Button on:click={handleSubmit} isLoading={isLoading} >Simpan</Button>
      </div>
  </div>
</div>