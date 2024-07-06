import { goto } from '$app/navigation'

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