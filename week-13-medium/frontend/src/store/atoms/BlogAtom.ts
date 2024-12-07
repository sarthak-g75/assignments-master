import { atom } from 'recoil'
import { Blog } from '../../components/BlogPageContent'
export const blogAtom = atom<Blog | null>({
  key: 'blog',
  default: null,
})
