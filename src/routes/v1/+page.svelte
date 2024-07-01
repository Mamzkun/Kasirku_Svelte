<script>
    import Button from "../../lib/components/v1/button.svelte";
    import CardInfo from "../../lib/components/v1/card_info.svelte";
    import CardMenu from "../../lib/components/v1/card_menu.svelte";
    import TextInput from "../../lib/components/v1/text_input.svelte";
    import CategoryList from "../../lib/components/v1/category_list.svelte";

</script>

<div class="max-w-sm mx-auto p-6 border h-screen flex flex-col gap-4">
  <!-- <TextInput placeholder="cari nama barang" />
  <Button>aaa</Button>
  <CardInfo title="meja no.7" date="2024-09-24 07:40" price="60.000"/>
  <CategoryList name="milk" />
  <CardMenu /> -->
  <h1 class="font-semibold text-center">Aplikasi masih dalam proses development</h1>
  <p>preview halaman :</p>
  <ol>
    <li><a class="underline text-blue-500" href="/auth/login"> - Login</a></li>
    <li><a class="underline text-blue-500" href="/auth/login"> - Register</a></li>
    <li><a class="underline text-blue-500" href="/d/transaksi"> - Transaksi</a></li>
    <li><a class="underline text-blue-500" href="/d/tambah"> - Tambah Transaksi</a></li>
    <li><a class="underline text-blue-500" href="/d/setting"> - setting</a></li>
  </ol>
</div>