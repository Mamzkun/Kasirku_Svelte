<script>
  import CardOrder from '$lib/components/v2/card/card_order.svelte'
  import { onMount } from 'svelte';
  import { holdedOrder } from './store'

  let totalData, totalMoney
  
  onMount(() => getHoldedOrder())

  const getHoldedOrder = async () => {
    const res = await fetch('/api/order?mode=0', { method: 'GET' })
    const result = await res.json()
    if (result.error) {
      alert(result.message)
    } else {
      totalData = result.data.total_data
      totalMoney = result.data.total_money
      holdedOrder.set(result.data.holded)
    }
  }
</script>

<div class="sticky top-0 bg-white pb-2 z-10 px-6 pt-4">
  <h2 class="mb-4">Transaksi Hari ini:</h2>
  <div class="flex justify-between gap-4 text-white">
    <div class="border rounded-lg px-4 py-3 flex-grow bg-blue-400">
      <p class="text-xs">total transaksi:</p>
      <p class="font-semibold">{totalData || 0}</p>
    </div>
    <div class="border rounded-lg px-4 py-3 flex-grow bg-blue-400">
      <p class="text-xs">total perolehan:</p>
      <p class="font-semibold">Rp. {totalMoney || 0}</p>
    </div>
  </div>
  <h2 class="my-4">Transaksi Sedang Berlangsung:</h2>
</div>

<div class="px-6">
  {#each $holdedOrder as order}
    <CardOrder title={`Meja no.${order.label}`} time={order.order_date.seconds} price={order.total} />
  {/each}
</div>
