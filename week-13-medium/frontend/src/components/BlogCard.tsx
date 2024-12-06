import { Link } from 'react-router-dom'
import AuthorSlate from './AuthorSlateCardUsage'
import BlogContentCardUsage from './BlogContentCardUsage'
import BlogTitle from './BlogTitle'
interface Blog {
  id: string
  title: string
  content: string
  authorId: string
  image?: string
  published: boolean
  author: {
    id: string
    name: string
  }
  createdAt: string
}
const BlogCard = ({ blog }: { blog: Blog }) => {
  const image =
    'https://plus.unsplash.com/premium_photo-1733230677536-ebd9121658ce?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div className='w-full pb-4 border-b'>
      <Link
        to={`/blog/${blog.id}`}
        className='p-6 space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-start'
      >
        <img
          src={blog.image || image}
          className='flex items-center justify-center object-cover h-48 rounded w-72 '
        />

        <div className='flex flex-col w-full gap-2 py-2'>
          {/* Author Slate */}
          <AuthorSlate
            authorName={blog.author.name || 'Anonymous'}
            createdAt={blog.createdAt}
          />
          <div className='flex flex-col gap-1'>
            {/* Blog Title */}
            <div className='w-full '>
              <BlogTitle title={blog.title} />
            </div>
            {/* Blog Content */}
            <div className='w-full '>
              <BlogContentCardUsage content={blog.content} />
            </div>
          </div>
          {/* <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div> */}
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
