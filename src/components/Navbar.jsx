import React from 'react';
import{ Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar text-white text-xl bg-violet-600 p-6'>
      <ul className='flex gap-6 '>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/products/:id">ProductId</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
