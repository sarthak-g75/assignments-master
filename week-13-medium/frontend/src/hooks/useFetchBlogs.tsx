const url = import.meta.env.VITE_API_URL
import { useState } from 'react'
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
interface Pagination {
  currentPage: number
  totalPages: number
  totalBlogs: number
  limit: number
}
export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchBlogs = async (page: number) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${url}/api/v1/blog/all-blogs?page=${page}`,
        { headers: { Authorization: localStorage.getItem('token') } }
      )

      setLoading(false)

      if (response.status === 200) {
        const { blogs: newBlogs, pagination: newPagination } = response.data

        setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]) // Append new blogs
        setPagination(newPagination)
      } else {
        setError(true)
        throw new Error(response.data.message || 'Failed to fetch blogs')
      }
    } catch (error: any) {
      setError(true)
      setLoading(false)
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs')
    }
  }

  return {
    blogs,
    pagination,
    loading,
    error,
    fetchBlogs, // Expose the fetch function
  }
}
