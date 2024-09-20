import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const CURDTable = () => {
    const [data, setData] = useState([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);

    const [newData, setNewData] = useState({ name: "", email: "" });
    const [editData, setEditData] = useState({ id: null, name: "", email: "" });
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle input changes
    const handleChange = (e) => {
        if (isEditing) {
            setEditData({ ...editData, [e.target.name]: e.target.value });
        } else {
            setNewData({ ...newData, [e.target.name]: e.target.value });
        }
    };

    // Function to add data
    const handleAdd = () => {
        if (newData.name.trim() && newData.email.trim()) {
            setData([...data, { ...newData, id: data.length + 1 }]);
            setNewData({ name: "", email: "" });
        }
    };

    // Function to start editing a row
    const handleEdit = (item) => {
        setEditData(item);
        setIsEditing(true);
    };

    // Function to update the data
    const handleUpdate = () => {
        setData(data.map(item => item.id === editData.id ? editData : item));
        setIsEditing(false);
        setEditData({ id: null, name: "", email: "" });
    };

    // Function to delete a row
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
                                {isEditing && editData.id === item.id ? (
                                    <>
                                        <td>{item.id}</td>
                                        <td>
                                            <input
                                                type="text"
                                                name="name"
                                                value={editData.name}
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="email"
                                                name="email"
                                                value={editData.email}
                                                onChange={handleChange}
                                            />
                                        </td>
                                        <td>
                                            <button onClick={handleUpdate}>Save</button>
                                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={() => handleEdit(item)}>Edit</button>
                                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-25 p-5 m-5'>
                <h3>Add</h3>
                <form className=''>
                    <input
                        className='form-control'
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newData.name}
                        onChange={handleChange}
                    />
                    <input
                        className='form-control'
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={newData.email}
                        onChange={handleChange}
                    />
                </form>
                <button className="btn" onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
};

export default CURDTable;
