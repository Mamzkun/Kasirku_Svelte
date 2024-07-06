import { getAllProduct, deleteProduct } from "$lib/firebase/services/productService"
import { getUserId } from "$lib/helpers/session"
import { json } from "@sveltejs/kit"

export async function GET({ cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const result = await getAllProduct(user_id)
  return json(result)
}

export async function DELETE({ request, cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const { product_id } = await request.json()
  const result = await deleteProduct(user_id, product_id)
  return json(result)
}