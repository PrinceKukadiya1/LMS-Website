import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/authSlice'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        email: '',
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        
        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/login' , input , {
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })

            if(response.data.success){
                navigate('/')
                dispatch(setUser(response.data.user))
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
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Welcome Back</h1>
                <p className='text-center text-gray-600 mb-8'>Please login to your account</p>
                {/* Name Input */}

                <div className='mb-4'>
                    <Label>Email Address</Label>
                    <Input 
                    placeholder="Enter Your Email" 
                    name='email' 
                    type='email'
                    value={input.email} 
                    onChange={handleChange} 
                    className='mt-2' 
                    />
                </div>
                <div className='mb-4'>
                    <Label>Password</Label>
                    <Input 
                    placeholder="Enter Your Password" 
                    className='mt-2'
                    name='password'
                    type='password' 
                    value={input.password} 
                    onChange={handleChange} 
                    />
                </div>

                <Button onClick={handleSubmit} className='w-full bg-blue-500 mt-1.5 hover:bg-gray-800 hover:text-white'>Login</Button>

                <div className='flex items-center my-6'>
                    <hr className='flex-grow border-gray-300' />
                    <span className='mx-3 border-gray-500'>OR</span>
                    <hr className='flex-grow border-gray-300' />
                </div>

                <p className='items-center flex justify-center mt-4'>Don't have  an account? <Link to='/signup'><span className='text-blue-500 hover:underline'>Signup</span></Link></p>
            </div>
        </div>
    )
}

export default Login
