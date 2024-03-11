import React from 'react'

const BdayCard = ({ name, age }) => {
  return (
    <div className='max-w-md mx-auto overflow-hidden rounded-lg shadow-md bg-gradient-to-r from-yellow-400 to-orange-500'>
      <div className='px-6 py-8'>
        <div className='mb-4 text-4xl font-bold text-white'>
          🎉 Happy Birthday, {name}! 🎂
        </div>
        <p className='text-lg text-white'>
          Wishing you a fantastic {age}th birthday! May all your dreams and
          wishes come true.
        </p>
      </div>
      <div className='flex items-center justify-center px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-600'>
        <span className='inline-block px-4 py-2 mr-2 text-lg font-semibold text-white bg-gray-800 rounded-full'>
          #PartyTime
        </span>
        <span className='inline-block px-4 py-2 mr-2 text-lg font-semibold text-white bg-gray-800 rounded-full'>
          #Celebration
        </span>
        <span className='inline-block px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded-full'>
          #MakeAWish
        </span>
      </div>
    </div>
  )
}

export default BdayCard
