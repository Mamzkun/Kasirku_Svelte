<script>
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputPassword from '$lib/components/v2/input/input_password.svelte'
  import Button from '$lib/components/v2/button.svelte'

  let email = ''
  let password = ''
  let repassword = ''

  const handleSubmit = async () => {
    if (password !== repassword) {
      alert('password tidak sama')
    }

    const response = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {'content-type': 'application/json'}
		});

		const result = await response.json();
    if (result.error){
      alert(result.message)
    }
  }
</script>

<div class="flex flex-col gap-6 px-6">
  <span class="mb-24" />
  <h1 class="font-semibold text-lg text-center">Create an Account!</h1>
  <InputText label="Email" placeholder="masukkan email" bind:value={email} />
  <InputPassword label="Password" placeholder="masukkan password" bind:value={password} />
  <InputPassword label="Ulangi Password" placeholder="ulangi password" bind:value={repassword} />
  <Button on:click={handleSubmit}>Register</Button>
  
  <div class="flex items-center justify-center gap-4">
    <hr class="border flex-grow relative">
    <span class="text-center text-sm">or register with:</span>
    <hr class="border flex-grow relative">
  </div>
  <Button styleType="outline">Google</Button>
  

  <p class="text-center text-sm">Have an account? <a href="/v2/login" class="text-blue-400">Login</a></p>
</div>
