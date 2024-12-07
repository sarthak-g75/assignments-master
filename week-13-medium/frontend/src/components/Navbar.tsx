import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { userAtom } from '../store/atoms/UserAtom'
import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    setUser(false)
    localStorage.removeItem('token')
  }

  return (
    <nav className='flex items-center justify-between w-full px-6 lg:px-24 py-4 text-white bg-gray-800 h-[8vh] relative'>
      <Link
        to='/'
        className='text-2xl font-semibold'
      >
        Medium
      </Link>

      {/* Desktop Menu */}
      <div className='items-center hidden gap-8 lg:flex'>
        <Link
          to='/'
          className='hover:underline'
        >
          Home
        </Link>
        {user ? (
          <div className='flex gap-8'>
            <Link
              to='/add-blog'
              className='hover:underline'
            >
              Add new
            </Link>
            <Link
              to='/all-blogs'
              className='hover:underline'
            >
              Blogs
            </Link>
            <button
              className='hover:underline'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex gap-8'>
            <Link
              to='/signin'
              className='hover:underline'
            >
              Sign in
            </Link>
            <Link
              to='/signup'
              className='hover:underline'
            >
              Sign up
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className='block lg:hidden'>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? (
            <IoClose size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className='fixed top-0 right-0 z-50 flex flex-col items-center w-3/4 h-screen py-4 text-white bg-gray-800 shadow-lg'
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className='self-end px-4 py-2 text-xl'
            aria-label='Close menu'
          >
            <IoClose />
          </button>
          <Link
            to='/'
            className='py-4 text-lg hover:underline'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                to='/add-blog'
                className='py-4 text-lg hover:underline'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Add new
              </Link>
              <Link
                to='/all-blogs'
                className='py-4 text-lg hover:underline'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <button
                className='py-4 text-lg hover:underline'
                onClick={() => {
                  handleLogout()
                  setIsMobileMenuOpen(false)
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to='/signin'
                className='py-4 text-lg hover:underline'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                to='/signup'
                className='py-4 text-lg hover:underline'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
