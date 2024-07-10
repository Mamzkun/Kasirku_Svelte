import { getUserId } from '$lib/helpers/session'
import { updateProfile, getProfile } from '$lib/firebase/services/userService'
import { json } from '@sveltejs/kit'
import jwtEncoder from 'jwt-encode'
import { jwtDecode } from 'jwt-decode'

export async function GET({ cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  let result  
  const userInfo = cookies.get('userInfo')
  if (userInfo === undefined) {
    const user_id = getUserId(jwtToken)
    result = await getProfile(user_id)
    const maxAge = 60 * 60 * 8
    const userToken = jwtEncoder(result.data, 'secred')
    cookies.set('userInfo', userToken, { path: '/', httpOnly: false, sameSite: 'strict', secure: import.meta.env.PROD, maxAge })
  } else {
    result = {error: false, message: 'getting data from session', data: jwtDecode(userInfo)}
  }

  return json(result)
}

export async function PUT({ request, cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const user_id = getUserId(jwtToken)
  const { name, address, phone, open_time, close_time, instagram } = await request.json()
  const result = await updateProfile(user_id, { name, address, phone, open_time, close_time, instagram })

  if (!result.error) {
    cookies.delete('userInfo', { path: '/', secure: import.meta.env.PROD })
  }

  return json(result)
}