import React from "react";
import './Header.css'
import logo from '../../Images/banner.png'
const Header = () => {
    return (
        <div className="header">
                <div>
                <h1 className="text-title">Conmebol Copa America 2021</h1>
                <button>Watch Live</button>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            
        </div>
    )
}
export default Header;