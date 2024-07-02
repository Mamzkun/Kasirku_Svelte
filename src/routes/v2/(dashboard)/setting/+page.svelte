<script>
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputTime from '$lib/components/v2/input/input_time.svelte'
  import Button from '$lib/components/v2/button.svelte'
</script>

<div class="px-6 pb-6">
  <h2 class="mb-4 pt-4">Pengaturan Aplikasi:</h2>
  <div class="flex gap-4">
    <InputSelect label="Bahasa"/>
    <InputSelect label="Tema"/>
  </div>
  <hr class="w-100 my-4">
  <h2 class="mb-4">Pengaturan Toko:</h2>
  <div class="flex flex-col gap-4">
    <InputText label="Nama Toko" />
    <InputText label="Alamat Toko" />
    <InputText label="Email" />
    <InputNumber label="Nomor Telepon" />
    <div class="flex gap-4">
      <InputTime label="Jam Operasional" />
      <InputTime label="Sampai Jam" />
    </div>
    <InputText label="Media Sosial (instagram)" />
    <Button styleType="danger">Log Out</Button>
  </div>
</div>