<script>
  import InputSelect from '$lib/components/v2/input/input_select.svelte'
  import InputSearch from '$lib/components/v2/input/input_search.svelte'
  import CardMenu from '$lib/components/v2/card/card_menu.svelte'
  import ButtonIcon from '$lib/components/v2/button_icon.svelte'
</script>

<div class="sticky top-0 flex gap-2 bg-white pt-4 pb-6 px-6 z-10">
  <InputSelect />
  <InputSearch />
</div>

<CardMenu>
  <ButtonIcon icon="/icons/ic_pencil.svg" />
  <ButtonIcon icon="/icons/ic_bin.svg" />
</CardMenu>
<CardMenu>
  <ButtonIcon icon="/icons/ic_pencil.svg" />
  <ButtonIcon icon="/icons/ic_bin.svg" />
</CardMenu>