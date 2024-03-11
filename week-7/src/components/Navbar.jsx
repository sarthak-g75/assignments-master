import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='fixed top-0 z-10 '>
      <div className='flex justify-between w-screen px-8 py-4 text-lg font-bold text-black bg-slate-100 h-max'>
        <Link to={'/'}>Week 7</Link>
        <Link to={'/'}>Home</Link>
      </div>
      <hr />
    </div>
  )
}
export default Navbar
