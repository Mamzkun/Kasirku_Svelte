<script>
  import { goto } from '$app/navigation'
  import { listOfOrder, table, money } from '../../../routes/v2/(no_navbar)/create-order/store'

  export let activeTab, menuList, changeMenu

  const addOrder = () => {
    listOfOrder.set([])
    table.set(undefined)
    money.set(undefined)
    goto('/v2/create-order')
  }
</script>

<div class="flex justify-between items-end border-t py-2 px-6 h-[70px] self-stretch flex-grow-0 flex-shrink-0 sticky bottom-0 z-10 bg-white">
  {#each menuList as menu}
    {#if menu.id !== 'add'}
      <button 
        class="flex flex-col items-center w-10"
        on:click={()=> {
          changeMenu(menu)
          goto(`/v2/${menu.id}`)
        }}
      >
      {#if activeTab === menu.id}
        <img src={menu.iconActive} alt="" class="w-8 h-8">
        <p class="text-xs text-blue-400">{menu.title}</p>
      {:else}
        <img src={menu.icon} alt="" class="w-8 h-8">
        <p class="text-xs text-black">{menu.title}</p>
      {/if}
      </button>
    {:else}
      <button class="flex flex-col items-center" on:click={addOrder}>
        <div class="bg-blue-400 rounded-full p-2">
          <img src={menu.icon} alt="" class="w-12 h-12">
        </div>
        <p class="text-xs text-black w-20">{menu.title}</p>
      </button>
    {/if}
  {/each}
</div>