import { ChartColumnBig, FolderPlus, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Hamburger Button - appears below fixed navbar */}
            <div className="md:hidden fixed top-16 right-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='bg-gray-700 text-white p-2 rounded-md shadow-lg'
                >
                    <Menu />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`
                bg-gray-700 w-64 h-[calc(100vh-64px)] fixed top-16 left-0 z-40
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 md:static md:top-0 md:h-screen md:block
            `}>
                <div className='text-center pt-10 px-3 space-y-2'>
                    <NavLink to='/admin/dashboard' className={({ isActive }) =>
                        `text-2xl text-gray-200 ${isActive ? "bg-gray-950" : "bg-transparent"} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`}>
                        <ChartColumnBig />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to='/admin/course' className={({ isActive }) =>
                        `text-2xl text-gray-200 ${isActive ? "bg-gray-950" : "bg-transparent"} flex items-center gap-2 font-bold cursor-pointer p-3 rounded-2xl w-full`}>
                        <FolderPlus />
                        <span>Course</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default SideBar;
