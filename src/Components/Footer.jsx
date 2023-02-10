import React from 'react'
import '../Styles/Components/Footer.css'
import logo from '../assets/logo.png'
import visa from '../assets/visa.png'
import master from '../assets/master.png'
import paytm from '../assets/paytm.png'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div className='inner-links'>
        <div className='f-links'>
            <div className='page-links'>
                <ul>
                    <h4>Site Links</h4>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>        
                    <li><a href="/privacy-policy">Privacy & Policy</a></li>
                    <li><a href="/disclaimer">Disclaimer</a></li>
                    <li><a href="/term-and-conditions">Term and Conditions</a></li>

                </ul>
            </div>
        </div>
        <div className='f-links'>
        <div className='page-links'><ul>
                <h4>Categories</h4>
                <li><a href='/demo'>Natural Disaster</a></li>
                <li><a href='/demo'>Medical</a></li>
                <li><a href='/demo'>NGO</a></li>
                <li>Samuhik Vivah</li>
                <li>Others</li>
                <li>&nbsp;</li>
            </ul></div>

        
        </div>
        <div className='f-links'>
        <div className='page-links'>
            <ul>
                <h4>Social</h4>
                <li><a href='/demo'>Facebook</a></li>
                <li><a href='/demo'>LinkedIn</a></li>
                <li><a href='/demo'>Twitter</a></li>
                <li><a href='/demo'>Instagram</a></li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
            </ul>
        </div>
            </div>
            <div className='footer-add'>
        <div className='add-content'>
           <h4>Office Address</h4>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, eos. Voluptatibus natus nihil temporibus</p>
           <h5>Supported By</h5>
           <div className="p-icons"><img src={visa} alt=''/>
           <img src={master} alt=''/>
           <img src={paytm} alt=''/></div>
           <p>&nbsp;</p>
        </div>
            </div>
        <div className='footer-logo'>
            <img src={logo} alt='logo'/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
        </div>
        <hr className='hr1'/>
    <div className='copyright-container'>
        <p>© Copyright 2022 | Sadhana Foundation India Pvt. Ltd</p>
    </div>
    </div>
    
    </>
  )
}

export default Footer