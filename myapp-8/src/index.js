import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './Table';
// import CURDTable from './CURDTable';
// import EditableTable from './EditTable';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table />
    {/* <CURDTable />
    <EditableTable /> */}
  </React.StrictMode>
);


