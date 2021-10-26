import React from 'react'
import './footer.css'
import logo from '../../assets/images/cubicleLogo.svg'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="footer_items">
                <div className="footer_itembox">
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Resources</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Customers</a></li>
                        <li><a href="/">Careers</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Private Policy</a></li>
                        <li><a href="/">Data Agreement</a></li>
                    </ul>
                    <ul>
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
