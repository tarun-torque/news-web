import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Signup from './Components/Login_Signup/Signup';
import Login from './Components/Login_Signup/Login';
import AdminHome from './Components/Admin/AdminHome';

export default function BasicButtons() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<AdminHome />} />
       
         
    
      </Routes>
    </BrowserRouter>
    
  );
}
