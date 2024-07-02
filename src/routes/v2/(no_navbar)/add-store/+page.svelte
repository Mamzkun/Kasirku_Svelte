<script>
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputTime from '$lib/components/v2/input/input_time.svelte'
  import Button from '$lib/components/v2/button.svelte'
</script>

<div class="flex flex-col gap-6 px-6">
  <span class="mb-24" />
  <h1 class="font-semibold text-lg text-center">Lengkapi Data!</h1>
  <InputText label="Nama Toko" />
  <InputText label="Alamat Toko" />
  <InputNumber label="Nomor Telepon" />
  <div class="flex gap-4">
    <InputTime label="Jam Operasional" />
    <InputTime label="Sampai Jam" />
  </div>
  <InputText label="Media Sosial (instagram)" />
  <Button>Lanjutkan Pendaftaran</Button>
  
</div>
