import React from 'react'
import TableData from './tableData'


const Table = () => {
  return (
    <table className='table-auto border border-black'>
        <tr className='border border-black'>
            <th className='text-[15px] border-r border-gray-500'>
              Name
            </th>
            <th className='text-[15px] border-r border-gray-500'>
              Designation
            </th>
            <th className='text-[15px] border-r border-gray-500'>
              Specialization/Area Of Interest
            </th>
            <th className='text-[15px]'>
              Email / Contact No.
            </th>
        </tr>
        <TableData/>
        <TableData/>
        <TableData/>
        <TableData/>
        <TableData/>
       
    </table>
  )
}

export default Table