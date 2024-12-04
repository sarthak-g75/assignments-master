import { atom } from 'recoil'

export const userAtom = atom({
  key: 'user',
  default: !!localStorage.getItem('token'),
})
