import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home  from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path:"/",
    element:<> <Navbar/> <Home/> </>
  },
  {
    path:"/courses",
    element:<> <Navbar/> <Courses/> </>
  },
  {
    path : "/login",
    element: <> <Navbar/> <Login/></>
  },
  {
    path : "/signup",
    element:<><Navbar/> <Signup/></>
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router = {router}/>
      <Footer/>
    </>
  )
}

export default App
