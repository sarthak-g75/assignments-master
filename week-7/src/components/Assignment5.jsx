import React, { useState } from 'react'
import axios from 'axios'
import { FaGithub } from 'react-icons/fa'

const Assignment5 = () => {
  const [userName, setuserName] = useState('')
  const [clicked, setClicked] = useState(false)
  const [data, setdata] = useState('')
  const submitHandle = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      )

      setdata(response.data)
      setClicked(!clicked)
    } catch (error) {
      alert(error.message + ':Please Enter a valid username')
    }

    console.log(data)
  }
  return (
    <>
      <div className='flex flex-col items-center justify-center pt-28'>
        <button
          onClick={() => setClicked(!clicked)}
          className='absolute font-bold text-black underline left-5 top-24'
        >
          Go Back
        </button>
        <h1 className='text-3xl font-bold'>Find Github info</h1>
        {/* <div className='w-full bg-pink-50'>hello</div> */}
        {!clicked ? (
          <div className='flex items-center w-full '>
            <div className='flex flex-row items-center justify-center w-full gap-4 py-20 '>
              <input
                className='border-2 border-black w-[40%] p-2'
                type='text'
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value)
                }}
                placeholder='Enter the username '
                name='username'
              />
              <button
                onClick={submitHandle}
                className='px-4 py-2 text-lg text-white bg-gray-950 hover:bg-gray-500 rounded-xl'
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center w-full py-40'>
            <div className='max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-purple-500 to-pink-500'>
              <div className='flex items-center gap-4 px-8 py-6'>
                <img
                  className='block border-4 border-white rounded-full h-36 w-36'
                  src={data.avatar_url}
                  alt='profile image'
                />
                <div className='flex flex-col justify-center'>
                  <p className='text-3xl font-semibold text-white'>
                    {data.name}
                  </p>
                  <a
                    className='text-white w-max'
                    href={data.html_url}
                    target='_blank'
                  >
                    <FaGithub size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Assignment5
