import React from 'react'
import Image from 'next/image'

import user from "../assets/user.png"

const TableData = () => {
  return (
    <tr className='border-b border-gray-500'>
    <td className='border-r border-gray-500 py-5'>
        <div className='h-[80px] w-[80px] mx-auto mb-3'>
            <Image src={user} alt=""/>
        </div>
        <p className='text-[12px] text-center font-semibold'>
            Prof. Abc mno xyz , HOD
        </p>
    </td>
    <td className='text-[12px] text-center border-r border-gray-500 px-3'>
        Professor , HOD
    </td>
    <td className='text-[12px] text-center border-r border-gray-500'>
        Abc Optic Electronics and Wireless Coomuniations
    </td>
    <td>
        <p className='text-[12px] text-center'>abc@xyz.com</p>
        <p className='text-[12px] text-center'>1234567890</p>
    </td>
</tr>
  )
}

export default TableData