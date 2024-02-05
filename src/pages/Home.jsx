import React from 'react'
import Homeimage from '../images/home.jpg'

 function Home() {
  return (
    <div>
      <h1 className='text-6xl'>Home</h1>
      <img src={Homeimage} alt="home" />
    </div>
  )
}

export default Home;
