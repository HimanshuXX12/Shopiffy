import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slidebar from './Components/Slidebar/Slidebar';
import Admin from './Pages/Admin/Admin';
import { Route,Routes } from 'react-router';
import Addproduct from './Components/Addproduct/Addproduct';
import Listproduct from './Components/Listproduct/Listproduct';
function App() {
  return (
    <div className="App">
     <Admin/>
     
    </div>
  );
}

export default App;
