<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte'
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputPassword from '$lib/components/v2/input/input_password.svelte'
  import Button from '$lib/components/v2/button.svelte'
  import { blockUser } from '$lib/helpers/session';

  onMount(() => blockUser())

  let email = ''
  let password = ''
  let repassword = ''
  let isLoading = false

  const handleSubmit = async () => {
    isLoading = true
    if (password !== repassword) {
      alert('password tidak sama')
      return
    }

    const response = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {'content-type': 'application/json'}
		});

		const result = await response.json();
    if (result.error){
      alert(result.message)
    } else {
      goto('/v2/add-store')
    }
    isLoading = false
  }
</script>

<div class="flex flex-col gap-6 px-6">
  <span class="mb-16" />
  <div class="flex flex-col items-center gap-4">
    <img src="/icon192.webp" alt="" class="w-16 rounded-xl">
    <h1 class="font-semibold text-lg text-center">Create an Account!</h1>
  </div>
  <InputText label="Email" placeholder="masukkan email" bind:value={email} />
  <InputPassword label="Password" placeholder="masukkan password" bind:value={password} />
  <InputPassword label="Ulangi Password" placeholder="ulangi password" bind:value={repassword} />
  <Button on:click={handleSubmit} isLoading={isLoading} >Register</Button>
  
  <div class="flex items-center justify-center gap-4">
    <hr class="border flex-grow relative">
    <span class="text-center text-sm">or register with:</span>
    <hr class="border flex-grow relative">
  </div>
  <Button styleType="outline" >Google</Button>
  

  <p class="text-center text-sm">Have an account? <a href="/v2/login" class="text-blue-400">Login</a></p>
</div>
