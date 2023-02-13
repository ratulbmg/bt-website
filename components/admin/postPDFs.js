import React,{useState,useEffect} from 'react'
import {toast} from "react-toastify"

const PostPDFs = () => {

  const [year,setYear]=useState("2023")
  const [file,setFile]=useState(null)
  const [filename,setFilename]=useState("")
  const [loading,setLoading]=useState(false)

  const uploadFiles=(c)=>{
    setLoading(true)

    if(!file)
    {
      setLoading(false)
      toast.error("Select a PDF to upload")
      return
    }
    
    var formdata = new FormData();
formdata.append("year", year);
formdata.append("file", file, filename);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://plum-inquisitive-camel.cyclic.app/pdf/"+c+"/upload", requestOptions)
  .then(response => response.text())
  .then((result) =>{ 
    //console.log(result)
    toast.success("File Uploaded Successfully")
    setFile(null)
    setFilename("")
    setLoading(false)
  })
  .catch((error) =>{ 
    //console.log('error', error)
    toast.error("Some Error Occurred")
    setLoading(false)
});
  }

  return (
    <div className='w-full'>
    <p className='text-center text-2xl text-gray-500'>Post PDFs</p>
    <div className='w-[40%] mx-auto mt-2'>
    <p className='text-lg'>Year</p>
    <input type={"text"} className="border border-black px-2 py-1 rounded" value={year} onChange={(e)=>{setYear(e.target.value)}}/>
    <p className='text-lg mt-5'>Select File</p>
    <input type={"file"} value={filename} onChange={(e)=>{setFile(e.target.files[0]);setFilename(e.target.value)}}/>
    <div className='flex justify-between items-center mt-5'>
      <p onClick={()=>{uploadFiles("btech")}} className='text-white bg-green-400 font-semibold px-3 py-2 rounded-lg cursor-pointer border border-green-400 hover:bg-white hover:text-green-400'>{loading?"Uploading":"Upload to B.tech"}</p>
      <p onClick={()=>{uploadFiles("mtech")}} className='text-white bg-green-400 font-semibold px-3 py-2 rounded-lg cursor-pointer border border-green-400 hover:bg-white hover:text-green-400'>{loading?"Uploading":"Upload to M.tech"}</p>
      <p onClick={()=>{uploadFiles("phd")}} className='text-white bg-green-400 font-semibold px-3 py-2 rounded-lg cursor-pointer border border-green-400 hover:bg-white hover:text-green-400'>{loading?"Uploading":"Upload to PHD"}</p>
    </div>
    </div>
    </div>
  )
}

export default PostPDFs