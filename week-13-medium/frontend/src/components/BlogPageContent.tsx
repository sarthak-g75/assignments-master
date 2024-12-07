import BlogContentCardUsage from './BlogContentCardUsage'
import AuthorSlateCardUsage from './AuthorSlateCardUsage'
import BlogTitle from './BlogTitle'

export interface Blog {
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

const BlogPageContent = ({ blog }: { blog: Blog | null }) => {
  return (
    <section className='w-full'>
      <div className='flex w-full gap-6'>
        {/* Blog Content */}
        <div className='flex flex-col gap-10 lg:w-3/4'>
          <div className='flex items-center justify-center w-full rounded'>
            <img
              className='object-cover w-full h-96'
              src={blog?.image}
              alt='Blog'
            />
          </div>
          <div className='block lg:hidden'>
            <AuthorSlateCardUsage
              authorName={blog?.author?.name || ''}
              createdAt={blog?.createdAt || ''}
            />
          </div>
          <div className='flex flex-col w-full gap-2'>
            <div>
              <BlogTitle
                title={blog?.title || ''}
                font='big'
              />
            </div>
            <div className='text-justify'>
              <BlogContentCardUsage
                content={blog?.content || ''}
                text='full'
              />
            </div>
          </div>
        </div>

        {/* Author Slate */}
        <div className='hidden w-1/4 lg:block'>
          <div className='sticky py-2 top-4'>
            <AuthorSlateCardUsage
              authorName={blog?.author?.name || ''}
              createdAt={blog?.createdAt || ''}
            />
            <p className='text-gray-500 text-nowrap'>
              Beautiful minds create beautiful worlds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPageContent
