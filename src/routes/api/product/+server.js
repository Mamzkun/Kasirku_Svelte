import { getAllProduct, deleteProduct, addProduct, updateProduct } from "$lib/firebase/services/productService"
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

export async function POST({ request, cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const { name, price, category, file } = await request.json()
  const result = await addProduct(user_id, {name, price, category}, file )
  return json(result)
}

export async function PUT({ request, cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const { id, name, price, category, file } = await request.json()
  const result = await updateProduct(user_id, id, {name, price, category}, file )
  return json(result)
}