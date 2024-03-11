import React from 'react'

const BdayCard2 = ({ name, age }) => {
  return (
    <div className='max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-blue-400 to-purple-500'>
      <div className='px-8 py-6'>
        <div className='mb-6 text-4xl font-bold text-white'>
          🎉 Happy Birthday, {name}! 🎂
        </div>
        <p className='text-lg text-white'>
          Wishing you a fantastic {age}th birthday! May all your dreams and
          wishes come true.
        </p>
      </div>
      <div className='flex items-center justify-start px-8 py-4'>
        <span className='inline-block px-4 py-2 mb-4 mr-4 text-lg font-semibold text-white bg-blue-500 rounded-full'>
          #Celebration
        </span>
        <span className='inline-block px-4 py-2 mb-4 mr-4 text-lg font-semibold text-white bg-blue-500 rounded-full'>
          #PartyTime
        </span>
        <span className='inline-block px-4 py-2 mb-4 text-lg font-semibold text-white bg-blue-500 rounded-full'>
          #MakeAWish
        </span>
      </div>
    </div>
  )
}

export default BdayCard2
