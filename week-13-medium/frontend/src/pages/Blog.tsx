import { useParams } from 'react-router-dom'
import { useFetchSingleBlog } from '../hooks/useFetchSingleBlog'
import BlogPageSkeleton from '../components/BlogPageSkeleton'
import BlogPageContent from '../components/BlogPageContent'
const Blog = () => {
  const { id } = useParams()
  const { blog, loading, error } = useFetchSingleBlog(id as string)

  return (
    <section className='min-h-[84vh] w-full flex items-start p-10 mb-20'>
      {/* {JSON.stringify(blog)} */}
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='w-full lg:w-3/4'>
          {loading ? <BlogPageSkeleton /> : <BlogPageContent blog={blog} />}
        </div>
      </div>
    </section>
  )
}

export default Blog
