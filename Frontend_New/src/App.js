import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';

function App() {
  return (
    <div className="App">
           
      <BrowserRouter>
      
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory category='mens'/>}/>
            <Route path='/womens' element={<ShopCategory category='womens'/>}/>
            <Route path='/kids' element={<ShopCategory category='kids'/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/:product_id' element={<Product/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
      
      </BrowserRouter>
      
     

    </div>
  );
}

export default App;
