import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {

  const router=useRouter();

  return (
    <footer className="p-4 bg-[#1b3058] text-white border-t-4 border-yellow-300 shadow md:flex md:items-center md:justify-between md:p-6">
    <span className="text-sm sm:text-center">© 2023 <a href="https://hithaldia.ac.in/" className="hover:text-yellow-300 duration-1000">Haldia Institute Of Technology</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:text-yellow-300 md:mr-6" onClick={()=>{router.push("/aboutDepartment")}}>About</a>
        </li>
        <li>
            <a href="#" className="hover:text-yellow-300" onClick={()=>{router.push("/contact")}}>Contact</a>
        </li>
    </ul>
</footer>
  )
}

export default Footer