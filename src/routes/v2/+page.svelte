<script>
    import AppBar from "$lib/components/v2/app_bar.svelte";
    import Button from "$lib/components/v2/button.svelte";
    import CardMenu from "$lib/components/v2/card/card_menu.svelte";
    import CardOrder from "$lib/components/v2/card/card_order.svelte";
    import InputDate from "$lib/components/v2/input/input_date.svelte";
    import InputFile from "$lib/components/v2/input/input_file.svelte";
    import InputNumber from "$lib/components/v2/input/input_number.svelte";
    import InputPassword from "$lib/components/v2/input/input_password.svelte";
    import InputSearch from "$lib/components/v2/input/input_search.svelte";
    import InputSelect from "$lib/components/v2/input/input_select.svelte";
    import InputText from "$lib/components/v2/input/input_text.svelte";
    import InputTime from "$lib/components/v2/input/input_time.svelte";
    import NavBar from "$lib/components/v2/nav_bar.svelte";

</script>

<AppBar />

<div class="flex flex-col gap-4 mx-6 mb-6">
    <Button>button</Button>
    <InputText />
    <InputPassword />
    <InputNumber />
    <InputSearch />
    <InputTime />
    <InputDate />
    <InputSelect />
    <InputFile />
    <CardOrder />
</div>

<CardMenu />
<CardMenu />

<NavBar />