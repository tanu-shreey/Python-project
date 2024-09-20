import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

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

const SimpleDataTable = () => {
  const initialData = [
    { "id": 1, "first_name": "Humfrid", "last_name": "Larwood", "city": "Tatebayashi", "salary": '40,00,000' },
    { "id": 2, "first_name": "Darlleen", "last_name": "Peegrem", "city": "Tianning", "salary": '50,00,000' },
    { "id": 3, "first_name": "Alana", "last_name": "Francisco", "city": "Orléans", "salary": '40,00,000' },
    { "id": 4, "first_name": "Glyn", "last_name": "Littledike", "city": "Rio Real", "salary": '90,00,000' },
    { "id": 5, "first_name": "Camile", "last_name": "Cano", "city": "Tampa", "salary": '80,00,000' },
    { "id": 6, "first_name": "Ara", "last_name": "Oneil", "city": "Calçada", "salary": '90,00,000' },
    { "id": 7, "first_name": "Kimberlyn", "last_name": "Gilfoy", "city": "Suresnes", "salary": '40,00,000' },
    { "id": 8, "first_name": "Magdalene", "last_name": "Kunzel", "city": "Kalloní", "salary": '30,00,000' },
    { "id": 9, "first_name": "Rosalyn", "last_name": "Dobsons", "city": "Nakło nad Notecią", "salary": '10,00,000' },
    { "id": 10, "first_name": "Kiley", "last_name": "Rimes", "city": "Nanxi", "salary": '60,00,000' },
  ];

  // State for table data and selected rows
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

   const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      const allIds = data.map(row => row.id);
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
   };

    const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
    };

    const deleteSelectedRows = () => {
    setData(data.filter(row => !selectedRows.includes(row.id)));
    setSelectedRows([]);
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


    const sortedData = getSortedData(data, sortConfig);


    const filteredData = sortedData.filter((row) =>
    row.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.salary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
   
      <div className='m-5'>
        <div className='input-group d-flex flex-row'>
          <div className='form-outline ms-5'>
            <input
              type='search'
              id='form1'
              className='form-control'
              placeholder='Search'
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button type="button" className="btn border">
            <IoMdSearch />
          </button>

         
          <div className='ms-3'>
            <select className='form-select' onChange={(e) => handleSort(e.target.value)}>
              <option className='small' value="first_name">Sort By : Name</option>
              <option  className='small'value="salary">Sort By : salary</option>
              <option  className='small'value="city">Sort By : city</option>
            </select>
          </div>

          <div className='d-flex flex-row'>
            <div className='float-right ms-3'>
              <button
                className="btn"
                onClick={deleteSelectedRows}
                disabled={selectedRows.length === 0}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>

        <table className="table text-center w-75 ms-5 border">
          <thead className='small'>
            <tr>
              <th scope='col'>
                <input
                  type='checkbox'
                  onChange={handleSelectAllChange}
                  checked={selectedRows.length === data.length && data.length > 0}
                />
              </th>
              <th scope='col' onClick={() => handleSort('id')}>Id</th>
              <th scope='col' onClick={() => handleSort('first_name')}>First Name</th>
              <th scope='col' onClick={() => handleSort('last_name')}>Last Name</th>
              <th scope='col' onClick={() => handleSort('city')}>City</th>
              <th scope='col' onClick={() => handleSort('salary')}>Salary</th>
            </tr>
          </thead>
          
          <tbody className='small'>
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
                <td>{row.id}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.city}</td>
                <td>{row.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleDataTable;
