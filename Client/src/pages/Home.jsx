import Hero from '@/components/Hero'
import React from 'react'
import CourseCard from '@/components/CourseCard'
import { coursesjson } from './Courses'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='py-10'>
      <h1 className='text-4xl font-bold text-center mb-4 text-gray-800'>Our Courses</h1>
      <p className='text-center text-gray-600 mb-12'>Explore Our Curated Courses To Boost Your Skills And Career. Whether You're a beginner Or An Expert, We Have Somthing For Everyone. </p>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {coursesjson.slice(0, 6).map((course) => {
          return <CourseCard course={course} />
        })}
      </div>
      </div>
      
    </div>
  )
}

export default Home
