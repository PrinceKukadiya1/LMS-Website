import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'

const CourseCard = ({course}) => {
  return (
    <Card className='bg-white shadow-lg'>
      <img src={course.image} alt="course image" className='w-full h-48 object-cover' />
      <div className='p-6'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>{course.title}</h2>
        <h4 className='text-xl font-semibold text-gray-800 mb-3'>{course.category}</h4>
        <p className='text-gray-600 mb-4'>{course.description}</p>
        <Button className='bg-blue-500 hover:bg-gray-800 hover:text-white'>Learn More</Button>
      </div>
    </Card>
  )
}

export default CourseCard
