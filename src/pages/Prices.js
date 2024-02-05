import React from 'react';
import PriceImage from"../images/prices.jpg";

function Prices() {
  return (
    <div>
      <h1 className='text-6xl'>Prices</h1>
      <img src={PriceImage} alt="prices" />
    </div>
  )
}

export default Prices
