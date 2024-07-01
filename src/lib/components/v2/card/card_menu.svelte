<script>
  export let title = 'Soto Jadul Lamongan'
  export let price = '20.000'
  export let image = 'https://akcdn.detik.net.id/visual/2024/05/20/soto-ayam_43.jpeg?w=250&q=90'
</script>

<div class="flex flex-col gap-6 mb-6">
  <div class="flex justify-between px-6">
    <div class="flex gap-4 w-full">
      <img src={image} alt="food" class="object-cover h-20 w-20 rounded-lg">
      <div class="flex flex-col justify-between h-full w-full">
        <p class="text-base font-medium text-left text-black" > {title} </p>
        <div class="flex justify-between items-end">
          <p class="text-xs text-left text-black"> {price} </p>
          <div><slot /></div>
        </div>
      </div>
    </div>
  </div>
  <hr class="w-full">
</div>