import React,{useEffect} from 'react'
import './footer.css'
import logo from '../../assets/images/cubicleLogo.svg'

import aos from 'aos'
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(()=>{
        aos.init()
    },[])
    return (
        <div className="footer_container">
            <div data-aos="fade-up" data-aos-duration="1000" className="logo_container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="footer_items">
                <div className="footer_itembox">
                    <ul data-aos="fade-up" data-aos-duration="1000">
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Resources</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                    <ul data-aos="fade-up" data-aos-duration="1200">
                        <li><a href="/">About</a></li>
                        <li><a href="/">Customers</a></li>
                        <li><a href="/">Careers</a></li>
                    </ul>
                    <ul data-aos="fade-up" data-aos-duration="1400">
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Private Policy</a></li>
                        <li><a href="/">Data Agreement</a></li>
                    </ul>
                    <ul data-aos="fade-up" data-aos-duration="1600">
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">LinkedIn</a></li>
                        <li><a href="/">Facebook</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <p>Ⓒ 2021 All rights reserved. Designed by Isaac Quainoo. Reach me via email: isaacquainoo95@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
