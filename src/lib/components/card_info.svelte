<script>
  export let title, date, price
</script>

  <div
    class="flex justify-between relative rounded-lg bg-white border border-black p-3"
    style="box-shadow: 3px 2px 0px 0 rgba(0,0,0,0.5);"
  >
  <div class="">
    <p class="text-base text-left text-black">{title}</p>
    <p class="text-xs text-left text-black">{date}</p>
  </div>
  <div class="">
    <p class="text-base text-right text-black">{price}</p>
  </div>
</div>
