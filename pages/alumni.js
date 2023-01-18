import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"

import user from "../assets/user.png"


const Faculty=()=>{

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
          <p className="text-4xl font-semibold text-gray-500 text-center mb-12">Alumni Of Biotechnology</p>
          <table className='table-auto border border-black mx-auto w-full'>

        <tr className='border border-black bg-blue-400'>
            <th className='text-[15px] border-r border-gray-500'>
              Name
            </th>
            <th className='text-[15px] border-r border-gray-500'>
              Batch
            </th>
            <th className='text-[15px] border-r border-gray-500'>
              Current Position
            </th>
        </tr>

        <tr className='border-b border-gray-500 odd:bg-blue-200 even:bg-blue-300'>
    <td className='border-r border-gray-500 py-5 px-3'>
        <div className='h-[80px] w-[80px] mx-auto mb-3'>
            <Image src={user} alt=""/>
        </div>
        <p className='text-[12px] text-center font-semibold'>
            Mr. Abcdefgh Xyz
        </p>
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2012-2016
    </td>
    <td className='text-[12px] text-center px-5'>
        Abc Optic Electronics and Wireless Coomuniations
    </td>
</tr>

<tr className='border-b border-gray-500 odd:bg-blue-200 even:bg-blue-300'>
    <td className='border-r border-gray-500 py-5 px-3'>
        <div className='h-[80px] w-[80px] mx-auto mb-3'>
            <Image src={user} alt=""/>
        </div>
        <p className='text-[12px] text-center font-semibold'>
            Mr. Abcdefgh Xyz
        </p>
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2012-2016
    </td>
    <td className='text-[12px] text-center px-5'>
        Abc Optic Electronics and Wireless Coomuniations
    </td>
</tr>


<tr className='border-b border-gray-500 odd:bg-blue-200 even:bg-blue-300'>
    <td className='border-r border-gray-500 py-5 px-3'>
        <div className='h-[80px] w-[80px] mx-auto mb-3'>
            <Image src={user} alt=""/>
        </div>
        <p className='text-[12px] text-center font-semibold'>
            Mr. Abcdefgh Xyz
        </p>
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2012-2016
    </td>
    <td className='text-[12px] text-center px-5'>
        Abc Optic Electronics and Wireless Coomuniations
    </td>
</tr>

<tr className='border-b border-gray-500 odd:bg-blue-200 even:bg-blue-300'>
    <td className='border-r border-gray-500 py-5 px-3'>
        <div className='h-[80px] w-[80px] mx-auto mb-3'>
            <Image src={user} alt=""/>
        </div>
        <p className='text-[12px] text-center font-semibold'>
            Mr. Abcdefgh Xyz
        </p>
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2012-2016
    </td>
    <td className='text-[12px] text-center px-5'>
        Abc Optic Electronics and Wireless Coomuniations
    </td>
</tr>

<tr className='border-b border-gray-500 odd:bg-blue-200 even:bg-blue-300'>
    <td className='border-r border-gray-500 py-5 px-3'>
        <div className='h-[80px] w-[80px] mx-auto mb-3'>
            <Image src={user} alt=""/>
        </div>
        <p className='text-[12px] text-center font-semibold'>
            Mr. Abcdefgh Xyz
        </p>
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        2012-2016
    </td>
    <td className='text-[12px] text-center px-5'>
        Abc Optic Electronics and Wireless Coomuniations
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

export default Faculty