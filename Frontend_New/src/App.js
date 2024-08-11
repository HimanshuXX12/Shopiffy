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
import Orders from './Pages/Orders';
import Place_order from './Pages/Place_order';
import Single_Order from './Pages/Single_Order';
import LoginSignUp from './Pages/Login';
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
             <Route path='/orders' element={<Orders/>}/>
             <Route path='/order/:order_id' element={<Single_Order/>}/>
             <Route path='/place_order' element={<Place_order/>}/>

            {/* <Route path='/cart' element={<Cart/>}/> */}
        </Routes>
      
      </BrowserRouter>
      
     

    </div>
  );
}

export default App;
