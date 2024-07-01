<script>
  import Layout from "../dashboard_layout.svelte"
  import TextInput from "../../../lib/components/v1/text_input.svelte"
  import Button from "../../../lib/components/v1/button.svelte"

</script>

<Layout activeTab="setting">
  <div class="flex flex-col gap-6 mt-4">
    <TextInput label="nama toko" placeholder="nama toko" />
    <TextInput label="email" placeholder="email" />
    <TextInput label="password" placeholder="password" />
  
    <hr class="mt-6">
    <Button isRed={true}>Logout</Button>
  </div>
</Layout>