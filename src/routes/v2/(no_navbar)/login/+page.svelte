<script>
  import { onMount } from 'svelte'
  import { goto } from "$app/navigation";
  import { blockUser } from '$lib/helpers/session';
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputPassword from '$lib/components/v2/input/input_password.svelte'
  import Button from '$lib/components/v2/button.svelte'
  
  onMount(() => blockUser())

  let email = ''
  let password = ''
  let remember = false
  let isLoading = false

  const handleSubmit = async () => {
    isLoading = true
    const response = await fetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ email, password, remember }),
			headers: {'content-type': 'application/json'}
		});

		const result = await response.json();
    if (result.error){
      alert(result.message)
      console.log(result);
    } else {
      goto('/v2/home')
    }
    isLoading = false
  }
</script>

<div class="flex flex-col gap-6 px-6">
  <span class="mb-24" />
  <h1 class="font-semibold text-lg text-center">Hi, Welcome Back!</h1>
  <InputText label="Email" placeholder="Masukkan Email" bind:value={email} />
  <InputPassword label="Password" placeholder="Masukkan Password" bind:value={password} />
  <div class="flex justify-between">
    <div>
      <input type="checkbox" id="rememberme" bind:checked={remember}>
      <label for="rememberme" class="text-sm">Remember Me</label>
    </div>
    <p class="text-red-400 text-sm font-medium">lupa password?</p>
  </div>
  <Button on:click={handleSubmit} isLoading={isLoading} >Login</Button>
  
  <div class="flex items-center justify-center gap-4">
    <hr class="border flex-grow relative">
    <span class="text-center text-sm">or login with:</span>
    <hr class="border flex-grow relative">
  </div>
  <Button styleType="outline">Google</Button>
  

  <p class="text-center text-sm">Don't have an account? <a href="/v2/register" class="text-blue-400">Sign Up</a></p>
</div>
