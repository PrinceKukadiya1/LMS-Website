import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Signup = () => {

    const navigate = useNavigate()

    const [user , setUser] = useState({
        name:"",
        email:"",
        password:"",
        role:"student"
    })

    const handleChange = (e) => {
        const {name , value} = e.target;
        setUser((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/register' , user , {
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })

            if(response.data.success){
                navigate('/login')
                toast.success(response.data.message)
            }
            else{
                toast.error("Somthing Went Wrong")
            }

        } catch (error) {
            console.log(error);
            
        }
        
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 '>
            <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Create Your Account</h1>
                <p className='text-center text-gray-600 mb-8'>Join Us On Today! It's Quick And Easy</p>
                {/* Name Input */}
                <div className='mb-4 '>
                    <Label>Full Name</Label>
                    <Input
                    placeholder="Enter Your Name" 
                    name="name" 
                    value={user.name} 
                    onChange= {handleChange}
                    type="text" 
                    id='name' 
                    className='mt-2'/>
                </div>
                <div className='mb-4'>
                    <Label>Email Address</Label>
                    <Input 
                    placeholder="Enter Your Email" 
                    className='mt-2'
                    name="email" 
                    value={user.email} 
                    onChange= {handleChange}
                    type="email" 
                    id='email' />
                </div>
                <div className='mb-4'>
                    <Label>Password</Label>
                    <Input 
                    placeholder="Enter Your Password" 
                    className='mt-2'
                    name="password" 
                    value={user.password} 
                    onChange= {handleChange}
                    type="password" 
                    id='password' />
                </div>
                <div className='mb-4'>
                    <Label>Role</Label> 
                    <RadioGroup className='flex gap-4 mt-2'>
                        <div className="flex items-center space-x-2">
                            <Input 
                            type='radio'
                            id='role1'
                            name='role'
                            value='student'
                            checked={user.role === "student"}
                            onChange={handleChange}
                            />
                            <Label htmlFor="role1">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input 
                            type='radio'
                            id='role1'
                            name='role'
                            value='instructor'
                            checked={user.role === "instructor"}
                            onChange={handleChange}
                            />
                            <Label htmlFor="role2">Instructor</Label>
                        </div>
                    </RadioGroup>
                </div>
                <Button onClick={handleSubmit} className='w-full bg-blue-500 hover:bg-gray-800 hover:text-white'>SignUp</Button>
                <p className='items-center flex justify-center mt-4'>Already have  an account? <Link to='/login'><span className='text-blue-500 hover:underline'>Login</span></Link></p>
            </div>
        </div>
    )
}

export default Signup
