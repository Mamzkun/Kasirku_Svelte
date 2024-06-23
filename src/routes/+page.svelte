<script>
    import Button from "../lib/components/button.svelte";
    import CardInfo from "../lib/components/card_info.svelte";
    import TextInput from "../lib/components/text_input.svelte";
    import CategoryList from "../lib/components/category_list.svelte";

</script>

<div class="max-w-sm mx-auto p-6 border h-screen flex flex-col gap-4">
  <TextInput placeholder="cari nama barang" />
  <Button>aaa</Button>
  <CardInfo title="meja no.7" date="2024-09-24 07:40" price="60.000"/>
  <CategoryList name="milk" />
</div>