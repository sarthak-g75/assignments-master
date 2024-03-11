import React from 'react'
import '../index.css'
const Assignment = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-slate-900 '>
      <div className='shadow-lg shadow-white w-max'>
        <div className='relative flex flex-col justify-between h-96 w-96'>
          <img
            src='/potrait.jpg'
            className='absolute inset-0 object-cover m-auto border-4 border-white rounded-full w-36 h-36'
          />

          <img
            src='https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='h-[50%] object-cover bg-cyan-200'
          ></img>
          <div className='flex flex-col items-center justify-end h-full py-4 bg-white'>
            <div>
              <h2 className='font-bold'>
                Sarthak <span className='font-semibold opacity-50 '>23</span>
              </h2>
              <p className='opacity-60'>New Delhi</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-around py-4 bg-white'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>80K</h2>{' '}
            <p className='text-sm opacity-50'>Followers</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>803K</h2>{' '}
            <p className='text-sm opacity-50'>Likes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>1.4K</h2>{' '}
            <p className='text-sm opacity-50'>Photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assignment
