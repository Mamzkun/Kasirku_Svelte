<script>
  import { onMount } from 'svelte'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputSearch from '$lib/components/v2/input/input_search.svelte'
  import CardMenu from '$lib/components/v2/card/card_menu.svelte'
  import ButtonIcon from '$lib/components/v2/button_icon.svelte'
  import { productList } from './store'
  import { filterProduct } from '$lib/helpers/productFilter'

  let searchValue = ''
  let categorySelected = 'all'
  const categories = [
    { id: 'all', text: `Semua` },
    { id: 'food', text: `Makanan` },
    { id: 'drink', text: `Minuman` },
    { id: 'snack', text: `Camilan` }
  ]
  let products
  productList.subscribe(value => {products = value})
  $: filteredProducts = filterProduct(products, categorySelected, searchValue)

  onMount( async () => {
    fetchProduct()
  })

  const fetchProduct = async () => {
    const product = await fetch('/api/product', {
      method: 'GET',
      headers: {'content-type': 'application/json'}
    })
    const result = await product.json()
    productList.set(result.data)
  }

  const deleteProduct = async (product_id) => {
    if (!confirm('apakah anda yakin ingin menghapus produk ini?')) {
      return
    }
    
    const response = await fetch('/api/product', {
      method: 'DELETE',
      body: JSON.stringify({product_id}),
      headers: {'content-type': 'application/json'}
    })
    
    const result = await response.json()
    if (!result.error){fetchProduct()}
  }

</script>

<div class="sticky top-0 flex gap-2 bg-white pt-4 pb-6 px-6 z-10">
  <InputSelect options={categories} bind:value={categorySelected} />
  <InputSearch placeholder="cari produk..." bind:value={searchValue} />
</div>

{#each filteredProducts as product}  
  <CardMenu title={product.name} price={product.price} image={product.image} >
    <ButtonIcon icon="/icons/ic_pencil.svg" />
    <ButtonIcon icon="/icons/ic_bin.svg" on:click={deleteProduct(product.id)} />
  </CardMenu>
{/each}