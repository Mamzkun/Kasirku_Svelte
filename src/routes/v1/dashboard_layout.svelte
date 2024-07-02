<script>
  import { goto } from '$app/navigation';
  import AppBar from '../../lib/components/v1/app_bar.svelte';

  export let activeTab = 'transaksi';
  let titlePage

  const tabs = [
    { title: 'Daftar Transaksi', icon: '🛒', label: 'transaksi' },
    { title: 'Laporan Penjualan', icon: '📊', label: 'laporan' },
    { title: 'Transaksi Baru', icon: '➕', label: 'tambah' },
    { title: 'Manajemen Produk', icon: '📦', label: 'produk' },
    { title: 'Pengaturan Akun', icon: '⚙️', label: 'setting' }
  ];

  $: tabs.map(tab => {
      tab.label == activeTab ? titlePage = tab.title : ""
    })

</script>

<div class="h-full flex flex-col justify-between">

  <AppBar titlePage={titlePage} />

  <div class="px-6 pb-6 max-h-custom overflow-y-auto">
    <slot/>
  </div>
  
  <nav class="sticky bottom-0 w-full bg-white border-t border-gray-200">
    <div class="flex justify-around">
      {#each tabs as tab}
        <button
          class="flex flex-col items-center p-2 focus:outline-none"
          class:active={activeTab === tab.label}
          on:click={() => {
            goto(`/v1/${tab.label}`)
            }}
        >
          <div class="text-2xl">{@html tab.icon}</div>
          <span class:text-blue-500={activeTab === tab.label} class="text-grey-500">{tab.label}</span>
        </button>
      {/each}
    </div>
  </nav>
</div>

<style>
  .max-h-custom {
    height: calc(100vh - 9rem);
  }
</style>