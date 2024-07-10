<script>
  import { onMount } from 'svelte'
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputSearch from '$lib/components/v2/input/input_search.svelte'
  import CardMenu from '$lib/components/v2/card/card_menu.svelte'
  import ButtonIcon from '$lib/components/v2/button_icon.svelte';
  import { productList } from '../../(dashboard)/menu/store'
  import { filterProduct } from '$lib/helpers/productFilter'
  import { listOfOrder, jumlahItem } from '../create-order/store'

  let searchValue = ''
  let categorySelected = 'all'
  const categories = [
    { id: 'all', text: `Semua` },
    { id: 'food', text: `Makanan` },
    { id: 'drink', text: `Minuman` },
    { id: 'snack', text: `Camilan` }
  ]
  let products, filteredProducts
  productList.subscribe(value => {products = value})
  $: filteredProducts = filterProduct(products, categorySelected, searchValue)

  onMount( async () => {
    if (filteredProducts.length === 0 ) { fetchProduct() }
  })

  const fetchProduct = async () => {
    const product = await fetch('/api/product', {
      method: 'GET',
      headers: {'content-type': 'application/json'}
    })
    const result = await product.json()
    productList.set(result.data)
  }
</script>

<div>
  <div class="sticky top-0 z-10">
    <AppBar title="Daftar Menu" showBack="true" backIcon="/icons/ic_close.svg" />
    <div class="flex gap-2 bg-white pt-4 pb-6 px-6">
      <InputSelect options={categories} bind:value={categorySelected} />
      <InputSearch placeholder="cari produk..." bind:value={searchValue} />
    </div>
  </div>
  {#each filteredProducts as product}
    <CardMenu product={product} >
      <ButtonIcon icon="/icons/ic_minus.svg" on:click={ () => listOfOrder.detach(product) } />
      <p class="px-2">{$jumlahItem[product.id] || 0}</p>
      <ButtonIcon icon="/icons/ic_plus.svg" on:click={ () => listOfOrder.attach(product) } />
    </CardMenu>
  {/each}
</div>