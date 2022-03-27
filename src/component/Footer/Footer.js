import React from "react";
import './Footer.css'
import { BsFacebook,BsTwitter } from "react-icons/bs";
import {FaLinkedinIn } from "react-icons/fa";
import {AiFillInstagram } from "react-icons/ai";




const Footer = () => {
    return (
        <div className="footer">
            <img src="Logo.png" alt="" />
            {/* <FontAwesomeIcon icon={SocialMediaIconsReact}></FontAwesomeIcon> */}
            <div className="social-icons">
                <BsFacebook className="icon"/>
                <BsTwitter className="icon"/>
                <FaLinkedinIn className="icon"/>
                <AiFillInstagram className="icon"/>
            </div>
            <p>Copyright © 2022 Football</p>
        </div>
    )
}
export default Footer;