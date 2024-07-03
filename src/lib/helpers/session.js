import { redirect } from '@sveltejs/kit';
import { jwtDecode } from 'jwt-decode';

// Kunci untuk menyimpan token di storage
const STORAGE_KEY = 'jwtToken';

function set(token, remember = false) {
  if (remember) {
    localStorage.setItem(STORAGE_KEY, token);
  } else {
    sessionStorage.setItem(STORAGE_KEY, token);
  }
}

function get() {
  const token = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
  if (!token) return null;
  
  try {
    return jwtDecode(token);
  } catch (e) {
    console.error('Failed to decode token:', e);
    return null;
  }
}

function verify() {
  const token = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY);
  return !!token;
}

function shouldVerify(state = true) {
  if (state && !verify()) {
    redirect(302, '/v2/login')
  } else if (!state && verify()) {
    redirect(302, '/v2/home')
  }
}

function remove() {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
}

export default { set, get, shouldVerify, remove }
