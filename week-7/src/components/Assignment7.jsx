import React, { useState } from 'react'
import BdayCard from './BdayCard'
import BdayCard2 from './BdayCard2'
import BdayCard3 from './BdayCard3'

const Assignment7 = () => {
  const [clicked, setClicked] = useState(false)
  const [data, setdata] = useState({ name: '', age: '' })
  const handleChange = (e) => {
    setdata((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = () => {
    setClicked(!clicked)
  }

  return (
    <div className='flex items-center justify-center h-screen '>
      <button
        onClick={handleSubmit}
        className='absolute font-bold underline left-5 top-24'
      >
        Go Back
      </button>
      <img
        src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='absolute object-cover z-[-10] opacity-80 w-screen h-screen'
        alt=''
      />
      {!clicked ? (
        <div className='flex items-center justify-center w-full'>
          <div className='flex flex-col items-center justify-center w-[50%] gap-4 py-24 bg-black bg-opacity-60 shadow-slate-900 shadow-lg rounded-3xl'>
            <h2 className='py-10 text-4xl font-bold text-white'>
              Enter your name
            </h2>
            <div className='flex w-[80%] '>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                className='border-2 border-black w-[80%] p-2 bg-opacity-100 text-black  focus:bg-opacity-100 '
                placeholder='Enter name'
              />
              <input
                type='number'
                name='age'
                onChange={handleChange}
                className='border-2 border-black w-[20%] p-2 bg-opacity-100 text-black  focus:bg-opacity-100 '
                placeholder='Enter age'
              />
            </div>
            <button
              onClick={handleSubmit}
              // onClick={setClicked(!clicked)}
              className='px-4 py-2 text-lg text-white bg-blue-500 hover:bg-blue-700 rounded-xl'
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center w-full'>
          <BdayCard
            name={data.name}
            age={data.age}
          />
          <BdayCard2
            name={data.name}
            age={data.age}
          />
          <BdayCard3
            name={data.name}
            age={data.age}
          />
        </div>
      )}
    </div>
  )
}

export default Assignment7
