import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"


const Syllabus=()=>{

  return(
    <div className="overflow-x-hidden">
      <div className="w-screen flex flex-row justify-evenly items-center py-4">
        <div className="w-[120px] h-[120px]">
          <Image src={logo} alt={"Logo"}/>
        </div>
       <div>
       <h1 className="text-5xl text-center poppins">
       Department Of Biotechnology 
        </h1>
        <h4 className="text-3xl text-center poppins">Haldia Institute Of Technology</h4>
       </div>
       <p className="text-red-700 font-bold cursor-pointer">Faculty Login</p>
      </div>
      <Navbar/>
      <div className="w-[90%] mx-auto flex flex-row justify-between mt-10 mb-20">
      <QuickLinks/>
        <div className="w-[45%]">
          <p className="text-4xl font-semibold text-gray-500 text-center mb-12">Syllabus For Biotechnology</p>

          <table className='table-auto border border-black w-full'>
        <tr className='border border-black bg-blue-400 h-[40px]'>
        <td className='text-[12px] text-center border-r border-gray-500 px-3 odd:bg-blue-100 even:bg-blue-200'>
        UG Syllabus
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 uppercase'>
    <i className="fa-solid fa-file-pdf text-xl cursor-pointer"></i>
    </td>
           
        </tr>
        <tr className='border border-black bg-blue-400 h-[40px]'>
        <td className='text-[12px] text-center border-r border-gray-500 px-3 odd:bg-blue-100 even:bg-blue-200'>
        PG Syllabus
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 uppercase'>
    <i className="fa-solid fa-file-pdf text-xl cursor-pointer"></i>
    </td>
           
        </tr>
        <tr className='border border-black bg-blue-400 h-[40px]'>
        <td className='text-[12px] text-center border-r border-gray-500 px-3 odd:bg-blue-100 even:bg-blue-200'>
        Recommended MOOCs courses
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 uppercase'>
    <i className="fa-solid fa-file-pdf text-xl cursor-pointer"></i>
    </td>
           
        </tr>
        
    </table>

        </div>
        <RightInfo/>
      </div>   
      <Footer/>
    </div>
  )
}

export default Syllabus