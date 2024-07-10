<script>
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import { blockGuest } from '$lib/helpers/session';
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import NavBar from '$lib/components/v2/nav_bar.svelte'
  import { activeTab, title } from './store'

  let menuList = [
    {id: 'home', title: 'Home', icon: '/icons/ic_home.svg', iconActive: '/icons/ic_home_fill.svg'},
    {id: 'menu', title: 'Menu', icon: '/icons/ic_burger.svg', iconActive: '/icons/ic_burger_fill.svg'},
    {id: 'add', title: 'New Order', icon: '/icons/ic_plus.svg'},
    {id: 'report', title: 'Laporan', icon: '/icons/ic_chart.svg', iconActive: '/icons/ic_chart_fill.svg'},
    {id: 'setting', title: 'Setting', icon: '/icons/ic_setting.svg', iconActive: '/icons/ic_setting_fill.svg'},
  ]

  onMount(() => {
    blockGuest()

    // set activeTab and title after ssr loading
    const currentTab = location.href.split('/')[4]
    activeTab.set(currentTab)
    const tabIndex = menuList.findIndex(i => i.id === currentTab)
    title.set(menuList[tabIndex].title)
  })

  const changeMenu = (menu) => {
    activeTab.set(menu.id)
    title.set(menu.title)
  }

</script>

<div class="flex flex-col justify-between items-center w-full h-full">
  <AppBar title={$title}>
    {#if $activeTab === 'home'}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img 
        src={'/icons/ic_history.svg'} 
        alt="history"
        on:click={()=> goto('/v2/history')}
      >
    {/if}
  </AppBar>
  <div class="self-stretch flex-grow overflow-y-auto">
    <slot />
  </div>
  <NavBar menuList={menuList} activeTab={$activeTab} changeMenu={changeMenu} />
</div>