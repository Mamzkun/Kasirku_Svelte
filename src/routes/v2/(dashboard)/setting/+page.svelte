<script>
  import { goto } from '$app/navigation'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputNumber from '$lib/components/v2/input/input_number.svelte'
  import InputTime from '$lib/components/v2/input/input_time.svelte'
  import Button from '$lib/components/v2/button.svelte'
  import { userInfo } from './store'
  import { onMount } from 'svelte';

  let name, address, email, phone, open_time, close_time, instagram
  let disabled = true
  let isLoading = false
  let language = 'indonesia'
  let theme = 'light'

  onMount(() => fetchProfile())

  const fetchProfile = async () => {
    const res = await fetch('/api/user', {
      method: 'GET'
    })
    const result = await res.json()
    if (result.error) {
      alert(result.message)
    } else {
      userInfo.set(result.data)
      refreshProfile($userInfo)
    }
  }

  const refreshProfile = (profile) => {
    name = profile.name
    address = profile.address
    email = profile.email
    phone = profile.phone
    open_time = profile.open_time
    close_time = profile.close_time
    instagram = profile.instagram
  }

  const logout = async () => {
    if (!confirm('apakah kamu yakin ingin keluar?')) {
      return
    }
    
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

  const saveProfile = async () => {
    isLoading = true
    const response = await fetch('/api/user', {
			method: 'PUT',
      body: JSON.stringify({ name, address, phone, open_time, close_time, instagram }),
			headers: {'content-type': 'application/json'}
		});

		const result = await response.json();
    if (result.error){
      alert(result.message)
    }
    isLoading = false
    disabled = true
  }

  const cancelSave = () => {
    disabled = !disabled
    refreshProfile($userInfo)
  }

</script>

<div class="px-6 pb-6">
  {#if disabled}
    <h2 class="mb-4 pt-4">Pengaturan Aplikasi:</h2>
    <div class="flex gap-4">
      <InputSelect 
        label="Bahasa" 
        bind:value={language}
        options={[
          {id: 'indonesia', text: 'Indonesia'},
          {id: 'english', text: 'English'}
        ]}
      />
      <InputSelect 
        label="Tema" 
        bind:value={theme}
        options={[
          {id: 'light', text: 'Terang'},
          {id: 'night', text: 'Gelap'}
        ]}
      />
    </div>
    <hr class="w-100 mt-4">
  {/if}
  <h2 class="mb-4 mt-4">Pengaturan Toko:</h2>
  <div class="flex flex-col gap-4">
    <InputText label="Nama Toko" disabled={disabled} bind:value={name} />
    <InputText label="Alamat Toko" disabled={disabled} bind:value={address} />
    <InputText label="Email" disabled={true} bind:value={email} />
    <InputNumber label="Nomor Telepon" disabled={disabled} bind:value={phone} />
    <div class="flex gap-4">
      <InputTime label="Jam Operasional" disabled={disabled} bind:value={open_time} />
      <InputTime label="Sampai Jam" disabled={disabled} bind:value={close_time} />
    </div>
    <InputText label="Media Sosial (instagram)" placeholder="@instagram" disabled={disabled} bind:value={instagram} />
    {#if disabled}
      <Button on:click={() => disabled = !disabled}>Edit Profile</Button>
      <Button styleType="danger" on:click={logout} >Log Out</Button>
      {:else}
      <div class="flex gap-4">
        <Button on:click={() => disabled = !disabled} on:click={saveProfile} isLoading={isLoading} >Simpan Perubahan</Button>
        <Button styleType="danger" on:click={() => cancelSave()}>Batal</Button>
      </div>
    {/if}
  </div>
</div>