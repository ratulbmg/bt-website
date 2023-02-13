import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const ViewAndDeletePDFs = () => {

    const [btech,setBtech]=useState([])
    const [mtech,setMtech]=useState([])
    const [phd,setPhd]=useState([])

    const getBtech=()=>{
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'https://plum-inquisitive-camel.cyclic.app/pdf/btech',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setBtech(response.data.year)
          })
          .catch(function (error) {
            //console.log(error);
          });     
    }

    const getMtech=()=>{
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'https://plum-inquisitive-camel.cyclic.app/pdf/mtech',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setMtech(response.data.year)
          })
          .catch(function (error) {
            //console.log(error);
          });     
    }

    const getPhd=()=>{
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'https://plum-inquisitive-camel.cyclic.app/pdf/phd',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setPhd(response.data.year)
          })
          .catch(function (error) {
            //console.log(error);
          });     
    }

    useEffect(()=>{

      toast.info("Fetching PDFs")

        getBtech()
        getMtech()
        getPhd()
    },[])

    const refresh=()=>{

      toast.info("Refrshing")

      getBtech()
      getMtech()
      getPhd()
    }

    const deletePDF=async (course,fileId,dataId)=>{

      var config = {
        method: 'delete',
      maxBodyLength: Infinity,
        url: 'https://plum-inquisitive-camel.cyclic.app/files/del/'+fileId,
        headers: { }
      };
      
      await axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        toast.success("Deleted File")
      })
      .catch(function (error) {
        //console.log(error);
        toast.error("Some error occurred")
      });


      var config2 = {
        method: 'delete',
      maxBodyLength: Infinity,
        url: 'https://plum-inquisitive-camel.cyclic.app/pdf/'+course+'/del/'+dataId,
        headers: { }
      };
      
      await axios(config2)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        toast.success("Deleted Data")
      })
      .catch(function (error) {
        //console.log(error);
        toast.error("Some error occurred")
      });


    }

  return (
    <div className='w-full'>
    <p className='text-center text-2xl text-gray-500'>View and Delete PDFs   <span className='text-white bg-yellow-300 px-3 py-2 rounded-lg text-base ml-10 cursor-pointer' onClick={refresh}>Refresh</span> </p>
    <div className='w-[80%] mx-auto flex justify-between items-start mt-5'>
        <div className='w-1/3'>
            <p className='text-lg text-center text-gray-400 mb-10'>B.Tech Data</p>
            <ul>
                {
                    btech.map((item,index)=>{
                        return(
                            <li className='my-3 flex justify-center items-center' key={index}><a href={"https://plum-inquisitive-camel.cyclic.app/files/image/"+item.filename} className="text-left text-xl mr-5" target="_blank" rel="noreferrer">Batch Of {item.year}</a><button onClick={async ()=>{await deletePDF("btech",item.fileid,item._id);refresh()}} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button></li>
                        )
                    })
                }
                {
                  btech.length==0&&<p className='text-center text-red-500'>No Data Found</p>
                }
            </ul>
        </div>
        <div className='w-1/3'>
            <p className='text-lg text-center text-gray-400 mb-10'>M.Tech Data</p>
            <ul>
                {
                    mtech.map((item,index)=>{
                        return(
                            <li className='my-3 flex justify-center items-center' key={index}><a href={"https://plum-inquisitive-camel.cyclic.app/files/image/"+item.filename} className="text-left text-xl mr-5" target="_blank" rel="noreferrer">Batch Of {item.year}</a><button onClick={async ()=>{await deletePDF("mtech",item.fileid,item._id);refresh()}} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button></li>
                        )
                    })
                }
                {
                  mtech.length==0&&<p className='text-center text-red-500'>No Data Found</p>
                }
            </ul>
        </div>
        <div className='w-1/3'>
            <p className='text-lg text-center text-gray-400 mb-10'>PHD Data</p>
            <ul>
                {
                    phd.map((item,index)=>{
                        return(
                            <li className='my-3 flex justify-center items-center' key={index}><a href={"https://plum-inquisitive-camel.cyclic.app/files/image/"+item.filename} className="text-left text-xl mr-5" target="_blank" rel="noreferrer">Batch Of {item.year}</a><button onClick={async ()=>{await deletePDF("phd",item.fileid,item._id);refresh()}} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button></li>
                        )
                    })
                }
                  {
                  phd.length==0&&<p className='text-center text-red-500'>No Data Found</p>
                }
            </ul>
        </div>
    </div>
</div>
  )
}

export default ViewAndDeletePDFs