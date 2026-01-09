import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import './Info.css'
const About = () => {
  return (
    <div className="about">
      <div className="card">
        <img src={img1} alt="" />
        <h1>Let's create the amazing "STUFF"</h1>
      </div>
      <div className="card">
        <img src={img2} alt="" />
        <h1>Oh Really ? Ok Let's do it and "FUCK IT"</h1>
      </div>
    </div>
  )
}

export default About