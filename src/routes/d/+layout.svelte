<script>
  let activeTab = 'transaksi';

  const tabs = [
    { name: 'transaksi', icon: '🛒', label: 'transaksi' },
    { name: 'laporan', icon: '📊', label: 'laporan' },
    { name: 'tambah', icon: '➕', label: 'tambah' },
    { name: 'produk', icon: '📦', label: 'produk' },
    { name: 'setting', icon: '⚙️', label: 'Setting' }
  ];
</script>

<nav class="sticky top-0 bg-white z-10 h-16 px-6 py-4 border">
  <h1 class="text-xl">{activeTab}</h1>
</nav>

<div class="px-6 pb-20">
  <slot></slot>
</div>

<nav class="fixed bottom-0 w-full bg-white border-t border-gray-200">
  <div class="flex justify-around">
    {#each tabs as tab}
      <button
        class="flex flex-col items-center p-2 focus:outline-none"
        class:active={activeTab === tab.name}
        on:click={() => {
          activeTab = tab.name
          }}
      >
        <div class="text-2xl">{@html tab.icon}</div>
        <span class:text-blue-500={activeTab === tab.name} class="text-grey-500">{tab.label}</span>
      </button>
    {/each}
  </div>
</nav>