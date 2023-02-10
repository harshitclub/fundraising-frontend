import React from 'react'
import '../Styles/Components/Why.css'

const Why = () => {
  return (
    <>
    <div className='why-container'>
      <h3>Why Choose Sadhana?</h3>
      <div className='flex-items1'>
        <div className='flex-item'>
        <h6>Fastest growing fundraising platform in India</h6>
        </div>
        <div className='flex-item'>
        <h6>Global reach for extensive fundraising</h6>
        </div>
        <div className='flex-item'>
        <h6>Accepting donations via all popular payment instruments</h6>
        </div>
      </div>

      <div className='flex-items1'>
        <div className='flex-item'>
        <h6>A panel of dedicated professionals</h6>
        </div>
        <div className='flex-item'>
        <h6>No excessive documentation</h6>
        </div>
        <div className='flex-item'>
        <h6>0 hassle withdrawal</h6>
        </div>
      </div>
    </div>
    </>
  )
}

export default Why