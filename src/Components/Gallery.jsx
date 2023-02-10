import React from 'react'
import '../Styles/Components/Gallery.css'
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'

const Gallery = () => {
  return (
    <>
    <div className='gallery-container'>
        <div className='gallery'>
            <div className='g-img'>
                <img src={gallery1} alt=''/>
                </div>
            <div className='g-img'>
                <img src={gallery2} alt=''/>
                </div>
            <div className='g-img'>
                <img src={gallery3} alt=''/>
                </div>
            <div className='g-img'>
                <img src={gallery4} alt=''/>
                </div>
        </div>
    </div>
    </>
  )
}

export default Gallery