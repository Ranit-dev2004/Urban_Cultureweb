// Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Collecttions from '../components/Collecttions';
import BestSelling from '../components/BestSelling';
import Newarrival from '../components/Newarrival';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <div className="relative z-10">
        <Navbar />
      </div>
      <Banner />
      <div id="category">
        <Collecttions />
      </div>
      <div id="best-selling">
        <BestSelling />
      </div>

      <Newarrival />
      <Footer />
    </div>
  );
};

export default Home;
