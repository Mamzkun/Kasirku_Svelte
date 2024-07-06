<script>
  import { goto } from '$app/navigation'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputTime from '$lib/components/v2/input/input_time.svelte'
  import Button from '$lib/components/v2/button.svelte'

  export let data
  let {name, address, email, phone, open_time, close_time, instagram} = data.userInfo

  const logout = async () => {
    const response = await fetch('/api/auth/logout', {
			method: 'DELETE',
		});

		const result = await response.json();
    if (result.error){
      alert(result.message)
    } else {
      goto('/v2/login')
    }
  }
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
    <InputText label="Nama Toko" disabled={true} bind:value={name} />
    <InputText label="Alamat Toko" disabled={true} bind:value={address} />
    <InputText label="Email" disabled={true} bind:value={email} />
    <InputNumber label="Nomor Telepon" disabled={true} bind:value={phone} />
    <div class="flex gap-4">
      <InputTime label="Jam Operasional" disabled={true} bind:value={open_time} />
      <InputTime label="Sampai Jam" disabled={true} bind:value={close_time} />
    </div>
    <InputText label="Media Sosial (instagram)" disabled={true} bind:value={instagram} />
    <Button styleType="danger" on:click={logout} >Log Out</Button>
  </div>
</div>