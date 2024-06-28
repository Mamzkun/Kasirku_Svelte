<script>
  import Layout from "../dashboard_layout.svelte"
  import CardInfo from "../../../lib/components/card_info.svelte"

  const dataList = [
    { title: 'meja no.7', date: '2024', price: '60.000' },
    { title: 'meja no.7', date: '2024', price: '60.000' },
    { title: 'meja no.8', date: '2024', price: '60.000' },
]
</script>

<Layout activeTab="transaksi">
  <div class="flex flex-col gap-3 mt-4 z-0">
    {#each dataList as data}
    <CardInfo title={data.title} date={data.date} price={data.price} />
    {/each}
  </div>
</Layout>
