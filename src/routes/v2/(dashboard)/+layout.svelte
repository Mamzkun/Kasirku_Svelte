<script>
  import { onMount } from 'svelte'
  import { blockGuest } from '$lib/helpers/session';
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import NavBar from '$lib/components/v2/nav_bar.svelte'

  onMount(() => blockGuest())
</script>

<div class="flex flex-col justify-between items-center w-full h-full">
  <AppBar title="Angkringan Jepang Aqori" />
  <div class="self-stretch flex-grow overflow-y-auto">
    <slot />
  </div>
  <NavBar />
</div>