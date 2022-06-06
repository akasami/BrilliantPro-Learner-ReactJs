import React from 'react'
import Navbar from './components/navbar/Navbar.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp.js';
import SecureNavigation from './components/secureNavigation/secureNavigation.js';
import Login from './components/login/login.js';
import Home from '../src/components/pages/Home/index';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
       
      <Navbar /> {/*Links*/}
      <Routes >
        
       
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<div>Add Product</div>} />
        <Route path="/update" element={<div>Update Product</div>} />
        <Route path="/logout" element={<div>Logout</div>} />
       
        
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />


      </Routes> 

    </BrowserRouter>

    </div>
  );
}

export default App;
