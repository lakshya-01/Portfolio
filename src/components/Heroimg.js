import React from 'react'
import "./HeroimgStyles.css"
import coding1 from "../assests/coding1.jpg"

export default function Heroimg() {
  return (
    <div id='home' className='hero'>
      <div className='mask'>
        <img className='intro-img' src={coding1} alt="IntroImg" />
      </div>
      <div className='intro'>
        <h1>Lakshya Mukhija.</h1>
        {/* <p>Indian Institute Of Technology Hyderabad</p> */}
      </div>
    </div>
  )
}
