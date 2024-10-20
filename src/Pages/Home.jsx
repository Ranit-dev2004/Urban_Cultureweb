import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Collecttions from '../components/Collecttions'
import BestSelling from '../components/BestSelling'
import Newarrival from '../components/Newarrival'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Collecttions/>
        <BestSelling/>
        <Newarrival/>
        <Footer/>
    </div>
  )
}

export default Home