import Assignment1 from './components/Assignment1'
import Assignment2 from './components/Assignment2'
import Assignment3 from './components/Assignment3'
import Assignment4 from './components/Assignment4'
import Assignment5 from './components/Assignment5'
import Assignment6 from './components/Assignment6'
import Assignment7 from './components/Assignment7'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import './index.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/assignment1'
          element={<Assignment1 />}
        />
        <Route
          path='/assignment2'
          element={<Assignment2 />}
        />
        <Route
          path='/assignment3'
          element={<Assignment3 />}
        />
        <Route
          path='/assignment4'
          element={<Assignment4 />}
        />
        <Route
          path='/assignment5'
          element={<Assignment5 />}
        />
        <Route
          path='/assignment6'
          element={<Assignment6 />}
        />
        <Route
          path='/assignment7'
          element={<Assignment7 />}
        />
      </Routes>
      {/* <Assignment1 /> */}
      {/* <Assignment2 /> */}
    </>
  )
}

export default App
