'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AdminDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const router = useRouter();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const checkRole = async () => {
      try {
        const response = await axios.get('/api/check-role', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.role_id !== 1) {
          router.push('/login');
        }
      } catch {
        router.push('/login');
      }
    };

    checkRole();
  }, [router]);

  return (
    <>
    <header className='bg-white p-0 mb-2 fixed left-64 right-0 top-0 h-16 border-b-2 border-blue-300'>
      <div className='flex items-start group'> 
        {/* <Image 
          src={logo} 
          alt="logo" 
          className='right-3 w-16 h-16 bottom-6'
        />  */}
        <h1 className='text-center text-black mt-3 ml-4
          text-3xl font-body'>Dashboard</h1>
      </div>
    
      <button
        type="button"
        className=""
        id="user-menu-button"
        onClick={toggleDropdown}
      >
        <span className="sr-only"></span>
        <img
          className="absolute top-1 right-3 w-10 h-10 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
          alt="user photo"
        />
      </button>

      <div
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } absolute right-0 top-12 my-0 w-56 text-base list-none
         bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
        id="dropdown"
      >
        
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 truncate dark:text-white">Admin@markads.com</span>
        </div>
        <ul className="py-1 text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >My profile</a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            >Account settings</a>
          </li>
        </ul>
        
        <ul className="py-1 text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a>
          </li>
        </ul>
      </div>
    </header>

    <div className='bg-white flex justify-center items-center' style={{marginLeft: '4rem', marginRight: '4rem', marginTop: '4rem', height: 'calc(100vh - 10rem)'}}>
  <div className='bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-5xl'>
 
    <div className='mb-8'>
      <h1 className='text-3xl font-bold text-gray-800'>Welcome to the Van Scheduling Dashboard</h1>
    </div>



     
    </div>
  </div>



  </>
  );
};

export default AdminDashboard;
