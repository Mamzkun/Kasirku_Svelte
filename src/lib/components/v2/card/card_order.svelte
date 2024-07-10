<script>
  import { goto } from '$app/navigation'
  import { timestampToDateString } from '$lib/helpers/dateFormatter'
  import { listOfOrder, table, money, orderId, response as writeableResponse } from '../../../../routes/v2/(no_navbar)/create-order/store'
  
  export let id
  export let title = 'Meja no.0'
  export let time = 1720578875
  export let price = 0

  const handleClick = async () => {
    const response = await fetch(`/api/order/${id}`, {
      method: 'GET'
    })

    const result = await response.json()
    if (!result.error) {
      orderId.set(id)
      table.set(result.data.label)
      money.set(result.data.money),
      listOfOrder.set(result.data.orderList)
      writeableResponse.set(result.data)

      if (result.data.finish_date) {
        goto('/v2/resume')
      } else {
        goto('/v2/create-order')
      }
    }

    
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex justify-between items-center px-5 py-3 mb-2 rounded-lg bg-white border border-gray-400" on:click={handleClick}>
  <div class="flex justify-between items-center flex-grow">
    <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
      <p class="flex-grow-0 flex-shrink-0 text-base text-left text-black">{title}</p>
      <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-black">{timestampToDateString(time * 1000)}</p>
    </div>
    <p class="flex-grow-0 flex-shrink-0 text-base text-right text-black">{price}</p>
  </div>
</div>