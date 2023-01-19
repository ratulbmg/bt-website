import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"


const Placements=()=>{

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
          <p className="text-4xl font-semibold text-gray-500 text-center mb-12">Departmental Placement Records :</p>

          <table className='table-auto border border-black w-full'>
        <tr className='border border-black bg-green-300 h-[40px]'>
        <th className='text-[12px] text-center border-r border-gray-500 px-3 text-white'>
            Academic Session
    </th>
    <th className='text-[12px] text-centeruppercase text-white'>
        Placement Data 
    </th> 
    </tr>

        <tr className='border border-black odd:bg-blue-300 even:bg-blue-200 h-[40px]'>
        <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2017-2021
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 uppercase'>
        <div className="w-[100px] mx-auto my-3">
        <ul className="list-disc text-left" style={{listStylePosition:"inside"}}>
        <li className="font-semibold">Infosys : 22</li>
        <li className="font-semibold">TCS : 22</li>
        <li className="font-semibold">CTS : 22</li>
        <li className="font-semibold">Wipro : 22</li>
        <li className="font-semibold">PWC : 22</li>
     </ul>
        </div>
    </td>
           
        </tr>
        <tr className='border border-black odd:bg-blue-300 even:bg-blue-200 h-[40px]'>
        <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2018-2022
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 uppercase'>
    <div className="w-[100px] mx-auto my-3">
        <ul className="list-disc text-left" style={{listStylePosition:"inside"}}>
        <li className="font-semibold">Infosys : 22</li>
        <li className="font-semibold">TCS : 22</li>
        <li className="font-semibold">CTS : 22</li>
        <li className="font-semibold">Wipro : 22</li>
        <li className="font-semibold">PWC : 22</li>
     </ul>
        </div>
    </td>
           
        </tr>
        <tr className='border border-black odd:bg-blue-300 even:bg-blue-200 h-[40px]'>
        <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2017-2021
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 uppercase'>
        <div className="w-[100px] mx-auto my-3">
        <ul className="list-disc text-left" style={{listStylePosition:"inside"}}>
        <li className="font-semibold">Infosys : 22</li>
        <li className="font-semibold">TCS : 22</li>
        <li className="font-semibold">CTS : 22</li>
        <li className="font-semibold">Wipro : 22</li>
        <li className="font-semibold">PWC : 22</li>
     </ul>
        </div>
    </td>
           
        </tr>
        <tr className='border border-black odd:bg-blue-300 even:bg-blue-200 h-[40px]'>
        <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2018-2022
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 uppercase'>
    <div className="w-[100px] mx-auto my-3">
        <ul className="list-disc text-left" style={{listStylePosition:"inside"}}>
        <li className="font-semibold">Infosys : 22</li>
        <li className="font-semibold">TCS : 22</li>
        <li className="font-semibold">CTS : 22</li>
        <li className="font-semibold">Wipro : 22</li>
        <li className="font-semibold">PWC : 22</li>
     </ul>
        </div>
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

export default Placements