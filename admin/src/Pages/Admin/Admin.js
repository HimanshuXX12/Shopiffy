import React from 'react'
import './Admin.css'
import Navbar from '../../Components/Navbar/Navbar'
import Slidebar from '../../Components/Slidebar/Slidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import Listproduct from '../../Components/Listproduct/Listproduct'
function Admin() {
  return (
    <div>
         <Navbar/>
      <div className='slider'>
        <Slidebar className='item_1'/>
        <Routes className='item_2'>
             <Route path='/addproduct' element={<Addproduct/>}/>
             <Route path='/listproduct' element={<Listproduct/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default Admin
