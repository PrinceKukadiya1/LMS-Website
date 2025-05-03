import React from 'react'
import { GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false
    return (
        <div className='bg-gray-900 z-50 py-3 w-full fixed top-0'>
            <div className='max-w-7xl mx-auto flex justify-between'>
                {/* logo section */}
                <Link to='/'>
                <div className='flex gap-1.5 items-center'>
                    <GraduationCap className='text-gray-300 w-15 h-15' />
                    <h1 className='text-gray-300 text-3xl font-bold'>StudyNest</h1>
                </div>
                </Link>
                
                {/* menu section */}
                <nav className='flex items-center gap-6 text-white'>
                    <ul className='flex gap-7 text-xl items-center font-semibold text-white'>
                        <Link to='/'><li className='cursor-pointer'>Home</li></Link>
                        <Link to='/courses'><li className='cursor-pointer'>Courses</li></Link>
                    </ul>

                    {
                        !user ? (
                            <div className='flex gap-3'>
                                <Link to='/login'><Button className="bg-blue-500 hover:bg-blue-600">Login</Button></Link>
                                <Link to='/signup'><Button className="bg-gray-400 hover:bg-gray-500">Signup</Button></Link>
                            </div>
                        ) : (
                            <div className='flex items-center gap-7'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <Button className="bg-blue-500 hover:bg-blue-600">Logout</Button>

                            </div>
                        )
                    }
                </nav>
            </div>
        </div>
    )
}

export default Navbar
