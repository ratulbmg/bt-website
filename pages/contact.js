import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"


const Contact=()=>{

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
        <div className="w-[40%]">
          <p className="text-4xl font-semibold text-gray-500 text-center mb-12">Contact</p>
          <p className="text-[13px]">Department of Electronics & Communication Engineering</p>
          <p className="text-[13px]">Haldia Institute of Technology</p>
          <p className="text-[13px]">I.C.A.R.E Complex, H.I.T Campus</p>
          <p className="text-[13px]">Hatiberia, PO-HIT</p>
          <p className="text-[13px]">Dist: Midnapore(E), West Bengal, India.</p>
          <p className="text-[13px]">PIN : 721657</p>
          <p className="text-[13px] my-3"><span className="font-bold">Email</span> : abc@xyz.com</p>
          <p className="text-[13px] my-3"><span className="font-bold">Tel</span> : 03224-250900 Extn:229</p>
          <p className="text-[13px] my-3"><span className="font-bold">Fax</span> : 03224-252800/ 253062</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.0435798460613!2d88.07181513791961!3d22.050878261951436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0bd9fd882f3%3A0x4082411651320d42!2sBiotechnology%20Department!5e0!3m2!1sen!2sin!4v1673988974579!5m2!1sen!2sin" width="550" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <RightInfo/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Contact