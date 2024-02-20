import React from 'react';
import NotHere from"../images/nothing here.gif";

function NotFound() {
  return (
    <div>
      <h1 className='text-4xl text-center text-white bg-gray-700 p-6'>This page doesn't exist!</h1>
      <img src={NotHere} alt="notfound-pic" />
    </div>
  )
}

export default NotFound
