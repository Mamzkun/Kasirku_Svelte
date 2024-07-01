<script>
  import InputText from '../../../../lib/components/v2/input/input_text.svelte'
  import InputNumber from '../../../../lib/components/v2/input/input_number.svelte'
  import InputTime from '../../../../lib/components/v2/input/input_time.svelte'
  import Button from '../../../../lib/components/v2/button.svelte'
</script>

<div class="flex flex-col justify-center gap-6 px-6">
  <span class="mb-24" />
  <h1 class="font-semibold text-lg text-center">Tinggal 1 Langkah Lagi!</h1>
  <p class="text-center text-sm">Tampaknya kamu belum menambahkan menu di tokomu.</p>
  <div class="flex flex-col gap-2">
    <Button>Tambahkan Menu</Button>
    <Button styleType="outline">Lewati</Button>
  </div>
  
</div>
