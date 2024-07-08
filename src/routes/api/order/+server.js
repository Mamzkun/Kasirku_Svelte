import { json } from '@sveltejs/kit';
import { getUserId } from "$lib/helpers/session"
import { getHoldedOrder, getOrderHistory } from '$lib/firebase/services/orderService.js';

export async function GET({ url, cookies }) {
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const mode = await url.searchParams.get('mode') || 1
  let result = {error: true, message: 'unknown mode'}

  if (mode == 0) {
    result = await getHoldedOrder(user_id)
  } else if (mode == 1) {
    const date = await url.searchParams.get('date')
    result = await getOrderHistory(user_id, date)
  }
  return json(result)
}

export async function POST({ request, cookies }) {
  console.log(2);
}

export async function PUT({ request, cookies }) {
  console.log(3);
}
