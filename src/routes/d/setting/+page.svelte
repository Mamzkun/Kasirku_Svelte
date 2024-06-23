<script>
  import TextInput from "../../../lib/components/text_input.svelte"
  import Button from "../../../lib/components/button.svelte"

</script>

<div class="flex flex-col gap-6 mt-4">
  <TextInput label="nama toko" placeholder="nama toko" />
  <TextInput label="email" placeholder="email" />
  <TextInput label="password" placeholder="password" />

  <hr class="mt-6">
  <Button isRed={true}>Logout</Button>
</div>