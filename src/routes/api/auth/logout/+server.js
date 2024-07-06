import { json } from '@sveltejs/kit'
import { logout } from '$lib/firebase/services/userService'

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ cookies }) {
  const result = await logout()

  if (!result.error){
    cookies.delete('isLogin', { path: '/' })
    cookies.delete('jwtToken', { path: '/' })
  }

  return json(result)
}