import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Components/StartF.css'

const StartF = () => {
  return (
    <>
    <Navbar/>
    <div className='start-f-container'>
        <div className='start-f-inner-container'>
        <div className='left-f-section'>
            <h2>demo content</h2>
        </div>
        <div className='right-f-section'>
        <div className='f-form'>
            <h2>Start Your Fundraising</h2>
            <form>
                <div>
                    <input className='s-input' placeholder='Your Name' type="text" required/>
                </div>
                <div>
                    <input className='s-input' placeholder='Your Email' type="text" required/>
                </div>
                <div>
                    <input className='s-input' placeholder='Your Phone' type="number" required/>
                </div>
                <div>
                    <textarea className='s-input text-a' placeholder='Your Address' type="text" rows="4" cols="50" required/>
                </div>
                <div>
                    <input className='s-input' placeholder='Your Adhar Number' type="number" required/>
                </div>
                <div>
                    <label className='s-label'>Your Adhar Card Photo</label><br/>
                    <input className='s-input' placeholder='Adhar Card Photo' type="file" required/>
                </div>
                <div>
                    <input className='s-input' placeholder='Your PAN Number' type="text" required/>
                </div>
                <div>
                    <label className='s-label'>Your PAN Card Photo</label><br/>
                    <input className='s-input' placeholder='Your PAN Number' type="file" required/>
                </div>
                <div>
                    <input className='s-input' placeholder='Fundraising Purpose' type="text" required/>
                </div>
                <div>
                    <input className='s-input' placeholder='Amount Your Want To Raise' type="number" required/>
                </div>
                <div>
                    <textarea className='s-input' placeholder='Your Story' type="text" rows="4" cols="50" required/>
                </div>
                <div>
                    <input className='s-submit' type='submit' value='Submit'/>
                </div>
            </form>
        </div>
        </div>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default StartF