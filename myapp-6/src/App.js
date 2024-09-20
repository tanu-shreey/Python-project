
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Pagination from './Component/Pagination'
import Record from './Component/Record'
 

const App = () => {
const[data ,setdata] = useState([]);
const [loading,setLoading]= useState(true);
const [ currentPage, setCurrentPage] =useState(1);
const[recordPerPage] = useState(10);

useEffect(()=>{
 axios.get('data.json').then(res=>{
     setdata(res.data);
     setLoading(false);

 })
   .catch(()=>{

    alert('thier was an error while retriving an data')
   })

},[])


 const indexofLastRecord = currentPage * recordPerPage;
 const indexofFirstRecord = indexofLastRecord - recordPerPage;
 const CurrentPageRecord = data.slice(indexofFirstRecord,indexofLastRecord);
 const  npages = Math.ceil(data.length/recordPerPage);


  return (
    <div className='container mt-5'>
       <Record data= {CurrentPageRecord} />
    <Pagination npages ={npages}
    currentPage ={currentPage}
    setCurrentPage ={setCurrentPage}
    />
    </div>
  )
}
export default App
