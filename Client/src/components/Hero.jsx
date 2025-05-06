import React from 'react';
import HeroImg from '../assets/hero.png';
import { Search, User, Award } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div className='bg-slate-800 pt-24 px-4'>
      <div className='container mx-auto flex flex-col xl:flex-row items-center gap-10 xl:gap-16'>

        {/* Text Section */}
        <div className='flex-1 space-y-6 text-center xl:text-left'>
          <h1 className='text-3xl sm:text-5xl xl:text-6xl font-extrabold text-gray-200 leading-tight'>
            Explore our <span className='text-blue-500'>14000+<br className='hidden sm:block' /></span>
            online courses for all
          </h1>
          <p className='text-gray-300 text-lg sm:text-xl xl:text-2xl font-semibold max-w-2xl mx-auto xl:mx-0'>
            "Learn Smarter. Grow Faster. Succeed Anywhere."
          </p>

          {/* Search Input */}
          <div className='relative max-w-lg w-full mx-auto xl:mx-0'>
            <input
              type="text"
              placeholder='Search Your Course Here...'
              className='bg-gray-200 w-full text-gray-800 p-4 pr-36 rounded-lg placeholder:text-gray-500 text-base sm:text-lg'
            />
            <button className='px-4 py-3 flex gap-1 items-center bg-blue-500 font-semibold absolute right-0 top-1 text-white rounded-r-lg text-base sm:text-lg'>
              Search <Search width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Image & Badges Section */}
        <div className='flex-1 relative flex flex-col items-center mt-10 xl:mt-0'>

          {/* Hero Image */}
          <img
            src={HeroImg}
            alt="Hero"
            className='w-full max-w-xs sm:max-w-md xl:max-w-lg drop-shadow-lg'
          />

          {/* Badges Container (shown below image on small screens) */}
          <div className='container mx-auto max-w-screen-xl flex flex-col xl:flex-row items-center gap-10 xl:gap-16'>

            {/* Certified Students Badge */}
            <div className='bg-slate-200 flex gap-3 items-center rounded-md px-4 py-2'>
              <div className='rounded-full bg-blue-400 p-2 text-white'>
                <Award />
              </div>
              <div>
                <h2 className='font-bold text-2xl'><CountUp end={684} />+</h2>
                <p className='italic text-sm text-gray-600 leading-none'>Certified Students</p>
              </div>
            </div>

            {/* Active Students Badge */}
            <div className='bg-slate-200 flex gap-3 items-center rounded-md px-4 py-2 '>
              <div className='rounded-full bg-blue-400 p-2 text-white'>
                <User />
              </div>
              <div>
                <h2 className='font-bold text-2xl'><CountUp end={4500} />+</h2>
                <p className='italic text-sm text-gray-600 leading-none'>Active Students</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
