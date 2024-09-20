import React from 'react'

import Chart from './Chart'
import './Style2.css'
import SiderBar from '../layout/SiderBar'
import ExpenseData from './ExpenseData'
// import Navbar from '../layout/Navbar'
// import RouteNav from './RouteNav'
 export const Expense = () => {
  return (
<>
    {/* <div className='Home' > */}
      {/* <div className='navbar'>  <RouteNav /></div> */}
      <div className='Data-Container'>
        <div className='chart'  >
          <Chart />
          
          <div> <ExpenseData /></div>
          

        </div>
        
      
        
        <div className='sideBar'><SiderBar /></div>
      </div>
      
    {/* </div> */}
 </>

  )
}
export default Expense;
