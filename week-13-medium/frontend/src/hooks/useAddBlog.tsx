import axios from 'axios'
const url = import.meta.env.VITE_API_URL
import { useState } from 'react'
import { Blog } from '../pages/AddBlog'
export const useAddBlog = () => {
  const [loading, setLoading] = useState(false)
  const addBlog = async (blog: Blog) => {
    try {
      setLoading(true)
      const response = await axios.post(
        `${url}/api/v1/blog/create-blog`,
        blog,
        { headers: { Authorization: localStorage.getItem('token') } }
      )
      if (response.status === 200) {
        setLoading(false)
        return response.data
      }
    } catch (error: any) {
      setLoading(false)
      throw new Error(error.message)
    }
  }
  return { addBlog, loading }
}
