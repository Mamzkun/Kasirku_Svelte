<script>
    import Button from "../../../lib/components/v1/button.svelte";
    import TextInput from "../../../lib/components/v1/text_input.svelte";

    let email = ""
    let password = ""

    const submit = () => {
      console.log(email, password);
    }
</script>

<div class="h-full flex items-center px-6">
  <div class="flex flex-col gap-8 w-full">
    <h1 class="text-3xl text-center">Login</h1>
    <TextInput label="email" placeholder="masukkan email" bind:value={email} />
    <TextInput label="password" placeholder="masukkan password" bind:value={password} />
    <Button on:click={submit}>Login</Button>
    <p class="text-center">Belum punya akun? <a href="/v1/register" class="text-blue-500">Register</a></p>
  </div>
</div>
