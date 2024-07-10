import { writable } from 'svelte/store'

export const activeTab = writable();
export const title = writable('');