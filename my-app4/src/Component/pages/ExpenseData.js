
 import React, { useState } from 'react'
 import Data from './MediaApi.js'
 import Data2 from './MediaApi2.js'
 import Card from './Card'
 import Card2 from './Card2'
 import './Style2.css'
 const ExpenseData = () => {

    const [menuData , setData]= useState(Data);
    const [menuData2 , setData2]= useState(Data2);

    return(


        <>
        <div className='time'><span>Today</span></div>
        
       <Card   menuData = {menuData} />
       <div className='time'><span>Sunday , 31 March 2002 </span></div>
      
       <Card2   menuData2 = {menuData2} />

        </>
    )
 }
 
 export default ExpenseData;
 