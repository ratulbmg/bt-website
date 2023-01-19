import React, { useState } from 'react'
import { useRouter } from 'next/router'

const QuickLinks = () => {
  const router=useRouter()

  const [showStudentsDropdown,setShowStudentDropdown]=useState(false)
  const [showLibraryDropdown,setShowLibraryDropdown]=useState(false)
  const [showDADropdown,setShowDADropdown]=useState(false)
  
  return (
    <div className="bg-[#1b3058] text-white border-t-4 border-yellow-300 w-1/4 h-min">
          <p className="text-2xl py-4 pl-3 border-b border-white">Quick Links</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Faculty</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/teacherAndGeneralAssistance")}}>Technical and General Assistance</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{setShowStudentDropdown(!showStudentsDropdown)}}>
            Students 
            <i className="fa-solid fa-chevron-right text-base text-gray-600"></i>
            
            {showStudentsDropdown&&<div className='mt-3'><div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>List</p>
            </div></div>}
            
          </p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/laboratory")}}>Laboratory</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{setShowLibraryDropdown(!showLibraryDropdown)}}>
            Library 
            <i className="fa-solid fa-chevron-right text-base text-gray-600"></i>


            {showLibraryDropdown&&<div className='mt-3'>
            <div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>Complementary Books</p>
            </div>
            <div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>Books Received From Central Library</p>
            </div>
            <div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>Available Journals</p>
            </div>
            </div>}

            
            </p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Research Publications</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/placements")}}>Placement Records</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Grants For Research & Conference</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{setShowDADropdown(!showDADropdown)}}>
            Departmental Activities 
            <i className="fa-solid fa-chevron-right text-base text-gray-600"></i>

            {showDADropdown&&<div className='mt-3'>
            <div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>Webinars</p>
            </div>
            <div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>Conferences</p>
            </div>
            <div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>Newsletters</p>
            </div>
            <div className='bg-[#fdebd0] text-black w-[95%] text-[15px] mx-auto mb-2'>
              <p className='pl-5'>Magazine</p>
            </div>
            </div>}

            
            </p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Departmental Events</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/alumni")}}>Distuinguished Alumni</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/syllabus")}}>UG and PG Syllabus</p>
        </div>
  )
}

export default QuickLinks