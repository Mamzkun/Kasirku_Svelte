import { json } from '@sveltejs/kit';
import { getUserId } from "$lib/helpers/session";
import { detailOrder, updateOrder } from '$lib/firebase/services/orderService';
import { Timestamp } from 'firebase/firestore';

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

export async function PUT({ url, params, request, cookies }) {
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const order_id = params.order_id
  const finish = await url.searchParams.get('finish')
  const { label, total, money, method, orderList} = await request.json()
  const orderDate = Timestamp.fromDate(new Date())
  const finishDate = finish ? Timestamp.fromDate(new Date()) : null
  console.log(finishDate);
  const result = await updateOrder(user_id, order_id, { label, total, money, method, orderDate, finishDate, orderList})
  return json(result)
}