import React, { useState } from "react"
import Image from "next/image"
import logo from "../assets/logo.png"
import bt_logo from "../assets/bt_logo.png"

import AdminPanel from "@/components/adminPanel"

const Admin=()=>{

const [loggedIn,setLoggedIn]=useState(false)

return(
<div className="overflow-x-hidden">
  <div className="w-screen flex flex-row justify-evenly items-center py-4">
    <div className="w-[120px] h-[120px]">
      <Image src={logo} alt={"Logo"} />
    </div>
    <div>
      <h1 className="text-5xl text-center poppins">
        Department Of Biotechnology
      </h1>
      <h4 className="text-3xl text-center poppins">Haldia Institute Of Technology</h4>
    </div>
    <div className="w-[120px] h-[120px]">
      <Image src={bt_logo} alt={"BT_Logo"} />
    </div>
  </div>
 {!loggedIn?(<div className="flex items-center h-full">
    <div className="w-full max-w-sm m-auto mt-16">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={(e)=>{e.preventDefault();setLoggedIn(true)}}>
        <h2 className="text-lg font-medium mb-2 text-gray-700 text-center">
          Sign Up
        </h2>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2" for="username">
            Username
          </label>
          <input className="w-full border border-gray-400 p-2 rounded-lg" type="text" id="username" />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2" for="email">
            Email
          </label>
          <input className="w-full border border-gray-400 p-2 rounded-lg" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2" for="password">
            Password
          </label>
          <input className="w-full border border-gray-400 p-2 rounded-lg" type="password" id="password" />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>):<AdminPanel/>}
</div>
)
}

export default Admin