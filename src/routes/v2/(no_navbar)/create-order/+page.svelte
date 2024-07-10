<script>
  import { goto } from '$app/navigation'
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import Button from '$lib/components/v2/button.svelte'
  import ButtonIcon from '$lib/components/v2/button_icon.svelte'
  import CardCheckout from '$lib/components/v2/card/card_checkout.svelte'
  import { listOfOrder, count, table as writableTable, money as writeableMoney, orderId } from './store'

  let table = $writableTable
  let money = $writeableMoney
  $: writableTable.set(table)
  $: writeableMoney.set(money)
  let paymentMethod = 'tunai'
  const listOfPaymentMethod = [
    { id: 'tunai', text: `Tunai` },
    { id: 'qris', text: `QRIS` },
    { id: 'transfer', text: `Transfer` },
    { id: 'debit', text: `Debit` },
  ]
  $: cashback = money - $count > 0 ? money - $count : 0;

  const handleSave = async () => {
    if (!table) {
      alert('isi nomor meja terlebih dahulu')
    } else {
      saveNewOrder(false)
    }
  }

  const handleProcess = async () => {
    if (!table) {
      alert('isi nomor meja terlebih dahulu')
    } else {
      saveNewOrder(true)
    }
  }

  const saveNewOrder = async (finish) => {
    let moneys = paymentMethod === 'tunai' ? money : $count
    const response = await fetch(`/api/order${finish ? '?finish=true' : ''}`, {
      method: 'POST',
      body: JSON.stringify({
        label: table, 
        money: moneys || 0, 
        total: $count, 
        method: paymentMethod,
        orderList: $listOfOrder
      }),
      headers: {'content-type': 'application/json'}
    })
    
    const result = await response.json()
    if (result.error){
      console.log(result.message)
    } else {
      listOfOrder.set([])
      writableTable.set(undefined)
      writeableMoney.set(undefined)
      goto('/v2/home')
    }
  }

</script>

<div class="flex flex-col justify-between w-full h-full">
  <div>
    <div class="sticky top-0 z-10">
      <AppBar title="Buat Pesanan Baru" showBack="true" />
      <div class="flex gap-2 bg-white pt-4 pb-6 px-6">
        <InputNumber placeholder="Nomor Meja" bind:value={table} />
        <Button on:click={()=>  goto('/v2/choose-menu')}>Daftar Menu</Button>
      </div>
    </div>
    {#each $listOfOrder as order}
      <CardCheckout title={order.name} price={order.price * order.amount}>
        <ButtonIcon icon="/icons/ic_minus.svg" on:click={() => listOfOrder.detach(order)} />
        <p class="px-2">{order.amount}</p>
        <ButtonIcon icon="/icons/ic_plus.svg" on:click={() => listOfOrder.attach(order)} />
      </CardCheckout>
    {/each}

  </div>
  
  {#if $listOfOrder.length !== 0}
    <div class="sticky bottom-0 z-10 px-6 border-t-2 pt-4 rounded-3xl bg-white">
      <div class="flex justify-between text-sm">
        <p>Total:</p>
        <p class="font-semibold">Rp. {$count}</p>
      </div>
      <div class="py-4 flex flex-col gap-2">
        <div class="flex gap-2">
          <InputSelect label="Metode Pembayaran" options={listOfPaymentMethod} bind:value={paymentMethod} />
          {#if paymentMethod === 'tunai'}
            <InputNumber label="Jumlah Uang" placeholder="Rp." bind:value={money} />
          {/if}
        </div>
        {#if paymentMethod === 'tunai'}
          <div class="flex justify-between text-sm">
            <p>Kembalian:</p>
            <p class="font-semibold">Rp. { cashback }</p>
          </div>
        {/if}
        <div class="flex gap-4 mt-2">
          <Button styleType="outline" on:click={handleSave}>Simpan</Button>
          <Button on:click={handleProcess}>Proses</Button>
        </div>
      </div>
    </div>
  {/if}
</div>