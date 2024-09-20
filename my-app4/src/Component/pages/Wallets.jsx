import React from 'react'
import './Style2.css'
import { IconName } from "react-icons/fc";
import { RiMoneyPoundBoxFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { DiGoogleAnalytics } from "react-icons/di";
import data from './tableData.json'



export const Wallets = () => {
  const DisplayData = data.map((info) => {
    return (
      <tr>
        <td>{info.TransactionId}</td>
        <td>{info.TransactionDate}</td>
        <td>{info.Time}</td>
        <td>{info.TransactionStatus}</td>
        <td>{info.TransactionMoney}</td>

      </tr>
    )
  })
  return (


    <div className='Data-Container2'>
      <div className='wallet-container  border  w-100 h-100'>
        <div >
          <div className='d-flex flex-row justify-content-around align-content-center  '>

            <div className=' rounded-4 w-25  p-3 m-3   ' style={{ backgroundColor: '	#e4f8e4' }} >
              <div className=' d-flex flex-row  justify-content-between  align-content-center  ' >
                <div> <RiMoneyPoundBoxFill fontSize={35} /></div>
                <div className='float-end'><BsThreeDotsVertical fontSize={25} /></div></div>
              <div> $1200  </div>
              <div> 45% This week </div>
            </div>

            <div className=' rounded-4 w-25 p-3 m-3 ' style={{ backgroundColor: '	#ecf2ff' }} >
              <div className=' d-flex flex-row  justify-content-between  align-content-center  ' >
                <div> <DiGoogleAnalytics fontSize={35} /></div>
                <div className='float-end'><BsThreeDotsVertical fontSize={25} /></div></div>
              <div> $1200  </div>
              <div> 45% This week </div>
            </div>

            <div className='rounded-4 w-25 p-3 m-3 ' style={{ backgroundColor: '	#fff8fa' }} >
              <div className=' d-flex flex-row justify-content-between  align-content-center   ' >
                <div> <RiMoneyDollarBoxFill fontSize={35} /></div>
                <div className='float-end'><BsThreeDotsVertical fontSize={25} /></div></div>
              <div> $1200  </div>
              <div> 45% This week </div>
            </div>

          </div>
        </div>

        <div className=' mt-3 ms-5 me-5 border  overflow-y-scroll  h-50 w-50  position-absolute' >
          <table className='table'>
            <thead className='table-dark sticky-top'>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Date</th>
                <th scope='col'>Time</th>
                <th scope='col'>Status</th>
                <th scope='col'>Value</th>
              </tr>
            </thead>
            <tbody  >
              {DisplayData}
            </tbody>
          </table>
        </div>
      </div>

    </div>

  )
}

export default Wallets
