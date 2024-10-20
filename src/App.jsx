import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  SignIn  from './Pages/SignIn';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Cheakout from './Pages/Cheakout';

const App = () => {
  return (
    <div className=' w-screen h-screen  '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<Signup/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Cheakout' element={<Cheakout/>}/>
      </Routes>
    </div>
  );
}

export default App;
