import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import {Navbar} from './Navbar';
import {Dashboard} from '../pages/Dashboard';
import {Expense} from '../pages/Expense';
import {Wallets} from '../pages/Wallets'
import  {Summary}  from '../pages/Summary'
import {Login} from '../pages/Login'
import {Setting} from '../pages/Setting'

const RouteNav = () => {
  return (
   
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
      
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Expense' element={<Expense />} />
          <Route path='/Wallets' element={<Wallets />} />
          <Route path='/Summary' element={<Summary />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Setting' element={<Setting />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default RouteNav;

