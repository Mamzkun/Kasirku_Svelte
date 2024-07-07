<script>
  import { goto } from '$app/navigation'
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputTime from '$lib/components/v2/input/input_time.svelte'
  import Button from '$lib/components/v2/button.svelte'

  let name = ''
  let address = ''
  let phone = ''
  let open_time = ''
  let close_time = ''
  let instagram = ''
  let isLoading = false

  const handleSubmit = async () => {
    isLoading = true
    const response = await fetch('/api/user', {
			method: 'PUT',
      body: JSON.stringify({ name, address, phone, open_time, close_time, instagram }),
			headers: {'content-type': 'application/json'}
		});

		const result = await response.json();
    if (result.error){
      alert(result.message)
    } else {
      goto('/v2/home')
    }
    isLoading = false
  }

</script>

<div class="flex flex-col gap-6 px-6">
  <span class="mb-24" />
  <h1 class="font-semibold text-lg text-center">Lengkapi Data!</h1>
  <InputText label="Nama Toko" placeholder="nama toko" bind:value={name} />
  <InputText label="Alamat Toko" placeholder="alamat lengkap toko" bind:value={address} />
  <InputNumber label="Nomor Telepon" placeholder="nomor telepon / whatsApp aktif" bind:value={phone} />
  <div class="flex gap-4">
    <InputTime label="Jam Operasional" bind:value={open_time} />
    <InputTime label="Sampai Jam" bind:value={close_time} />
  </div>
  <InputText label="Media Sosial (instagram)" placeholder="@username_ig" bind:value={instagram} />
  <Button on:click={handleSubmit} isLoading={isLoading} >Lanjutkan Pendaftaran</Button>
  
</div>
