import { json } from '@sveltejs/kit'
import { logout } from '$lib/firebase/services/userService'

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ cookies }) {
  const result = await logout()

  if (!result.error){
    cookies.delete('isLogin', { path: '/', secure: import.meta.env.PROD })
    cookies.delete('jwtToken', { path: '/', secure: import.meta.env.PROD })
    cookies.delete('userInfo', { path: '/', secure: import.meta.env.PROD })
  }

  return json(result)
}