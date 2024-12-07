import React, { useState, ChangeEvent } from 'react'
import imageCompression from 'browser-image-compression'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../firebase.config'
import { Blog } from '../pages/AddBlog'
interface ImageUploaderProps {
  setBlog: React.Dispatch<React.SetStateAction<Blog>>
}
const ImageUploader: React.FC<ImageUploaderProps> = ({ setBlog }) => {
  const [image, setImage] = useState<File | null>(null)
  const [uploading, setUploading] = useState<boolean>(false)
  const [downloadURL, setDownloadURL] = useState<string>('')

  // Handle file input change
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      try {
        // Compress the image
        const options = {
          maxSizeMB: 1, // Maximum size in MB
          maxWidthOrHeight: 800, // Max dimensions
          useWebWorker: true, // Enable multi-threading
        }
        const compressedFile = await imageCompression(file, options)
        setImage(compressedFile)
      } catch (error) {
        console.error('Error compressing image:', error)
      }
    }
  }

  // Handle upload to Firebase
  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image first.')
      return
    }

    setUploading(true)

    // Create a storage reference
    const storageRef = ref(storage, `images/${image.name}`)

    // Upload the file
    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Optional: Track progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`Upload is ${progress}% done`)
      },
      (error) => {
        console.error('Upload error:', error)
        setUploading(false)
      },
      async () => {
        // Get the download URL
        const url = await getDownloadURL(uploadTask.snapshot.ref)
        setDownloadURL(url)
        setBlog((prevState) => ({
          ...prevState,
          image: url,
        }))
        setUploading(false)
      }
    )
  }

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-xl font-bold'>Compress and Upload Image</h1>
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='mb-4'
      />
      {image && (
        <p className='mb-4 text-gray-600'>Selected Image: {image.name}</p>
      )}
      <button
        onClick={handleUpload}
        className='px-4 py-2 text-white bg-gray-800 border-2 border-black rounded-md hover:bg-opacity-90'
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {downloadURL && (
        <div className='mt-4'>
          <p className='text-green-600'>Upload Successful!</p>
          <a
            href={downloadURL}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 underline'
          >
            View Image
          </a>
        </div>
      )}
    </div>
  )
}

export default ImageUploader
