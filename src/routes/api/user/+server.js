import { getUserId } from '$lib/helpers/session'
import { updateProfile } from '$lib/firebase/services/userService'
import { json } from '@sveltejs/kit'

export async function GET(){}

export async function PUT({ request, cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const { name, address, phone, open_time, close_time, instagram } = await request.json()
  const result = await updateProfile(user_id, { name, address, phone, open_time, close_time, instagram })

  return json(result)
}