import React, { useState, useEffect } from 'react';
import { EmployeeData } from './EmployeeData';
import "bootstrap/dist/css/bootstrap.min.css";

const Table = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        setData(EmployeeData);
    }, []);

    const handleEdit = (id) => {
        const editData = data.find((item) => item.id === id);
        if (editData) {
            setIsUpdate(true);
            setCurrentId(id);
            setName(editData.name);
            setEmail(editData.email);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        const newObject = {
            id: data.length + 1,
            name: name,
            email: email,
        };
        setData([...data, newObject]);
        handleClear();
    };

    const handleUpdate = () => {
        const updatedData = data.map((item) =>
            item.id === currentId ? { ...item, name: name, email: email } : item
        );
        setData(updatedData);
        handleClear();
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setIsUpdate(false);
        setCurrentId(null);
    };

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div className='d-flex flex-row'>
            <div className='w-75 p-5 m-5'>
                <table className='table'>
                    <thead className='thead text-center bg-dark'>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-25 p-5 m-5'>
                <h3 className='m-3'>{isUpdate ? "Update" : "Add"}</h3>
                <form>
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
                </form>
                <div>
                    {isUpdate ? (
                        <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
                    ) : (
                        <button className='btn btn-primary' onClick={handleSave}>Save</button>
                    )}
                    <button className='btn btn-danger' onClick={handleClear}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default Table;
