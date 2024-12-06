const url = import.meta.env.VITE_API_URL
import { useState, useEffect } from 'react'
import axios from 'axios'
interface Blog {
  id: string
  title: string
  content: string
  authorId: string
  image?: string
  author: {
    id: string
    name: string
  }
  published: boolean
  createdAt: string
}
export const useFetchSingleBlog = (id: string) => {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchBlog = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${url}/api/v1/blog/get-blog/${id}`, {
        headers: { Authorization: localStorage.getItem('token') },
      })

      setLoading(false)

      if (response.status === 200) {
        const { blog: newBlog } = response.data

        setBlog(newBlog)
      } else {
        setError(true)
        throw new Error(response.data.message || 'Failed to fetch blog')
      }
    } catch (error: any) {
      setError(true)
      setLoading(false)
      throw new Error(error.response?.data?.message || 'Failed to fetch blog')
    }
  }
  useEffect(() => {
    fetchBlog()
  }, [id])

  return {
    blog,
    loading,
    error,
    fetchBlog, // Expose the fetch function
  }
}
