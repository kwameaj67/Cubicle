import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/cubicleLogo.svg'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const toggleMenu = () => {
        setShow(!show)
    }
    return (
        <div className="navbar_container">
            <div className="navbar_list">
                <div className="navbar_items">
                    <img src={logo} alt="logo" className="logo" />
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
                <div className={show ? "menu is-active" : "menu"} onClick={toggleMenu} id="mobile_menu">
                    <div className="bar_items">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            {/* hamburger menu */}
            <div className={show ? "hamburger_container active" : "hamburger_container"}>
                <ul className="hamburger_links">
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Resources</a></li>
                    <li><a href="/">Pricing</a></li>
                </ul>
                <div className="hamburger_buttons">
                    <button className="signin">Sign in</button>
                    <button className="free">Try it for free</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
