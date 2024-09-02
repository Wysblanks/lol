"use client"

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Van } from '@/types';
import "../../global.css";

const VanForm = () => {
  const [van, setVan] = useState<Van>({
    id: 0,
    mv_file_no: '',
    plate_number: '',
    engine_no: '',
    chassis_no: '',
    denomination: '',
    piston_displacement: '',
    number_of_cylinders: 0,
    fuel: '',
    make: '',
    series: '',
    body_type: '',
    body_no: '',
    year_model: 0,
    gross_weight: 0,
    net_weight: 0,
    shipping_weight: 0,
    net_capacity: 0,
    year_last_registered: 0,
    expiration_date: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVan({ ...van, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/vans', van);
      alert('Van registered successfully');
      setVan({
        id: 0,
        mv_file_no: '',
        plate_number: '',
        engine_no: '',
        chassis_no: '',
        denomination: '',
        piston_displacement: '',
        number_of_cylinders: 0,
        fuel: '',
        make: '',
        series: '',
        body_type: '',
        body_no: '',
        year_model: 0,
        gross_weight: 0,
        net_weight: 0,
        shipping_weight: 0,
        net_capacity: 0,
        year_last_registered: 0,
        expiration_date: ''
      });
    } catch (error) {
      alert('Failed to register van');
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
<>
<header className='bg-white p-0 mb-2 fixed left-64 right-0 top-0 h-16 border-b-2 border-blue-300'>
      <div className='flex items-start group '> 
            {/* <Image 
              src={logo} 
              alt="logo" 
              className='right-3 w-16 h-16 bottom-6'
            />  */}
            <h1 className='text-center text-black mt-3 ml-4 
              text-3xl font-body'>Vans</h1>
          </div>
      
        <button type="button"className=""id="user-menu-button"onClick={toggleDropdown} >
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
            
  
       
    {/* // container */}
    <div className='bg-white flex justify-center items-center border rounded-3xl' style={{width:'101.1rem',marginLeft: '0.4rem',marginRight: '-29rem', marginTop: '3.9rem', height: 'calc(106vh  - 10rem)'}}>
              {/* // table */}
              <div className=' lg:px-7 ' style={{marginBottom: '30rem', width: '59.9rem', height: '23rem',marginLeft: '-26.6rem'}}>
              
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
                                Add Van
                            </button>
                          </div>
                          
                      </div>


                      <table className="  bg-white text-sm text-center text-gray-500 dark:text-gray-400" style={{marginLeft: '-9rem',width: '101rem' }}>
                  <thead className='  text-gray-700 uppercase  dark:text-gray-400 ' style={{height: '3rem', width: '4rem' }} >
                      <tr className=" text-gray-700 bg-gray-50 border-b-2 border-blue-600">
                          <th className="py-2 px-4 border-b">mv_file_no</th>
                          <th className="py-2 px-4 border-b"> plate_number</th>
                          <th className="py-2 px-4 border-b">engine_no</th>
                          <th className="py-2 px-4 border-b">chassis_no</th>
                          <th className="py-2 px-4 border-b">Contact no.</th>
                          <th className="py-2 px-4 border-b">denomination</th>
                          <th className="py-2 px-4 border-b">piston_displacement</th>
                          <th className="py-2 px-4 border-b">fuel</th>
                          <th className="py-2 px-4 border-b">make</th>
                          <th className="py-2 px-4 border-b">series</th>
                          <th className="py-2 px-4 border-b">body_type</th>
                          <th className="py-2 px-4 border-b"> body_no</th>
                          <th className="py-2 px-4 border-b"> body_no</th>
                          <th className="py-2 px-4 border-b">  year_model</th>
                          <th className="py-2 px-4 border-b"> gross_weight</th>
                          <th className="py-2 px-4 border-b"> net_weight</th>
                          <th className="py-2 px-4 border-b"> shipping_weight</th>
                          <th className="py-2 px-4 border-b">  net_capacity</th>
                          <th className="py-2 px-4 border-b">  year_last_registered</th>
                          <th className="py-2 px-4 border-b">  expiration_date</th>


                          <th className="py-2 px-4 border-b">Actions</th>
                          
                          
                      </tr>
                  </thead>
                  <tbody style={{height: '3rem', width: '4rem' }} >
                      <tr className="hover:bg-gray-100 uppercase"  style={{height: '3rem', width: '4rem' }} >
                          
                          {/* <td className=" py-3 font-medium border-b text-gray-900 whitespace-nowrap dark:text-white " >
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
                         */}
                        
                      </tr>
                     
                      
                      
                    
                  </tbody>
              </table>
          </div>
  </div>



  {/* Modal */}


{/* ADD VAN BUTTON MODAL */}
{isAddModalOpen && (
<div>
 {/* BACK DROP  BG COLOR MODAL */}
{isAddModalOpen && (
  
  <div className={`${isAddModalOpen ? 'block' : 'hidden '} fixed inset-0 z-40 bg-black bg-opacity-40`}>
    
  </div>
)}

  <div id="add-van-modal" tabIndex="-1" aria-hidden="true" className=" 
  fixed top-0 right-0 left-0 z-50 justify-center items-center 
  ">
    <div className="relative p-4 " style={{ marginLeft: '34rem', marginTop: '5rem' , width: '60rem'}}>
      {/* MODAL CONTENT */}
      <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">

        
        {/* MODAL HEADER */}
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900">Van Registration</h3>
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
          <div className="grid gap-2 mb-4 sm:grid-cols-5">
          <div className="relative w-full max-w-xs">
              <label htmlFor="firstname" className="absolute text-gray-500  top-1 left-3 text-sm uppercase">MV File No.</label>
              <input
                type="text" style={{height: '3.8rem',width: '13.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                 border-black  focus:outline-none  text-right"
                 name="mv_file_no" value={van.mv_file_no}
                id="firstname" required
                 onChange={handleChange}/>
              
            </div>
            

            <div className="relative w-full max-w-xs " style={{marginLeft: '2.55rem',width: '14rem'}}>
              <label htmlFor="middlename" className="absolute text-gray-500  top-1 left-3 text-sm uppercase">Plate Number</label>
              <input
                type="text"
                name="plate_number" value={van.plate_number}
                id="middlename"
                 onChange={handleChange}

                 style={{height: '3.8rem'}}
                 className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                  border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs " style={{marginLeft: '5.3rem',width: '14rem'}}>
              <label htmlFor="lastname" className="absolute text-gray-500  top-1 left-3 text-sm uppercase">Engine No</label>
              <input
                type="text"
                name="engine_no" value={van.engine_no}
                id="lastname"
                 onChange={handleChange}
                style={{height: '3.8rem'}}
                 className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                  border-black  focus:outline-none  text-right"
                required
              />
            </div>
            
            
            <div className="relative w-full max-w-xs " style={{marginLeft: '8rem',width: '14rem'}}>
              <label htmlFor="license_no" className="absolute text-gray-500  top-1 left-3 text-sm uppercase">Chassis No</label>
              <input
                type="text"
                name="chassis_no" value={van.chassis_no} 
                id="license_no"
                 onChange={handleChange}
                 style={{height: '3.8rem'}}
                 className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                  border-black  focus:outline-none  text-right"
                required
              />
            </div>

              <br />

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.55rem',width: '13.8rem'}}>
              <label htmlFor="Denomination" className="absolute text-gray-500  top-1 left-3 text-sm uppercase">Denomination</label>
             
              <input
                type="text"
                name="denomination" value={van.denomination} 
                id="contact"
                 onChange={handleChange}
                 style={{height: '3.8rem'}}
                 className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                  border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.55rem', marginLeft: '2.55rem',width: '14rem'}}>
              <label htmlFor="Piston Displacement" className="absolute text-gray-500  top-1 left-3 text-sm uppercase">Piston Displacement</label>
              <input
                type="text"
                name="piston_displacement" value={van.piston_displacement} 
                id="Piston Displacement"
                 onChange={handleChange}
                 style={{height: '3.8rem'}}
                 className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                  border-black  focus:outline-none  text-right"
                required
              />
            </div>
            


            <div className="relative w-full max-w-xs" style={{marginTop: '-0.55rem', marginLeft: '5.3rem',width: '14rem'}}>
              <label htmlFor="Number of Cylinders<" className="absolute text-gray-500  top-1 left-3 text-sm  uppercase">Number of Cylinders</label>
              <input
                type="text"
                name="number_of_cylinders" value={van.number_of_cylinders}
                id="Number of Cylinders<"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                 className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                  border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.55rem', marginLeft: '8rem',width: '14rem'}}>
              <label htmlFor="Fuel"  className="absolute text-gray-500  top-1 left-3 text-sm uppercase" >Fuel</label>
              <input
                type="text"
                name="fuel" value={van.fuel}
                id="street"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-gray-900 
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>
<br />
            <div className="relative w-full max-w-xs" style={{marginTop: '-0.2rem',width: '13.8rem'}}>
              <label htmlFor="Make" className="absolute text-gray-500  top-1 left-3 text-sm uppercase" >Make</label>
              <input
                type="text"
                name="make" value={van.make} 
                id="Make"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.2rem', marginLeft: '2.55rem',width: '14rem'}}>
              <label htmlFor="Series" className="absolute text-gray-500  top-1 left-3 text-sm uppercase" >Series</label>
              <input
                type="text"
                name="series" value={van.series}
                id="Series"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.2rem', marginLeft: '5.3rem',width: '14rem'}}>
              <label htmlFor="Body Type" className="absolute text-gray-500  top-1 left-3 text-sm uppercase" >Body Type</label>
              <input
                type="text"
                name="body_type" value={van.body_type}
                id="Body Type"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>
            

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.2rem', marginLeft: '8rem', width: '7.1rem'}}>
              <label htmlFor="Body No."  className="absolute text-gray-500  top-1 left-3 text-sm uppercase" >Body No.</label>
              <input
                type="text"
                name="body_no" value={van.body_no}
                id="Body No."
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
    
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.2rem', marginLeft: '3.8rem', width: '7rem'}}>
              <label htmlFor="street"  className="absolute text-gray-500  top-1 left-2  text-sm uppercase ">Year Model</label>
              <input
                type="text"
                name="year_model" value={van.year_model}
                id="street"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.6rem',width: '13.8rem'}}>
              <label htmlFor="street" className="absolute text-gray-500  top-1 left-2  text-sm uppercase " >Gross Weight</label>
              <input
                type="text"
                name="gross_weight" value={van.gross_weight}
                id="street"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>


            <div className="relative w-full max-w-xs" style={{marginTop: '-0.6rem', marginLeft: '2.55rem',width: '14rem'}}>
              <label htmlFor="street"  className="absolute text-gray-500  top-1 left-2  text-sm uppercase " >Net Weight</label>
              <input
                type="text"
                name="net_weight" value={van.net_weight}
                id="street"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.6rem', marginLeft: '5.3rem',width: '14rem'}}>
              <label htmlFor="street"  className="absolute text-gray-500  top-1 left-2  text-sm uppercase " >Shipping Weight</label>
              <input
                type="text"
                name="shipping_weight" value={van.shipping_weight}
                id="street"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full max-w-xs" style={{marginTop: '-0.6rem', marginLeft: '8rem',width: '14rem'}}>
              <label htmlFor="street" className="absolute text-gray-500  top-1 left-2  text-sm uppercase " >Net Capacity</label>
              <input
                type="text"
                name="net_capacity" value={van.net_capacity}
                id="street"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <br />

            <div className="relative w-full " style={{marginTop: '-0.55rem',width: '27.77rem'}}>
              <label htmlFor="Year Last Registered" className="absolute text-gray-500  top-1 left-2  text-sm uppercase ">Year Last Registered</label>
              <input
                type="text"
                name="year_last_registered" value={van.year_last_registered} 
                id="Year Last Registered"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>

            <div className="relative w-full " style={{marginTop: '-0.55rem',width: '27.9rem',marginLeft: '16.5rem'}}>
              <label htmlFor="street"  className="absolute text-gray-500  top-1 left-2  text-sm uppercase "> Expiration Date</label>
              <input
                type="text"
                name="expiration_date" value={van.expiration_date} 
                id="street"
                onChange={handleChange}
                style={{height: '3.8rem'}}
                className=" block w-full px-3 pt-6 pb-2 border text-black
                 border-black  focus:outline-none  text-right"
                required
              />
            </div>
            
     </div>
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
            Add new van
          </button>
        </form>
      </div>
      
    </div>
  </div>
  </div>

)}


</>

);
}

export default VanForm;
