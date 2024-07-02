<script>
  import AppBar from '$lib/components/v2/app_bar.svelte'
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputSearch from '$lib/components/v2/input/input_search.svelte'
  import CardMenu from '$lib/components/v2/card/card_menu.svelte'
    import ButtonIcon from '$lib/components/v2/button_icon.svelte';
</script>

<div>
  <div class="sticky top-0 z-10">
    <AppBar title="Daftar Menu" showBack="true" />
    <div class="flex gap-2 bg-white pt-4 pb-6 px-6">
      <InputSelect />
      <InputSearch />
    </div>
  </div>
  <CardMenu>
    <ButtonIcon icon="/icons/ic_minus.svg" />
      <p class="px-2">0</p>
      <ButtonIcon icon="/icons/ic_plus.svg" />
  </CardMenu>
</div>