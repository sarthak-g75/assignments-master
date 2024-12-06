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
function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/all-blogs'
          element={<AllBlogs />}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
        <Route
          path='/signin'
          element={<Signin />}
        />
        <Route
          path='/add-blog'
          element={<AddBlog />}
        />
        <Route
          path='/blog/:id'
          element={<Blog />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
