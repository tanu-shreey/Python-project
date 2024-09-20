//Right One
import React, { useState, useEffect } from 'react';
import { EmployeeData } from './EmployeeData';
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import { FaPenSquare } from "react-icons/fa";
import swal from 'sweetalert';

const Table = () => {
    const [data, setData] = useState(['']);
    const [name, setName] = useState(['']);
    const [email, setEmail] = useState(['']);
    const [phoneNo, setPhoneNo] = useState(['']);
    const [DOB, setDOB] = useState(['']);
    const [Address, setAddress] = useState(['']);

    const [isUpdate, setIsUpdate] = useState(false);
    const [currentId, setCurrentId] = useState(null);
  
    useEffect(() => { setData(EmployeeData) }, []);
   

    const handleEdit = (id) => {
        const editData = data.filter((item) => item.id === id);
        if (editData !== undefined) {
            setIsUpdate(true);
            setCurrentId(id);
            setName(editData[0].name);
            setEmail(editData[0].email);
            setPhoneNo(editData[0].phoneNo);
            setDOB(editData[0].DOB)
            setAddress(editData[0].Address);

        }
    };


    const handleSave = (e) => {
        e.preventDefault();
        const newData = [...data]
        const newObject = {
            id: EmployeeData.length + 1,
            name: name,
            email: email,
            phoneNo:phoneNo,
            DOB:DOB,
            Address:Address
        }
        newData.push(newObject);
        setData(newData);
        handleClear();
       
        const notify =()=>swal('Done','','success');
        notify();
    };



    const handleUpdate = () => {
        const updatedData = data.map((item) =>
            item.id === currentId ? { ...item, name: name, email: email, phoneNo:phoneNo,DOB:DOB,Address:Address} : item
        );
        setData(updatedData);
        handleClear();
    };


    const handleClear = () => {
        setName('');
        setEmail('');
        setPhoneNo('')
        setDOB('');
        setAddress('');
        setIsUpdate(false);
    };

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    return (

        <div className='d-flex flex-row'>
            <div className='w-75 p-5 m-5'>
                <table className='table'>
                    <thead className='thead text-center '>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>PhoneNo</th>
                            <th scope='col'>DOB</th>
                            <th scope='col'>Address</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNo}</td>
                                <td>{item.DOB}</td>
                                <td>{item.Address}</td>

                                <td><button className='btn' onClick={() => handleEdit(item.id)}><i><FaPenSquare style={{color:'#007bff', fontSize:'25px'}} /></i></button>
                                    <button className='btn' onClick={() => handleDelete(item.id)}><i><MdDelete  style={{color:'#dc3545', fontSize:'25px'}}   /></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-25 p-5 m-5'>
                {/* <h3 className='m-3'>Add</h3> */}
                <h3 className='m-3'>{isUpdate ? "Update" : "Add"}</h3>
                <form className=''>
                    <input
                        className='form-control m-2'
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        className='form-control m-2'
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}

                    />
                      <input
                        className='form-control m-2'
                        type="text"
                        name="PhoneNo"
                        placeholder="Mobile No:"
                        onChange={(e) => setPhoneNo(e.target.value)}
                        value={phoneNo}
                    />
                     <input
                        className='form-control m-2'
                        type="text"
                        name="DOB"
                        placeholder="D/O/B"
                        onChange={(e) => setDOB(e.target.value)}
                        value={DOB}
                    />
                     <input
                        className='form-control m-2'
                        type="text"
                        name="name"
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={Address}
                    />
                    
                </form>
                <div>
                    {

                        isUpdate ?
                            <button className='btn btn-primary' onClick={() => handleUpdate()}>Update</button>
                            :

                            <button className='btn btn-success' onClick={(e) => handleSave(e)}  >Save</button>
                    }
                    &nbsp;<button className='btn btn-danger' onClick={() => handleClear()}>Clear</button>
                </div>
            </div>

        </div>
    )
}
export default Table
