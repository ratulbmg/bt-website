import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"


const AboutDepartment=()=>{

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
          <p className="text-4xl font-semibold text-gray-500 text-center mb-12">About The Department</p>
          <div className="mb-10"> 
            <p className="text-[13px] font-bold mb-3">Department Of Biotechnology</p>
            <ul className="ml-8 list-disc">
                <li className="text-[13px]">The Department of Electronics & Communication Engineering was established in 1998. National Board of Accreditation (NBA) accredited it in 2004 and subsequently in 2007. It has intake capacity of 120 B.Tech. It also offers M.Tech. in Microelectronics and VLSI Design since 2005 with intake capacity 36 students. The department has several well equipped laboratories for the students as well as for researchers. It has a departmental Library, which contains books, more than 500 titles.</li>
            </ul>
          </div>
          <div className="mb-10">
            <p className="text-[13px] font-bold mb-3">Vision</p>
            <ul className="ml-8 list-disc">
                <li className="text-[13px]">To produce dynamic human resources of global standards by imparting quality teaching, carrying out research and technology development in the emerging areas of Electronics & Communication Engineering.</li>
            </ul>
          </div>
          <div className="mb-10">
            <p className="text-[13px] font-bold mb-3">Mission</p>
            <ul className="ml-8 list-disc">
                <li className="text-[13px]">To produce electronics and communication engineers having strong theoretical foundation, good design experience and exposure to research and technology development in frontier areas of electronics and communication engineering.</li>
                <li className="text-[13px]">To produce electronics and communication engineers having strong theoretical foundation, good design experience and exposure to research and technology development in frontier areas of electronics and communication engineering.</li>
                <li className="text-[13px]">To produce electronics and communication engineers having strong theoretical foundation, good design experience and exposure to research and technology development in frontier areas of electronics and communication engineering.</li>
            </ul>
          </div>
          <div className="mb-10">
            <p className="text-[13px] font-bold mb-3">Program Educational Objectives (PEOs)</p>
            <ul className="ml-8 list-disc">
                <li className="text-[13px]"><span className="font-bold">PEO-1:</span> To equip graduates with strong foundation in Electronics and Communication Engineering with an objective of being real time problem solvers.</li>
                <li className="text-[13px]"><span className="font-bold">PEO-2:</span> To equip graduates with strong foundation in Electronics and Communication Engineering with an objective of being real time problem solvers.</li>
                <li className="text-[13px]"><span className="font-bold">PEO-3:</span> To equip graduates with strong foundation in Electronics and Communication Engineering with an objective of being real time problem solvers.</li>
            </ul>
          </div>
        </div>
        <RightInfo/>
      </div>   
      <Footer/>
    </div>
  )
}

export default AboutDepartment