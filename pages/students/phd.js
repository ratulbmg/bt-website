import React,{useState,useEffect} from "react"
import Image from "next/image"
import logo from "../../assets/logo.png"
import bt from "../../assets/bt.png"
import bt_logo from "../../assets/bt_logo.png"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quickLinks"
import RightInfo from "@/components/rightInfo"

import axios from "axios"


const PHD=()=>{

    const [students,setStudents]=useState([])
    const [loading,setLoading]=useState(false)

    const getStudents=()=>{
        setLoading(true)
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'https://plum-inquisitive-camel.cyclic.app/phd',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setStudents(response.data.year)
            setLoading(false)
          })
          .catch(function (error) {
            console.log(error);
            setLoading(false)
          });
          
    }

    useEffect(()=>{
        getStudents()
    },[])

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
       <div className="w-[120px] h-[120px]">
          <Image src={bt_logo} alt={"BT_Logo"}/>
        </div>
       
      </div>
      <Navbar/>
      <div className="w-[90%] mx-auto flex flex-row justify-between mt-10 mb-20">
        <QuickLinks/>      
        <div className="w-[40%]">
            <p className="text-4xl font-semibold text-gray-500 text-center mb-10">List Of M.Tech Students by Year</p>
            {students.length>0?(<ul className=" list-disc">
            {
                students.map((item,index)=>{
                    return(
                        <li key={index}><a href={"https://plum-inquisitive-camel.cyclic.app/image/"+item.filename} className="text-left text-xl my-2" target="_blank" rel="noreferrer">Batch Of {item.year}</a></li>

                    )
                })
            }
            </ul>):(<p className="text-lg text-center text-red-500">{loading?"Loading...":"No Data Found"}</p>)}
          
        </div>
        <RightInfo/>
      </div>
      <Footer/>
    </div>
  )
}

export default PHD