<script>
  import { goto } from '$app/navigation'

  let activeTab = 'home'
  let menuList = [
    {id: 'home', title: 'Home', icon: '/icons/ic_home.svg', iconActive: '/icons/ic_home_fill.svg'},
    {id: 'menu', title: 'Menu', icon: '/icons/ic_burger.svg', iconActive: '/icons/ic_burger_fill.svg'},
    {id: 'add', title: 'New Order', icon: '/icons/ic_plus.svg'},
    {id: 'report', title: 'Laporan', icon: '/icons/ic_chart.svg', iconActive: '/icons/ic_chart_fill.svg'},
    {id: 'setting', title: 'Setting', icon: '/icons/ic_setting.svg', iconActive: '/icons/ic_setting_fill.svg'},
  ]
</script>

<div class="flex justify-between items-end border-t py-2 px-6 h-[70px] self-stretch flex-grow-0 flex-shrink-0 sticky bottom-0 z-10 bg-white">
  {#each menuList as menu}
    {#if menu.id !== 'add'}
      <button 
        class="flex flex-col items-center w-10"
        on:click={()=> {
          activeTab = menu.id
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
      <button class="flex flex-col items-center">
        <div class="bg-blue-400 rounded-full p-2">
          <img src={menu.icon} alt="" class="w-12 h-12">
        </div>
        <p class="text-xs text-black w-20">{menu.title}</p>
      </button>
    {/if}
  {/each}
</div>