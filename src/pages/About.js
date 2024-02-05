import React from 'react';
import Aboutimage from"../images/about.jpg"

function About() {
  return (
    <div>
      <h1 className='text-6xl'>About</h1>
      <img src={Aboutimage} alt="about" />
    </div>
  )
}

export default About
