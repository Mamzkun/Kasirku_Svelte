<script>
  import { onMount } from 'svelte'
  import { blockGuest } from '$lib/helpers/session';
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import NavBar from '$lib/components/v2/nav_bar.svelte'
  import { activeTab as writableActiveTab, title as writableTitle } from './store'

  onMount(() => blockGuest())

  let activeTab, title
  writableActiveTab.subscribe(value => {activeTab = value})
  writableTitle.subscribe(value => {title = value})

  let menuList = [
    {id: 'home', title: 'Home', icon: '/icons/ic_home.svg', iconActive: '/icons/ic_home_fill.svg'},
    {id: 'menu', title: 'Menu', icon: '/icons/ic_burger.svg', iconActive: '/icons/ic_burger_fill.svg'},
    {id: 'add', title: 'New Order', icon: '/icons/ic_plus.svg'},
    {id: 'report', title: 'Laporan', icon: '/icons/ic_chart.svg', iconActive: '/icons/ic_chart_fill.svg'},
    {id: 'setting', title: 'Setting', icon: '/icons/ic_setting.svg', iconActive: '/icons/ic_setting_fill.svg'},
  ]

  const changeMenu = (menu) => {
    writableActiveTab.set(menu.id)
    writableTitle.set(menu.title)
  }

</script>

<div class="flex flex-col justify-between items-center w-full h-full">
  <AppBar title={title} />
  <div class="self-stretch flex-grow overflow-y-auto">
    <slot />
  </div>
  <NavBar menuList={menuList} activeTab={activeTab} changeMenu={changeMenu} />
</div>