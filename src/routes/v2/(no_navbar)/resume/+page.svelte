<script>
  import Button from '$lib/components/v2/button.svelte'
  import { response } from '../create-order/store'

</script>

<div class="flex flex-col justify-between items-center h-screen w-screen p-6 pt-16">
  <main class="w-full">
    <div class="w-full flex flex-col gap-4 items-center">
      <h1 class="font-semibold">Status Transaksi</h1>
      <img src="/icons/success.svg" alt="success">
      <h1 class="font-semibold">Berhasil</h1>
    </div>
    <h2 class="w-full text-left font-semibold mt-6 mb-2">Detail Transaksi</h2>
    <div class="flex w-full justify-between">
      <p>Tanggal</p>
      <p>{$response.order_date.seconds}</p>
    </div>
    <div class="flex w-full justify-between">
      <p>Waktu</p>
      <p>2021</p>
    </div>
    <div class="flex w-full justify-between">
      <p>Total</p>
      <p>Rp.{$response.total}</p>
    </div>
    <div class="flex w-full justify-between">
      <p>Bayar</p>
      <p>Rp.{$response.money}</p>
    </div>
    <div class="flex w-full justify-between">
      <p>Kembali</p>
      <p>{$response.total - $response.money}</p>
    </div>
    <div class="flex w-full justify-between">
      <p>Metode</p>
      <p>{$response.method}</p>
    </div>
    <h2 class="w-full text-left font-semibold mt-6 mb-2">Rincian Pesanan</h2>
    {#each $response.orderList as item}
      <div class="flex w-full justify-between">
        <p>{item.name} (x{item.amount})</p>
        <p>Rp. {item.price * item.amount}</p>
      </div>
    {/each}
  </main>
  <footer class="w-full">
    <Button on:click={() => history.go(-1)}>Kembali</Button>
  </footer>
</div>