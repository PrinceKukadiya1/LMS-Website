import React, { use } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({course}) => {
  const navigate = useNavigate()
  const {user} = useSelector(store=>store.auth) 
  return (
    <Card className='bg-white shadow-lg'>
      <img src={course.courseThumbnail} alt="course image" className='w-full h-48 object-cover' />
      <div className='p-6'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>{course.courseTitle}</h2>
        {/* <h4 className='text-xl font-semibold text-gray-800 mb-3'>{course.category}</h4> */}
        <p className='text-gray-600 mb-4'>{course.subTitle}</p>
        <Button noClick={() => navigate(user ? `/courses/${course._id}` : "/login")} className='bg-blue-800 hover:bg-gray-800 hover:text-white'>Learn More</Button>
      </div>
    </Card>
  )
}

export default CourseCard
