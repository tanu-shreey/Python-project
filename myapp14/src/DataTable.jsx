import React, { useEffect, useState } from 'react';
import { JsonData } from './Services/JsonData';
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from 'react-bootstrap/Spinner';
import Pagination from './Pagination';

// Sorting function
 const getSortedData = (data, sortConfig) => {
    if (!sortConfig.key) {
        return data;
    }

    return data.slice().sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });
   };

    const DataTable = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordPerPage] = useState(10);
    const [selectedRow, setSelectedRow] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Corrected to useState
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await JsonData();
                setData(result.users);
                console.log(result.users);
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const indexofLastRecord = currentPage * recordPerPage;
    const indexofFirstRecord = indexofLastRecord - recordPerPage;


    const filteredData = data.filter(user =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const CurrentPageRecord = filteredData.slice(indexofFirstRecord, indexofLastRecord);
    const npages = Math.ceil(filteredData.length / recordPerPage);

    const handleCheckBoxChange = (id) => {
        if (selectedRow.includes(id)) {
            setSelectedRow(selectedRow.filter((rowId) => rowId !== id));
        } else {
            setSelectedRow([...selectedRow, id]);
        }
    };

    const handleSelectAllChange = (e) => {
        if (e.target.checked) {
            const allId = CurrentPageRecord.map((row) => row.id);
            setSelectedRow(allId);
        } else {
            setSelectedRow([]);
        }
    };

    const deleteSelectedRow = () => {
        setData(CurrentPageRecord.filter(row => !selectedRow.includes(row.id)));
        setSelectedRow([]);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = getSortedData(CurrentPageRecord, sortConfig);

    return (
        <div className="m-5">
            <div className='d-flex flex-row mb-3'>
                <select className='form-select' onChange={(e) => handleSort(e.target.value)}>
                    <option value="id">Sort By: ID</option>
                    <option value="firstName">Sort By: Name</option>
                    <option value="role">Sort By: Role</option>
                </select>
              
                <div className='input-group ml-3'>
                    <input
                        type='search'
                        placeholder='Search'
                        className='form-control'
                        value={searchTerm} 
                        onChange={handleSearch} 
                    />
                </div>
                <button className='btn border ml-3' onClick={deleteSelectedRow}>
                    Delete
                </button>
            </div>

            <table className="table text-center table-bordered table-hover table-responsive-sm small">
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onClick={handleSelectAllChange}
                                checked={
                                    selectedRow.length === CurrentPageRecord.length &&
                                    CurrentPageRecord.length > 0
                                }
                            />
                        </th>
                        <th scope="col" onClick={() => handleSort('id')}>Id</th>
                        <th scope="col" onClick={() => handleSort('firstName')}>FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">BirthDate</th>
                        <th scope="col">BloodGroup</th>
                        <th scope="col">Address</th>
                        <th scope="col" onClick={() => handleSort('role')}>Role</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="12" className="text-center">
                                <Spinner animation="border" variant="primary" />
                                <p className="mt-2">Loading...</p>
                            </td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan="12" className="text-center">
                                <p>{error}</p>
                            </td>
                        </tr>
                    ) : (
                        sortedData.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRow.includes(user.id)}
                                        onChange={() => handleCheckBoxChange(user.id)}
                                    />
                                </td>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.birthDate}</td>
                                <td>{user.bloodGroup}</td>
                                <td>
                                    {user.address
                                        ? `${user.address.street || ''}, ${user.address.city || ''}, ${user.address.state || ''}, ${user.address.postalCode || ''}`
                                        : 'No address'}
                                </td>
                                <td>{user.role}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <Pagination
                npages={npages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default DataTable;
