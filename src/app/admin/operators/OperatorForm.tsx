"use client";


import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../images/logo.png';
import "../../global.css";
import { Operator } from '@/types';


export default function Page() {

  const [operator, setOperator] = useState<Operator>({
    id: 0,
    firstname: '',
    middlename: '',
    lastname: '',
    license_no: '',
    contact: '',
    region: '',
    city: '',
    brgy: '',
    street: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOperator({ ...operator, [name]: value });
  };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  // handler logic
};

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/operators', operator);
      alert('Operator registered successfully');
      setOperator({
        id: 0,
        firstname: '',
        middlename: '',
        lastname: '',
        license_no: '',
        contact: '',
        region: '',
        city: '',
        brgy: '',
        street: ''
      });
    } catch (error) {
      alert('Failed to register operator');
    }
  };
  
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);

  const openPreviewModal = () => setPreviewModalOpen(true);
  const closePreviewModal = () => setPreviewModalOpen(false);



  const [isDropdownOpen, setDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  
  return (
    <div className='max-width'> 
    <header className='bg-white p-0 mb-2 fixed left-64 right-0 top-0 h-16 border-b-2 border-blue-300'>
      <div className='flex items-start group '> 
            {/* <Image 
              src={logo} 
              alt="logo" 
              className='right-3 w-16 h-16 bottom-6'
            />  */}
            <h1 className='text-center text-black mt-3 ml-4 text-3xl font-body'>Operator</h1>
          </div>
      
        <button type="button"className="" id="user-menu-button"onClick={toggleDropdown}>
          <span className="sr-only"></span>
          <img className="absolute top-2 right-3 w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="user photo"/>
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

      

      <h1 className='text-left text-black mt-8
              text-3xl font-body'>Operator Management</h1>
      <p className='font-serif text-base'>Manage your registered operators and view their details. 
        Add, edit, or archive operators as needed.</p>
       
    {/* // container */}
    <div className='bg-gray-50 flex justify-center items-center border rounded-3xl border-b-4 border-gray-300' >
              {/* // table */}
              <div className=' lg:px-7 ' style={{marginBottom: '30rem', width: '59.9rem', height: '18rem',marginLeft: '-26.6rem'}}>
              
                <div className=" flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4" 
                style={{marginLeft: '20rem',marginRight: '-30rem'}}>
                  
                      {/* search  bar line */}
                      
                      <div className=" w-96 " style={{marginTop: '0rem', marginLeft: '30rem'}}>
                          <form className="flex items-center">
                              <label htmlFor="simple-search" className="sr-only">Search</label>
                              <div className="relative w-full">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                      </svg>
                                  </div>
                                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-black
                                  text-sm rounded-lg hover:border-primary-700 focus:border-sky-500 focus:ring-sky-500
                                  block w-full pl-10 p-2 
                                    =" placeholder="Search" required=""></input>
                              </div>
                          </form>
                      </div>


                          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 "
                          >
                            <button 
                            type="button"   className="flex items-center justify-center text-white 
                            font-medium rounded-lg text-sm px-4 py-2 focus:ring-2
                              dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none "  onClick={openAddModal} >
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add Operator
                            </button>
                          </div>
                          
                    </div>


    <table className=" max-width text-left dark:text-gray-400" style={{marginLeft: '-9rem',width: '101rem',fontFamily: 'font-sans' }}>
                  <thead className='  dark:text-gray-500 ' style={{height: '3rem', width: '4rem' }} >
                      
                      <tr className=" text-gray-600 border-b-2 border-gray-200 border-t-2">
                          <th className="py-2 px-4 border-b">First name</th>
                          <th className="py-2 px-4 border-b">Middle Name</th>
                          <th className="py-2 px-4 border-b">Last Name</th>
                          <th className="py-2 px-4 border-b">License no.</th>
                          <th className="py-2 px-4 border-b">Address</th>
                          <th className="py-2 px-4 border-b">Contact no.</th>
                          <th className="py-2 px-4 border-b">Emergency Name</th>
                          <th className="py-2 px-4 border-b">Emergency Contact</th>
                          
                          <th className="py-2 px-4 border-b">Actions</th>
                          
                          
                      </tr>
                  </thead>
                  <tbody className='bg-gray-50 '
                  style={{height: '3rem', width: '4rem' }} >
                      <tr className="hover:bg-gray-100 uppercase"  style={{height: '3rem', width: '4rem' }} >
                          
                          <td className=" py-3 font-medium border-b text-gray-900 whitespace-nowrap dark:text-white " >
                                      <div className="flex items-center space-x-4">
                                          <button onClick={openEditModal}
                                           type="button" data-drawer-target="drawer-update-product" 
                                          data-drawer-show="drawer-update-product" aria-controls="drawer-update-product" 
                                          className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                                  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                                              </svg>
                                              Edit
                                          </button>
                                          <button onClick={openPreviewModal}
                                           type="button" data-drawer-target="drawer-read-product-advanced" data-drawer-show="drawer-read-product-advanced" aria-controls="drawer-read-product-advanced" className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 -ml-0.5">
                                                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"></path>
                                              </svg>
                                              Preview
                                          </button> 
                                          <button type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal" className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 ">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 -ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                              </svg>
                                              Archive
                                          </button>
                                      </div>
                                  </td>
                        
                        
                      </tr>
                     
                      
                      
                    
                  </tbody>
              </table>
          </div>
  </div>

{/* Modal */}


{/* ADD PRODUCT BUTTON MODAL */}
{isAddModalOpen && (
<div>
 {/* BACK DROP  BG COLOR MODAL */}
{isAddModalOpen && (
  
  <div className={`${isAddModalOpen ? 'block' : 'hidden '} fixed inset-0 z-40 bg-black bg-opacity-50`}>
    
  </div>
)}

  <div id="add-product-modal" tabIndex="-1" aria-hidden="true" className=" 
  fixed top-0 right-0 left-0 z-50 justify-center items-center 
  ">
    <div className="relative p-4 " style={{ marginLeft: '34rem', marginTop: '10rem' , width: '60rem'}}>
      {/* MODAL CONTENT */}
      <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">

        
        {/* MODAL HEADER */}
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900">Add Operator</h3>
          <button onClick={closeAddModal}
           type="button" className="bg-transparent hover:bg-gray-200
           hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>



        {/* MODAL BODY */}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2 mb-4 sm:grid-cols-3">
            <div>
              <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 uppercase" >First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={operator.firstname} onChange={handleChange}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="first name"
                required
              />
            </div>

            <div>
              <label htmlFor="middlename" className="block mb-2 text-sm font-medium text-gray-900 uppercase">Middle name</label>
              <input
                type="text"
                name="middlename"
                id="middlename"
                value={operator.middlename} onChange={handleChange}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="middle name"
                required
              />
            </div>

            <div>
              <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 uppercase">Last name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={operator.lastname} onChange={handleChange}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="last name"
                required
              />
            </div>
            
            
            <div>
              <label htmlFor="license_no" className="block mb-2 text-sm font-medium text-gray-900 uppercase">License No.</label>
              <input
                type="text"
                name="license_no"
                id="license_no"
                value={operator.license_no} onChange={handleChange}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="license no."
                required
              />
            </div>

            <div>
              <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 uppercase">Contact No.</label>
              <input
                type="text"
                name="contact"
                id="contact"
                value={operator.contact} onChange={handleChange}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="contact no."
                required
              />
            </div>

            
              <br />
            

            <div>
            <label htmlFor="brgy" className="block mb-2 text-sm font-medium text-gray-900 uppercase">Barangay</label>
            <select
                id="brgy"
                name="brgy"
                // value={operator.brgy}
                // onChange={handleSelectChange}
                
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                    block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase">
                <option selected>Select Barangay</option>
                <option value="Barangay Apopong">Barangay Apopong</option>
                <option value="Barangay Baluan">Barangay Baluan</option>
                <option value="Barangay Bula">Barangay Bula</option>
                <option value="Barangay Buayan">Barangay Buayan</option>
                <option value="Barangay Calumpang">Barangay Calumpang</option>
                <option value="Barangay Dadiangas East">Barangay Dadiangas East</option>
                <option value="Barangay Dadiangas North">Barangay Dadiangas North</option>
                <option value="Barangay Dadiangas South">Barangay Dadiangas South</option>
                <option value="Barangay Dadiangas West">Barangay Dadiangas West</option>
                <option value="Barangay Labangal">Barangay Labangal</option>
                <option value="Barangay Lagao">Barangay Lagao</option>
                <option value="Barangay Mabuhay">Barangay Mabuhay</option>
                <option value="Barangay San Isidro">Barangay San Isidro</option>
                <option value="Barangay Sinawal">Barangay Sinawal</option>
                <option value="Barangay Tambler">Barangay Tambler</option>
                <option value="Barangay Upper Labay">Barangay Upper Labay</option>
               
            </select>
        </div>


        <div>
              <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 uppercase" >Street</label>
              <input
                type="text"
                name="street"
                id="street"
                value={operator.street} onChange={handleChange}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="street name"
                required
              />
            </div>

        <div>
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 uppercase">City</label>
            <select
                id="city"
                
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                    block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase">
                <option selected>Select City</option>
                <option value="General Santos">General Santos</option>
            </select>
        </div>

        

     </div>

           {/* EMERGENCY CONTACT  */}
           <div>
          <h3 className="text-lg font-semibold text-gray-900">Incase of Emergency</h3>
          
          </div>
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          </div>
          
          <form action="#">
          <div className="grid gap-2 mb-4 sm:grid-cols-3">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 uppercase" >Emergency name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="Nickname"
                required
              />
            </div>
            
            <div>
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 uppercase">Emergency Contact No.</label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
                block w-64 p-2.5 placeholder-gray-400 focus:border-green-600 focus:outline-none uppercase"
                placeholder="Contact No."
                required
              />
            </div>
            </div>
            </form>



          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="text-white inline-flex items-center bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-green-500
          font-medium rounded-lg text-sm px-5 py-2.5 mt-7 
            text-center  " style={{marginLeft: '44rem'}}
          >
            <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add new operator
          </button>
        </form>
      </div>
      
    </div>
  </div>
  </div>
  )}


   </div>

 );
}
