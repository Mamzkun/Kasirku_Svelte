<script>
  import InputText from '$lib/components/v2/input/input_text.svelte'
  import InputPassword from '$lib/components/v2/input/input_password.svelte'
  import Button from '$lib/components/v2/button.svelte'
</script>

<div class="flex flex-col gap-6 px-6">
  <span class="mb-24" />
  <h1 class="font-semibold text-lg text-center">Create an Account!</h1>
  <InputText label="Email" />
  <InputPassword label="Password" />
  <InputPassword label="Ulangi Password" />
  <Button>Register</Button>
  
  <div class="flex items-center justify-center gap-4">
    <hr class="border flex-grow relative">
    <span class="text-center text-sm">or register with:</span>
    <hr class="border flex-grow relative">
  </div>
  <Button styleType="outline">Google</Button>
  

  <p class="text-center text-sm">Have an account? <a href="/v2/login" class="text-blue-400">Login</a></p>
</div>
