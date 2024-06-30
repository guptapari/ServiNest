import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.sample_icon} alt="" />
                    <p>dummy text</p>
                    <div className="footer-social-icons">
                        <img src={assets.instagram} alt="" />
                        <img src={assets.facebook} alt="" />
                        <img src={assets.twitter} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9646x-xxx73</li>
                        <li>contact@servinest.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © ServiNest.com - All Rights Reserved</p>
        </div>
    )
}

export default Footer