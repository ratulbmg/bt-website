import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"
import Table from "@/components/table"


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
          <p className="text-4xl font-semibold text-gray-500 text-center mb-12">Teacher And General Assistance</p>
          <Table/>

        </div>
        <RightInfo/>
      </div>   
      <Footer/>
    </div>
  )
}

export default Faculty