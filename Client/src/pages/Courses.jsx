import CourseCard from '@/components/CourseCard'
import React from 'react'

export const coursesjson = [
    {
        "id": 1,
        "title": "Introduction to Web Development",
        "description": "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
        "category": "Web Development",
        "image": "https://source.unsplash.com/featured/?web,development"
    },
    {
        "id": 2,
        "title": "Python for Beginners",
        "description": "A beginner-friendly Python course covering syntax, data types, and simple projects.",
        "category": "Programming",
        "image": "https://source.unsplash.com/featured/?python,code"
    },
    {
        "id": 3,
        "title": "Data Structures & Algorithms",
        "description": "Understand essential data structures and algorithms with visual explanations and code.",
        "category": "Computer Science",
        "image": "https://source.unsplash.com/featured/?data,algorithm"
    },
    {
        "id": 4,
        "title": "React.js Essentials",
        "description": "Build powerful frontend apps with React, including hooks, components, and routing.",
        "category": "Frontend Development",
        "image": "https://source.unsplash.com/featured/?reactjs"
    },
    {
        "id": 5,
        "title": "UI/UX Design Principles",
        "description": "Design better interfaces by learning user-centered design and usability fundamentals.",
        "category": "Design",
        "image": "https://source.unsplash.com/featured/?ux,design"
    },
    {
        "id": 6,
        "title": "Machine Learning Basics",
        "description": "Explore the fundamentals of machine learning with practical Python examples.",
        "category": "Artificial Intelligence",
        "image": "https://source.unsplash.com/featured/?machinelearning"
    },
    {
        "id": 7,
        "title": "Full-Stack Development with MERN",
        "description": "Learn MongoDB, Express, React, and Node.js to build full-stack web applications.",
        "category": "Full Stack",
        "image": "https://source.unsplash.com/featured/?mern,stack"
    },
    {
        "id": 8,
        "title": "DevOps Fundamentals",
        "description": "Understand CI/CD, Docker, Kubernetes, and infrastructure as code.",
        "category": "DevOps",
        "image": "https://source.unsplash.com/featured/?devops"
    },
    {
        "id": 9,
        "title": "Digital Marketing Strategy",
        "description": "Learn SEO, content marketing, email campaigns, and social media strategies.",
        "category": "Marketing",
        "image": "https://source.unsplash.com/featured/?digital,marketing"
    },
    {
        "id": 10,
        "title": "Database Management with SQL",
        "description": "Master SQL queries, relational database design, and data normalization.",
        "category": "Database",
        "image": "https://source.unsplash.com/featured/?sql,database"
    },
    {
        "id": 11,
        "title": "Cybersecurity Basics",
        "description": "Understand online threats, network security, encryption, and ethical hacking fundamentals.",
        "category": "Security",
        "image": "https://source.unsplash.com/featured/?cybersecurity"
    },
    {
        "id": 12,
        "title": "Cloud Computing with AWS",
        "description": "Learn to build and deploy applications using Amazon Web Services.",
        "category": "Cloud",
        "image": "https://source.unsplash.com/featured/?aws,cloud"
    }
]


const Courses = () => {
    return (
        <div className='bg-gray-100 pt-20 '>
            <div className='min-h-screen max-w-7xl py-10 mx-auto'>
                <div className='px-4'>
                    <h1 className='text-4xl font-bold text-center mb-4 text-gray-800'>Our Courses</h1>
                    <p className='text-center text-gray-600 mb-12'>Explore Our Curated Courses To Boost Your Skills And Career. Whether You're a beginner Or An Expert, We Have Somthing For Everyone. </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            coursesjson?.map((course) => {
                              return  <CourseCard key={course.id} course={course}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
