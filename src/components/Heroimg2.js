// import "./Heroimg2Styles.css"
import coding2 from "../assests/coding1.jpg"
import Myself from "../assests/Myself.jpg"
import React, { useState } from 'react'

const Heroimg2 = () => {
 
  return (
    <div id="about" className=" bg-black">

      <div className="hero">
        <h1 id="aboutme" className="text-center text-5xl p-7"> <a href="#home">About Me</a></h1>
        {/* <div className='mask'>
             <img className='intro-img' src={coding1} alt="IntroImg"/> 
        </div> */}
        <div className="flex flex-wrap md:flex flex-col md:justify-center md:items-center align-middle justify-between items-center" >
          <div className="right md:text-center rounded-full">
            <img className="myself h-72 mx-auto justify-end rounded-full border-8" src={Myself} alt="my-self"></img>
          </div>
          <button className="btn-light p-1 rounded" href="https://drive.google.com/drive/u/0/recent">Download CV</button>
          <div className="left text-4xl text-center mx-auto">
            <p>Hello, I'm Lakshya Mukhija. I'm currently studying at Indian Institute Of Technology Hyderabad. I have a keen interest in web dovelopment. I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js & Vue.Js And apart from Front-End, I have good knowledge in Back-End using PHP & MySQL and continuously engage in trying to extend my skills with new technology. . </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroimg2;