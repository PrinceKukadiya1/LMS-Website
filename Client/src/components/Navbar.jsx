import React, { useState } from 'react'
// import { GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '@/redux/authSlice.js';
import { toast } from 'sonner';
import UserLogo from '../assets/user.png'
// import React, { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(store => store.auth);

    const toggleMenu = () => setMenuOpen(!menuOpen);


    const logoutHandler = async (e) => {
        try {
            const res = await axios.get('http://localhost:8000/api/v1/user/logout' , {withCredentials:true});
            if(res.data.success){
                navigate('/')
                dispatch(setUser(null))
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.responce.data.message)
            
        }
    } 

    return (
        <div className='bg-gray-900 z-50 py-3 w-full fixed top-0'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4'>
                {/* Logo */}
                <Link to='/'>
                    <div className='flex gap-1.5 items-center'>
                        <GraduationCap className='text-gray-300 w-8 h-8' />
                        <h1 className='text-gray-300 text-2xl font-bold'>StudyNest</h1>
                    </div>
                </Link>

                {/* Hamburger Icon */}
                <div className='md:hidden text-white' onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Menu */}
                <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent 
                    md:flex md:items-center transition-all duration-300 ease-in-out 
                    ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col md:flex-row gap-4 md:gap-7 text-xl items-center font-semibold text-white px-4 py-4 md:py-0'>
                        <Link to='/' onClick={() => setMenuOpen(false)}><li className='cursor-pointer'>Home</li></Link>
                        <Link to='/courses' onClick={() => setMenuOpen(false)}><li className='cursor-pointer'>Courses</li></Link>

                        {!user ? (
                            <div className='flex gap-3'>
                                <Link to='/login'><Button className="bg-blue-500 hover:bg-blue-600">Login</Button></Link>
                                <Link to='/signup'><Button className="bg-gray-400 hover:bg-gray-500">Signup</Button></Link>
                            </div>
                        ) : (
                            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-7'>
                                {user.role === "instructor" && <Link to='/admin/dashboard' onClick={() => setMenuOpen(false)}><li className='cursor-pointer'>Admin</li></Link>}
                                <Link to='/profile'>
                                    <Avatar>
                                        <AvatarImage src={user.photoUrl || UserLogo} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Link>
                                <Button onClick={logoutHandler} className="bg-blue-500 hover:bg-blue-600">Logout</Button>
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar
