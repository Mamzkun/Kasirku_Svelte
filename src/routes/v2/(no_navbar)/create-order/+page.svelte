<script>
  import { goto } from '$app/navigation'
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import Button from '$lib/components/v2/button.svelte'
  import ButtonIcon from '$lib/components/v2/button_icon.svelte'
  import CardCheckout from '$lib/components/v2/card/card_checkout.svelte'
</script>

<div class="flex flex-col justify-between w-full h-full">
  <div>
    <div class="sticky top-0 z-10">
      <AppBar title="Buat Pesanan Baru" showBack="true" />
      <div class="flex gap-2 bg-white pt-4 pb-6 px-6">
        <InputNumber />
        <Button on:click={()=>  goto('/v2/choose-menu')}>Tambah Item</Button>
      </div>
    </div>
    <CardCheckout>
      <ButtonIcon icon="/icons/ic_minus.svg" />
      <p class="px-2">0</p>
      <ButtonIcon icon="/icons/ic_plus.svg" />
    </CardCheckout>
    <CardCheckout>
      <ButtonIcon icon="/icons/ic_minus.svg" />
      <p class="px-2">0</p>
      <ButtonIcon icon="/icons/ic_plus.svg" />
    </CardCheckout>

  </div>
  
  <div class="sticky bottom-0 z-10 px-6 border-t-2 pt-4 rounded-3xl bg-white">
    <div class="flex justify-between text-sm">
      <p>Total:</p>
      <p class="font-semibold">Rp. 30.000</p>
    </div>
    <div class="py-4 flex flex-col gap-2">
      <div class="flex gap-2">
        <InputSelect label="Metode Pembayaran" />
        <InputNumber label="Jumlah Uang" />
      </div>
      <div class="flex justify-between text-sm">
        <p>Kembalian:</p>
        <p class="font-semibold">Rp. 4.000</p>
      </div>
      <div class="flex gap-4 mt-2">
        <Button styleType="outline">Simpan</Button>
        <Button>Proses</Button>
      </div>
    </div>
  </div>
</div>