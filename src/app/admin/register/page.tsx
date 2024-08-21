"use client"

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role_id, setRoleId] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/register', { username, password, role_id });
      alert('User registered successfully');
      //router.push('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Failed to register user');
    }
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>

<header className='bg-white p-0 mb-2 fixed left-64 right-0 top-0 h-16 border-b-2 border-blue-300'>
      <div className='flex items-start group '> 
            {/* <Image 
              src={logo} 
              alt="logo" 
              className='right-3 w-16 h-16 bottom-6'
            />  */}
            <h1 className='text-center text-black mt-3 ml-4 
              text-3xl font-body'>Register</h1>
          </div>
      
        <button
          type="button"
          className=""
          id="user-menu-button"
          onClick={toggleDropdown}
        >
          <span className="sr-only"></span>
          <img
            className="absolute top-2 right-3 w-10 h-10 rounded-full"
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

    <form onSubmit={handleSubmit} style={{marginTop: '10rem'}}>
      <h1>Register</h1>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Role ID</label>
        <input type="text" value={role_id} onChange={(e) => setRoleId(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
    </>
  );
};


export default RegisterPage;
