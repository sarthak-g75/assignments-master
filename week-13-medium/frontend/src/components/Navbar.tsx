import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { userAtom } from '../store/atoms/UserAtom'
import { useRecoilState } from 'recoil'
const Navbar = () => {
  const [user, setUser] = useRecoilState(userAtom)
  return (
    <nav className='flex items-center justify-between w-full px-6 lg:px-24 py-4 text-white bg-gray-800 h-[8vh]'>
      <Link
        to={'/'}
        className='text-2xl font-semibold'
      >
        Medium
      </Link>
      <div className='items-center hidden gap-8 lg:flex'>
        <Link
          to={'/'}
          className='hover:underline'
          // className='px-4 py-2 text-base font-medium text-gray-800 bg-white border-2 border-white rounded-md hover:bg-opacity-90 '
        >
          Home
        </Link>
        {user ? (
          <div className='flex gap-8'>
            <Link
              to={'/add-blog'}
              className='hover:underline'
              // className='px-4 py-2 text-base font-medium text-gray-800 bg-white border-2 border-white rounded-md hover:bg-opacity-90 '
            >
              Add new
            </Link>
            <Link
              to={'/all-blogs'}
              className='hover:underline'
              // className='px-4 py-2 text-base font-medium text-gray-800 bg-white border-2 border-white rounded-md hover:bg-opacity-90 '
            >
              Blogs
            </Link>
            <button
              onClick={() => {
                setUser(false)
                localStorage.removeItem('token')
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex gap-8'>
            <Link
              to={'/signin'}
              className='hover:underline'
              // className='px-4 py-2 text-base font-medium text-gray-800 bg-white border-2 border-white rounded-md hover:bg-opacity-90 '
            >
              Sign in
            </Link>
            <Link
              to={'/signup'}
              className='hover:underline'
              // className='px-4 py-2 text-base font-medium text-white bg-gray-700 border-2 border-white rounded-md border-opacity-90 hover:bg-white hover:text-black hover:bg-opacity-80 hover:border-opacity-80'
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
      <div className='block lg:hidden'>
        <GiHamburgerMenu size={24} />
      </div>
    </nav>
  )
}

export default Navbar
