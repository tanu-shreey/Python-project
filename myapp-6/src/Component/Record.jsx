import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Record = ({data}) => {



  return (
     <div className='m-50 '>
    <table className='table text-center p-10'>

     <thead className='thead table-dark bg-dark '>
              
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>City</th>
     </thead>

    <tbody>
       {data.map(item=>(
        <tr>
          
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.city}</td>
        </tr>
      ))}
    </tbody>


    </table>
    </div>
  )
}

export default Record