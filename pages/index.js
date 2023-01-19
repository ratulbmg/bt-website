import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"
import bt from "../assets/bt.png"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"


const Index=()=>{

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
        <div className="w-[40%] text-center">
          <p className="text-4xl font-semibold text-gray-500">Department Of Biotechnology</p>
          <p className="font-bold my-3">(NBA Accredited)</p>
          <p className="text-xl my-3">(Under the School of Chemical and Biotechnology)</p>
          <a href="https://hithaldia.ac.in/" target={"_blank"} className="text-xl text-blue-600 my-3" rel="noreferrer">Haldia Institute Of Technology</a>
          <div className="w-2/3 mx-auto flex flex-row justify-between my-10">
            <div className="text-left">
              <p className="text-[12px] font-bold">Head Of Department : </p>
              <p className="text-[12px] font-bold">Phone : </p>
              <p className="text-[12px] font-bold">Email : </p>
            </div>
            <div className="text-left">
              <p className="text-[12px] font-bold">Abc Xyz</p>
              <p className="text-[12px]">1234567890</p>
              <p className="text-[12px]">abc@xyz.com</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={bt} alt="BT"/>
          </div>
        </div>
        <RightInfo/>
      </div>
      <Footer/>
    </div>
  )
}

export default Index