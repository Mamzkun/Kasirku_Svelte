import { json } from '@sveltejs/kit';
import { getUserId } from "$lib/helpers/session";
import { detailOrder } from '$lib/firebase/services/orderService';

export async function GET({ params, cookies }) {
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const order_id = params.order_id

  const result = await detailOrder(user_id, order_id)
  return json(result)
}