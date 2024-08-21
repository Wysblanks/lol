"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Operator, Van } from '@/types';

const AssignmentForm = () => {
  const [operators, setOperators] = useState<Operator[]>([]);
  const [vans, setVans] = useState<Van[]>([]);
  const [assignment, setAssignment] = useState({ van_id: 0, operator_id: 0 });

  useEffect(() => {
    const fetchOperators = async () => {
      const { data } = await axios.get('/api/operators');
      setOperators(data);
    };

    const fetchVans = async () => {
      const { data } = await axios.get('/api/vans');
      setVans(data);
    };

    fetchOperators();
    fetchVans();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: Number(value) });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/assignments', assignment);
      alert('Assignment created successfully');
      setAssignment({ van_id: 0, operator_id: 0 });
    } catch (error) {
      alert('Failed to create assignment');
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
              text-3xl font-body'>Assignments</h1>
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

      
      <div className='bg-white flex justify-center items-center border rounded-3xl' style={{width:'101.1rem',marginLeft: '0.4rem',marginRight: '-27rem', marginTop: '4rem', height: 'calc(105vh  - 10rem)'}}>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8  grid grid-cols-2 gap-6 "
      style={{marginBottom: '38rem', marginLeft: '9rem'}}>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6 col-span-2">Assign Operator to Van</h2>
      
      <div className="col-span-1" style={{marginLeft: '-4rem',marginTop:'-2rem'}}>
        <label className="block text-gray-700 font-bold mb-2" style={{marginLeft: '-0.1rem'}}>Operator</label>
        <select
          name="operator_id"
          value={assignment.operator_id}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
         style={{marginLeft: '-6rem'}}>
          <option value="">Select Operator</option>
          {operators.map(operator => (
            <option key={operator.id} value={operator.id}>
              {operator.firstname} {operator.lastname}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-1" style={{marginLeft: '-4rem',marginTop:'-2rem'}}>
        <label className="block text-gray-700 font-bold mb-2" style={{marginLeft: '7rem'}}>Van</label>
        <select
          name="van_id"
          value={assignment.van_id}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Van</option>
          {vans.map(van => (
            <option key={van.id} value={van.id}>
              {van.plate_number}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="w-full py-3 bg-transparent border border-blue-500 
           text-black font-bold rounded-3xl shadow-md hover:bg-blue-500 
           focus:outline-none hover:text-white"
        style={{marginLeft: '-5rem'}}>
          Create Assignment
        </button>
      </div>
      </form>

      </div>
    </>
  );
};

export default AssignmentForm;
