import { goto } from '$app/navigation'
import { jwtDecode } from 'jwt-decode'

export function blockGuest(){
  const cookieName = 'isLogin'
  const findCookie = document.cookie.match(new RegExp(`(?:^|; )${cookieName}=(.+?)(?:;|$)`))
  const cookieValue = findCookie ? findCookie[1] : undefined
  if (cookieValue === undefined) {
    goto('/v2/login')
  }
}

export function blockUser(){
  const cookieName = 'isLogin'
  const findCookie = document.cookie.match(new RegExp(`(?:^|; )${cookieName}=(.+?)(?:;|$)`))
  const cookieValue = findCookie ? findCookie[1] : undefined
  if (cookieValue !== undefined) {
    goto('/v2/home')
  }
}

export function getUserId(jwtToken){
  const payload = jwtDecode(jwtToken)
  return payload.user_id
}