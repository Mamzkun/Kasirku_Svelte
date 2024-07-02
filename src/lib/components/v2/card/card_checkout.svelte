<script>
  export let title = 'Soto Jadul Lamongan'
  export let price = '20.000'
</script>

<div class="flex flex-col gap-2 mb-2">
  <div class="flex justify-between px-6">
    <div class="flex gap-4 w-full">
      <div class="flex flex-col justify-between h-full w-full">
        <p class="text-base font-medium text-left text-black" > {title} </p>
        <div class="flex justify-between items-end mt-2">
          <div class="flex gap-2 items-center"><slot /></div>
          <p class="text-sm font-semibold text-left text-black"> {price} </p>
        </div>
      </div>
    </div>
  </div>
  <hr class="w-full">
</div>