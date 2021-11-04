import React, { useState,useRef,useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/images/cubicleLogo.svg'


const Navbar = ({timeline}) => {
    
    let logoRef = useRef(null)
    let menuItemsRef = useRef(null)
    let menuBtnsRef = useRef(null)
    let menuBarRef = useRef(null)
    let hamburgerRef = useRef(null)
    const [show, setShow] = useState(false)
    const toggleMenu = () => {
        setShow(!show)
    }
    const animations = ()=>{
        timeline.from(logoRef,{
            duration:1,
            opacity:0,
            y:-100
        })
        timeline.from(menuItemsRef,{
            duration:1,
            opacity:0,
            y:-100
        },"-=.5")
        timeline.from(menuBtnsRef,{
            duration:1,
            opacity:0,
            y:-100
        },"-=.5")
        // timeline.from(menuBarRef,{
        //     duration:1,
        //     opacity:0,
        //     y:-100
        // },"-=.5")
        // timeline.from(hamburgerRef,{
        //     duration:0.5,
        //     opacity:1,
        //     y:100
        // },)
    }
    useEffect(()=>{
        animations()
    },[])
    return (
        <div className="navbar_container">
            <div className="navbar_list">
                <div className="navbar_items">
                    <img src={logo} alt="logo" className="logo" ref={el => logoRef = el}/>
                    <ul ref={el => menuItemsRef = el}>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Resources</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                </div>
                <div className="navbar_btns" ref={el => menuBtnsRef = el}>
                    <button className="signin">Sign in</button>
                    <button className="free">Try it for free</button>
                </div>
                <div className={show ? "menu is-active" : "menu"} onClick={toggleMenu} id="mobile_menu">
                    <div className="bar_items" ref={el => menuBarRef = el}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            {/* hamburger menu */}
            <div className={show ? "hamburger_container active" : "hamburger_container"} ref={el => hamburgerRef = el}>
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
