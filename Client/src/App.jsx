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
import Profile from './pages/Profile'
import Admin from './pages/admin/Admin'
import Dashboard from './pages/admin/Dashboard'
import Course from './pages/admin/Course'
import CreatCourses from './pages/admin/CreatCourses'
import UpdateCourse from './pages/admin/UpdateCourse'
import CreateLecture from './pages/admin/CreateLecture'
import EditLecture from './pages/admin/EditLecture'
import CourseDetails from './pages/admin/CourseDetails'

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
  },
  {
    path : "/profile",
    element:<><Navbar/> <Profile/></>
  },
  {
    path : "/courses/:courseId",
    element:<><Navbar/> <CourseDetails/></>
  },
  {
    path : "/admin",
    element:<><Navbar/> <Admin/></>,
    children:[
      {
        path : "dashboard",
        element:<Dashboard/>
      },
      {
        path : "course",
        element:<Course/>
      },
      {
        path : "course/create",
        element:<CreatCourses/>
      },
      {
        path : "course/:courseId",
        element:<UpdateCourse/>
      },
      {
        path : "course/:courseId/lecture",
        element:<CreateLecture/>
      },
      {
        path : "course/:courseId/lecture/:lectureId",
        element:<EditLecture/>
      },
    ]
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
