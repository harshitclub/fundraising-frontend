import React from 'react'
import '../Styles/Components/Categories.css'

const Categories = () => {
  return (
    <>
    <div className='categories-container'>
            <h3>Categories</h3>
        <div className='category'>
            <div className='c-content'>
                <h4>Medical</h4>
            </div>
            <div className='c-content'>
                <h4>NGO</h4>
            </div>
            <div className='c-content'>
                <h4>Natural Disaster</h4>
            </div>
            <div className='c-content'>
                <h4>Others</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories