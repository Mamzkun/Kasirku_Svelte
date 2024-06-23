<script>
  import { goto } from '$app/navigation';

  let activeTab = 'transaksi';
  let titlePage = 'Daftar Transaksi';

  const tabs = [
    { title: 'Daftar Transaksi', icon: '🛒', label: 'transaksi' },
    { title: 'Laporan Penjualan', icon: '📊', label: 'laporan' },
    { title: 'Transaksi Baru', icon: '➕', label: 'tambah' },
    { title: 'Manajemen Produk', icon: '📦', label: 'produk' },
    { title: 'Pengaturan Akun', icon: '⚙️', label: 'setting' }
  ];
</script>

<div class="h-full flex flex-col justify-between">

  <nav class="sticky top-0 bg-white z-10 h-16 px-6 py-4 border">
    <h1 class="text-xl">{titlePage}</h1>
  </nav>

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
            activeTab = tab.label
            titlePage = tab.title
            goto(`/d/${tab.label}`)
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