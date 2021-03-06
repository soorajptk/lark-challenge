import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './images/logo.svg'
const Navbar = () => {
  return (
      <nav className='nav'> 
       <div className='nav-center'>
      <div className="nav-header">
        <img src={logo} className='nav-logo' alt="" />
        <button className='btn toggle-btn' ><FaBars /></button>
      </div>
     <ul className='nav-links'>
    <li ><button className='link-btn'>products</button></li>
    <li ><button className='link-btn'>developers</button></li>
    <li ><button className='link-btn'>company</button></li>
     </ul>
     <button className='btn signin-btn'>signin</button>
    </div>

      </nav>
      )
};

export default Navbar;
