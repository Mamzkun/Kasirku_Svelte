<script>
  import Layout from "../dashboard_layout.svelte"
  import TextInput from "../../../lib/components/v1/text_input.svelte"
  import Button from "../../../lib/components/v1/button.svelte"
  import CategoryList from "../../../lib/components/v1/category_list.svelte";
  import CardMenu from "../../../lib/components/v1/card_menu.svelte";

  const categoryList = [
    {name: "makanan", icon: "✅"}, 
    {name: "minuman", icon: "✅"}, 
    {name: "camilan", icon: "✅"}, 
    {name: "milk", icon: "✅"}
  ]
  const menuList = [
    {name: "soto babat"},
    {name: "mie ayam"},
    {name: "bakso urat"},
    {name: "nasi goreng"}
  ]

  let categoryActive = categoryList[0].name
</script>

<Layout activeTab="tambah">
    <div class="flex flex-col gap-6 mt-4">
      <TextInput placeholder="cari produk..." />
      
      <div class="flex gap-4 justify-center overflow-y-auto px-2">
        {#each categoryList as category}
          <CategoryList 
            name={category.name} 
            icon={category.icon}
            isActive={categoryActive===category.name}
            on:click={()=>{
              categoryActive = category.name          
            }}
          /> 
        {/each}
      </div>
    
      <div class="flex flex-col gap-4 max-h-custom overflow-y-auto pb-1 pe-1">
        {#each menuList as menu}
          <CardMenu name={menu.name} />
        {/each}
      </div>
    </div>
    
    <div class="fixed bottom-24 end-6 w-40">
      <Button>🍔 Checkout</Button>
    </div>
</Layout>

<style>
  .max-h-custom {
    max-height: calc(100vh - 23rem);
  }
</style>