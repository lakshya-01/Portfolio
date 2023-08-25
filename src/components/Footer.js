import React from 'react'
import "./FooterStyles.css"
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaInstagram, FaInstagramSquare, FaWhatsapp, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact' className="footer bg-black">
        <div className=" text-center text-5xl pt-5 pb-5">
            <h1> <a href="#home">Contact Us</a></h1>
        </div>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white" ,marginRight: "2rem"}}/>
                    <p>IIT Hyderabad , India</p>
                </div>
                <div className="Contact">
                    <FaPhone size={20} style={{color: "white" ,marginRight: "2rem"}}/>
                    <h4>8302859401</h4>
                </div>
                <div className="Mail">
                    <FaMailBulk size={20} style={{color: "white" ,marginRight: "2rem"}}/>
                    <h4>lakshyamukhija9@gmail.com</h4>
                </div>
            </div>
            <div className=' text-xl p-8'>
               <p className=' pb-4 text-slate-400'>Hope you are having a  lovely day</p>
               <p className=' text-slate-400'>This website is Created by  Lakshya Mukhija</p>
               <p className=' text-slate-400'>Using <span className=' text-2xl text-sky-400'>ReactJs</span></p>
                <div className="social flex pt-3">
                    <a className="linkedin cursor-pointer" href='https://www.linkedin.com/in/lakshya-mukhija-31409023b/'>
                        <FaLinkedin href='' size={25} style={{color: "white" ,marginRight: "2rem"}}/>
                    </a>
                    <a className="insta cursor-pointer " href='https://www.instagram.com/_lakshya01/'>
                        <FaInstagram href='' size={25} style={{color: "white" ,marginRight: "2rem"}}/>
                    </a>
                    <a className="insta cursor-pointer " href=''>
                        <FaGithub href='' size={25} style={{color: "white" ,marginRight: "2rem"}}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;