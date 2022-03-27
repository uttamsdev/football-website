import React from "react";
import './Header.css'
import logo from '../../Images/banner.png'
import { BsArrowRightShort } from 'react-icons/bs';
const Header = () => {
    return (
        <div className="header">
                <div>
                <h1 className="text-title">Conmebol Copa America 2021</h1>
                <button className="header-btn">Watch Live <BsArrowRightShort/></button>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            
        </div>
    )
}
export default Header;