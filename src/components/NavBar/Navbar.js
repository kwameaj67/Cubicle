import React from 'react'
import './navbar.css'
import logo from '../../assets/images/cubicleLogo.svg'

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_list">
                <div className="navbar_items">
                    <img src={logo} alt="logo" className="logo"/>
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Resources</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                </div>
                <div className="navbar_btns">
                    <button className="signin">Sign in</button>
                    <button className="free">Try it for free</button>
                </div>   
                <div className="menu_container">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div> 
            </div>
        </div>
    )
}

export default Navbar
