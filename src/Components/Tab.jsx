import React from 'react'
import '../Styles/Components/Tab.css'
import icon1 from '../assets/dove.png'
import icon2 from '../assets/hearts.png'
import icon3 from '../assets/lifesaver.png'
import icon4 from '../assets/user.png'

const Tab = () => {
  return (
    <>
    <div className='tab-container'>
        <div className='tab-content'>
            <div className='content'>
                <div>
            <img src={icon1} className='icon' alt=''/> 
            </div>
            <div>
                <p>Inspiration</p>
                </div>
            </div>
            <div className='content'>
            <div>
            <img src={icon4} className='icon' alt=''/> 
            </div>
            <div>
                <p>Volunteering</p>
                </div>
            </div>
            <div className='content'>
            <div>
            <img src={icon2} className='icon' alt=''/> 
            </div>
            <div>
                <p>Donations</p>
                </div>
            </div>
            <div className='content'>
            <div>
            <img src={icon3} className='icon' alt=''/>
            </div>
            <div>
                <p>Support</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tab