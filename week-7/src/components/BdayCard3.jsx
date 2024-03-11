import React from 'react'

const BdayCard3 = ({ name, age }) => {
  return (
    <div className='max-w-md mx-auto overflow-hidden text-white rounded-lg shadow-lg bg-gradient-to-r from-teal-400 to-blue-500'>
      <div className='px-6 py-8'>
        <div className='mb-4 text-4xl font-bold'>
          🎉 Happy Birthday, {name}! 🎂
        </div>
        <p className='text-lg'>
          Wishing you an amazing {age}th birthday! May your day be filled with
          joy and laughter.
        </p>
      </div>
      <div className='flex items-center justify-center px-6 py-4 bg-gradient-to-r from-teal-500 to-blue-600'>
        <span className='inline-block px-4 py-2 mr-2 text-lg font-semibold bg-gray-800 rounded-full'>
          #PartyTime
        </span>
        <span className='inline-block px-4 py-2 mr-2 text-lg font-semibold bg-gray-800 rounded-full'>
          #Celebration
        </span>
        <span className='inline-block px-4 py-2 text-lg font-semibold bg-gray-800 rounded-full'>
          #MakeAWish
        </span>
      </div>
    </div>
  )
}

export default BdayCard3
