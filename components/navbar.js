import React from 'react'
import {useRouter} from "next/router";

const Navbar = () => {

    const router=useRouter()
    
  return (
    <div className="flex flex-row bg-green-700 text-white border-t-4 border-yellow-300">
    <p className="mx-5 text-lg border-r-[0.1px] border-white pr-6 py-2 cursor-pointer hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/")}}>Home</p>
    <p className="mx-5 text-lg border-r-[0.1px] border-white pr-6 py-2 cursor-pointer hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/aboutDepartment")}}>About the Department</p>
    <p className="mx-5 text-lg border-r-[0.1px] border-white pr-6 py-2 cursor-pointer hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/aboutInstitute")}}>About the Institute</p>
    <p className="mx-5 text-lg border-r-[0.1px] border-white pr-6 py-2 cursor-pointer hover:text-yellow-300 duration-1000" onClick={()=>{router.push("/contact")}}>Contacts</p>
  </div>
  )
}

export default Navbar