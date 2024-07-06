import { json } from '@sveltejs/kit'
import { getUserId } from '$lib/helpers/session'
import { getProfile } from '$lib/firebase/services/userService'
import jwtEncoder from 'jwt-encode'
import { jwtDecode } from 'jwt-decode'

export async function load({ cookies }){
  const jwtToken = cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return json({error: true, message:"you are not login yet!"})
  }

  const userInfo = cookies.get('userInfo')
  if (userInfo === undefined) {
    const user_id = getUserId(jwtToken)
    const result = await getProfile(user_id)
    const maxAge = 60 * 60 * 8
    const userToken = jwtEncoder(result.data, 'secred')
    cookies.set('userInfo', userToken, { path: '/', httpOnly: false, sameSite: 'strict', secure: import.meta.env.PROD, maxAge })
    return {userInfo: result.data}
  }

   return {userInfo: jwtDecode(userInfo)}
}