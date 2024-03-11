import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  'assignment1',
  'assignment2',
  'assignment3',
  'assignment4',
  'assignment5',
  'assignment6',
  'assignment7',
]

const Landing = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-blue-500 to-purple-500'>
      <h1 className='mb-8 text-4xl font-bold text-white'>
        Welcome to Week 7 Assignment
      </h1>
      <div className='flex flex-wrap gap-4'>
        {links.map((val, i) => {
          return (
            <Link
              key={i + 1}
              className='px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 rounded-lg bg-slate-950 hover:bg-gray-800'
              to={`/${val}`}
            >
              {val.toUpperCase()}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Landing
