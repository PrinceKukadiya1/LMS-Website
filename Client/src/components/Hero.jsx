import React from 'react'
import { Award, Search, User } from 'lucide-react'
import HeroImg from "../assets/Hero.png";
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <div className='bg-slate-800 pt-20'>
            <div className='lg:h-[649px] max-w-7xl mx-auto flex md:flex-row flex-col gap-10 items-center'>
                {/* text section */}

                <div className='space-y-7 px-4 md:px-0'>
                    <h1 className='text-4xl mt-10 md:mt-0 md:text-6xl font-extrabold text-gray-200'> Explore our <span className='text-blue-500'>14000+ <br /></span> online courses for all</h1>
                    <p className='text-gray-200 text-2xl font-bold'>"Learn Smarter. Grow Faster. Succeed Anywhere."</p>
                    <div className='inline-flex relative'>
                        <input type="text" placeholder='Search Your Course Here...' className='bg-gray-200 w-[350px] md:w-[450px] text-gray-800 p-4 pr-40 rounded-lg rounded-r-xl placeholder:text-gray-500' />
                        <button className='px-4 py-[14px] flex gap-1 items-center bg-blue-500 font-semibold absolute right-0
                        text-white rounded-r-lg text-xl'>Search<Search width={20} height={20}/></button>
                    </div>
                </div>

                {/* image section */}

                <div className='flex md:h-[649px] items-end relative px-4 md:px-0'>
                    <img src={HeroImg} alt="" className='w-[500px] shadow-blue-500 drop-shadow-lg  ml-16' />
                    <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[38%] right-[-70px] px-4 py-2  '>
                        <div className='rounded-full bg-blue-400 p-2  text-white'>
                            <User/>
                        </div>
                        <div >
                            <h2 className='font-bold text-2xl'><CountUp end={4500}/>+</h2>
                            <p className='italic text-sm text-gray-600 leading-none '>Active Students</p>
                        </div>
                    </div>
                    
                    <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[15%] left-5 px-4 py-2  '>
                        <div className='rounded-full bg-blue-400 p-2  text-white'>
                            <Award/>
                        </div>
                        <div >
                            <h2 className='font-bold text-2xl'><CountUp end={684}/>+</h2>
                            <p className='italic text-sm text-gray-600 leading-none '>Certified Students</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero
