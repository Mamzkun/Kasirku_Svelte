<script>
  import { onMount } from 'svelte'
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import CardOrder from '$lib/components/v2/card/card_order.svelte'
  import InputDate from '$lib/components/v2/input/input_date.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import { orderHistory } from './store'
  import { getInputFormatDateToday } from '$lib/helpers/dateFormatter'

  let date = getInputFormatDateToday()
  let table
  let isMounting = false
  let filteredOrder = []

  onMount(() => { isMounting = true })
  $: if(isMounting && date){ getHistory() }
  $: filteredOrder = table ? $orderHistory.filter(item => item.label == table) : $orderHistory;

  const getHistory = async () => {
    const res = await fetch(`/api/order?date=${date}`, { method: 'GET' })
    const result = await res.json()
    if (result.error) {
      alert(result.message)
    } else {
      orderHistory.set(result.data)
    }
  }

</script>

<div>
  <div class="sticky top-0 z-10">
    <AppBar title="Histori" showBack="true" />
    <div class="flex gap-2 bg-white pt-4 pb-6 px-6">
      <InputDate bind:value={date} />
      <InputNumber placeholder="Nomor Meja" bind:value={table} />
    </div>
  </div>

  <div class="px-6">
    {#each filteredOrder as order}
      <CardOrder id={order.id} title={`Meja no.${order.label}`} time={order.order_date.seconds} price={order.total} />
    {/each}
  </div>
  
</div>