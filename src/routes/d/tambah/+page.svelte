<script>
  import TextInput from "../../../lib/components/text_input.svelte"
  import Button from "../../../lib/components/button.svelte"
  import CategoryList from "../../../lib/components/category_list.svelte";

  const categoryList = [
    {name: "makanan", icon: "✅"}, 
    {name: "minuman", icon: "✅"}, 
    {name: "camilan", icon: "✅"}, 
    {name: "milk", icon: "✅"}
  ]
  let categoryActive = categoryList[0].name
</script>

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
</div>


<div class="fixed bottom-24 end-6 w-40">
  <Button>🍔 Checkout</Button>
</div>