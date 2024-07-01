<script>
  import CardOrder from '../../../../lib/components/v2/card/card_order.svelte'
</script>

<div class="sticky top-0 bg-white pb-2 z-10 px-6 pt-4">
  <h2 class="mb-4">Transaksi Hari ini:</h2>
  <div class="flex justify-between gap-4 text-white">
    <div class="border rounded-lg px-4 py-3 flex-grow bg-blue-400">
      <p class="text-xs">total transaksi:</p>
      <p class="font-semibold">8</p>
    </div>
    <div class="border rounded-lg px-4 py-3 flex-grow bg-blue-400">
      <p class="text-xs">total perolehan:</p>
      <p class="font-semibold">Rp. 200.000</p>
    </div>
  </div>
  <h2 class="my-4">Transaksi Sedang Berlangsung:</h2>
</div>

<div class="px-6">
  <CardOrder />
  <CardOrder />
</div>
