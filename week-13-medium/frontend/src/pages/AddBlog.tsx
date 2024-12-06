import ImageUploader from '../components/ImageUploader'
import { useState } from 'react'
export interface Blog {
  title: string
  content: string
  image: string
}
const AddBlog = () => {
  const [blog, setBlog] = useState<Blog>({
    title: '',
    content: '',
    image: '',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <section className='min-h-[84vh] flex items-center justify-center bg-gray-50'>
      <form className='w-full max-w-lg p-6 space-y-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-center text-gray-700'>
          Add a New Blog
        </h2>

        {/* Title */}
        <div className='space-y-2'>
          <label
            htmlFor='title'
            className='block font-medium text-gray-600'
          >
            Title
          </label>
          <input
            onChange={handleChange}
            type='text'
            name='title'
            id='title'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='Enter your blog title'
          />
        </div>

        {/* Image Uploader */}
        <div>
          <ImageUploader setBlog={setBlog} />
        </div>
        {/* Content */}
        <div className='space-y-2'>
          <label
            htmlFor='content'
            className='block font-medium text-gray-600'
          >
            Content
          </label>
          <textarea
            onChange={handleChange}
            name='content'
            id='content'
            className='w-full h-40 px-4 py-2 border border-gray-300 rounded-lg shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none'
            placeholder='Write your blog content here...'
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600'
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default AddBlog
