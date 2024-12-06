import { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import BlogCardSkeleton from '../components/BlogCardSkeleton'
import { useFetchBlogs } from '../hooks/useFetchBlogs'

const AllBlogs = () => {
  const { blogs, loading, fetchBlogs, pagination } = useFetchBlogs()
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchBlogs(page)
  }, [page])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 && // Trigger near the bottom
      !loading &&
      pagination &&
      page < pagination.totalPages
    ) {
      setPage((prevPage) => prevPage + 1) // Load the next page
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // Cleanup
  }, [loading, pagination])

  return (
    <div className='flex flex-col items-center justify-start w-full p-10 min-h-[84vh]'>
      <div className='w-full mb-10 lg:w-2/3'>
        <div className='flex flex-col gap-4'>
          {blogs.map((blog) => (
            <BlogCard
              blog={blog}
              key={blog.id}
            />
          ))}

          {loading &&
            Array.from({ length: 5 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
        </div>
        {!loading && blogs.length === 0 && (
          <div className='text-center'>No Blogs Found</div>
        )}
      </div>
    </div>
  )
}

export default AllBlogs
