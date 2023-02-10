import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Donation from '../Components/Donation'
// import Categories from '../Components/Categories'
import Mission from '../Components/Mission'
import Gallery from '../Components/Gallery'
import Tab from '../Components/Tab'
// import Why from '../Components/Why'
import Faqsec from '../Components/Faqsec'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Donation/>
    {/* <Categories/> */}
    <Mission/>
    <Gallery/>
    <Tab/>
    {/* <Why/> */}
    <Faqsec/>
    <Footer/>
    </>
  )
}

export default Home