import React from 'react'
import { useRouter } from 'next/router'

const QuickLinks = () => {
  const router=useRouter()
  
  return (
    <div className="bg-[#1b3058] text-white border-t-4 border-yellow-300 w-1/4 h-[510px]">
          <p className="text-2xl py-4 pl-3 border-b border-white">Quick Links</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Faculty</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/teacherAndGeneralAssistance")}}>Technical and General Assistance</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Students <i className="fa-solid fa-chevron-right text-base text-gray-600"></i></p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/laboratory")}}>Laboratory</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Library <i className="fa-solid fa-chevron-right text-base text-gray-600"></i></p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Research Publications</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Placement Records</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Grants For Research & Conference</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Departmental Activities <i className="fa-solid fa-chevron-right text-base text-gray-600"></i></p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/faculty")}}>Departmental Events</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/alumni")}}>Distuinguished Alumni</p>
          <p className="text-lg p-1 border-b cursor-pointer border-white hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/syllabus")}}>UG and PG Syllabus</p>
        </div>
  )
}

export default QuickLinks