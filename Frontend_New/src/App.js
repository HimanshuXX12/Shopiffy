import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Login from './Pages/Login';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

import SignUp from './Pages/SignUp';
function App() {
    
    
  return (

    <div className="App">
           
      <BrowserRouter>
         
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
            <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
            <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
            <Route path='/:product_id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            {/* <Route path='/cart' element={<Cart/>}/> */}
        </Routes>
      
      </BrowserRouter>
      
     

    </div>
  );
}

export default App;
