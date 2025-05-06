import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'
import { Button } from '@/components/ui/button'

const UpdateCourse = () => {
  return (
    <div className="md:p-10 p-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-xl">
          Add detail information regarding course
        </h1>
        <Link to="lecture">
          <Button className="bg-blue-500 text-white hover:bg-blue-600" variant="link">Go to lectures page</Button>
        </Link>
      </div>
      <CourseTab/>
    </div>
  )
}

export default UpdateCourse
