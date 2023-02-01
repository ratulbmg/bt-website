import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ViewAndDeletePDFs = () => {

    const [btech,setBtech]=useState([])
    const [mtech,setMtech]=useState([])
    const [phd,setPhd]=useState([])

    const getBtech=()=>{
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'https://plum-inquisitive-camel.cyclic.app/btech',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setBtech(response.data.year)
          })
          .catch(function (error) {
            console.log(error);
          });     
    }

    const getMtech=()=>{
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'https://plum-inquisitive-camel.cyclic.app/mtech',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setMtech(response.data.year)
          })
          .catch(function (error) {
            console.log(error);
          });     
    }

    const getPhd=()=>{
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'https://plum-inquisitive-camel.cyclic.app/phd',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setPhd(response.data.year)
          })
          .catch(function (error) {
            console.log(error);
          });     
    }

    useEffect(()=>{
        getBtech()
        getMtech()
        getPhd()
    },[])


  return (
    <div className='w-full'>
    <p className='text-center text-2xl text-gray-500'>View and Delete PDFs</p>
    <div className='w-[80%] mx-auto flex justify-between items-center'>
        <div className='w-1/3'>
            <p className='text-lg text-center text-gray-400'>B.Tech Data</p>
            <ul>
                {
                    btech.map((item,index)=>{
                        return(
                            <li className='my-3' key={index}><a href={"https://plum-inquisitive-camel.cyclic.app/image/"+item.filename} className="text-left" target="_blank" rel="noreferrer">Batch Of {item.year}</a><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button></li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
</div>
  )
}

export default ViewAndDeletePDFs