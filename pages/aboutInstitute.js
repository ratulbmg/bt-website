/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Image from "next/image"
import logo from "../assets/logo.png"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"

const AboutInstitute=()=>{

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
          <p className="text-4xl font-semibold text-gray-500 text-center mb-12">About The Institute</p>
          <p>
          <span className="font-bold">Haldia Institute of Technology (An Institute of ICARE, Haldia, Approved by AICTE, Accredited with 'A' grade by NAAC, Affiliated to <a href="http://makautexam.net/" className="text-blue-600" target={"_blank"} rel="noreferrer">MAKAUT</a>, WB) began its journey in the year 1996.</span> It is the first private and accredited academic institution catering technical education in West Bengal. The Institute is situated at Haldia – an industrial hub in Eastern India, located about 138 Km away from Kolkata. It is situated at the heart of the Haldia, which is a major port, and is encircled by several industries. The Institute is well connected to Kolkata and Kharagpur by rail and road. It has a sprawling campus of 49 acres of land. There are 12 B.Tech courses, along with 5 M.Tech, MCA, and MBA courses. It comprises of modern facilities like bank, departmental store, post office, medical store, restaurant etc. It has also a separate R & D building, central computing facility and a central library. Since inception, Haldia Institute of Technology is dedicated to the objectives of creating highly trained professional manpower in various disciplines of Engineering, Technology and Social Science. The Institute is also dedicated to the contribution of higher scientific research in Technology as well as in Applied Science and Social Science.
          <br/><a href="https://hithaldia.ac.in/" className="text-blue-600 text-[14px]" target={"_blank"} rel="noreferrer">To know more visit official website..</a>
          </p>
        </div>
        <RightInfo/>
      </div>
      
      <Footer/>

    </div>
  )
}

export default AboutInstitute