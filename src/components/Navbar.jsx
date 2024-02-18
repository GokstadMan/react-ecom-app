import React, { useContext } from 'react';
import{ Link } from "react-router-dom";
import CartContext from './Context/CartContext';


function Navbar() {

  const[cart,setCart] = useContext(CartContext);

  return (
    <nav className='navbar text-white text-xl bg-violet-800 p-6'>
      <ul className='flex gap-6 '>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/product/:id" >ProductPage</Link></li>
        <li><Link to="/cart">Cart({cart.length})</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
