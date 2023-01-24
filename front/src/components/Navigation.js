import React from 'react';
import {  Link, useNavigate } from "react-router-dom";

const Navbar= () =>{
  const navigate = useNavigate
  const logout =()=>{
    localStorage.clear();
    navigate('/')
  }
  return (
  
  <div className='navbar'>
    <div className='links'>
     <Link to="/cars">Dealership deals</Link>
      <Link to="/special">Exotic Cars</Link>
      <Link onClick={logout}to="/">Logout</Link>  
  </div>
  </div>
  );
}
export default Navbar;