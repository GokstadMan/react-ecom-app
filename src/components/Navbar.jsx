import React from 'react';
import{ Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar text-white text-xl bg-rose-500 p-4'>
      <ul className='flex gap-6 '>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/prices">Prices</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
