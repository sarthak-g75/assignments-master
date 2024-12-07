import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AllBlogs from './pages/AllBlogs'
import AddBlog from './pages/AddBlog'
import { ProtectedRoute, LoggedInRoute } from './ProtectedRoute'
function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route
          path='/'
          element={<LandingPage />}
        />
        {/* Authenticated Routes */}
        <Route
          path='/signup'
          element={<LoggedInRoute element={<Signup />} />}
        />
        <Route
          path='/signin'
          element={<LoggedInRoute element={<Signin />} />}
        />

        {/* Protected Routes */}
        <Route
          path='/blog/:id'
          element={<ProtectedRoute element={<Blog />} />}
        />
        <Route
          path='/all-blogs'
          element={<ProtectedRoute element={<AllBlogs />} />}
        />
        <Route
          path='/add-blog'
          element={<ProtectedRoute element={<AddBlog />} />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
