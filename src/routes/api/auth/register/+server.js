import { json } from '@sveltejs/kit';
import {register} from '$lib/firebase/services/userService'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, cookies }) {
	const { email, password } = await request.json();
  const user = await register(email, password)

  if (!user.error) {
    const maxAge = remember ? 60 * 60 * 24 * 30 : 60 * 60 * 8
    cookies.set('jwtToken', user.token, { path: '/', httpOnly: true, sameSite: 'strict', maxAge })
    cookies.set('isLogin', true, { path: '/', httpOnly: false, sameSite: 'strict', maxAge })
  }

  return json(user);
}