import React from 'react'
import '../Styles/Components/Contact.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='contact-container'>
    <div className='contact-l'>
        <div className='contact-form'>
            <h2>Contact</h2>
            <form >
                <div>
                    <input className='input-f' type='text' placeholder='Your Name' required/>
                </div>
                <div>
                    <input className='input-f' type='email' placeholder='Your Email' required/>
                </div>
                <div>
                    <input className='input-f' type='number' placeholder='Your Phone' required/>
                </div>
                <div>
                    <textarea className='input-f' type='text' placeholder='Write Your Message' rows="4" cols="50" required/>
                </div>
                <div>
                    <input className='input-s' type='submit' value='Submit'/>
                </div>
            </form>
        </div>
    </div>
    <div className='contact-r'>
    <h1>Left Container</h1>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact