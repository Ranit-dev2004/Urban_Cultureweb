import React from 'react';
import { assets } from '../assets/assets';

const Banner = ({ onShopNowClick }) => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-4 lg:py-8 bg-[#FFFFFF] h-[400px] lg:h-[550px]'>
      <div className='lg:w-1/2 w-full text-center lg:text-left'>
        <h1 className="text-[73px] ml-20 leading-[63px] font-extrabold text-black animate-fadeInSlideUp delay-300">
          Unlock Your
        </h1>
        <div className="flex items-center ml-20">
          <span className="text-[73px] leading-[63px] font-extrabold text-black animate-fadeInSlideUp delay-300">
            Cosmic
          </span>
          <img 
            src={assets.Swag} 
            alt="Swag"
            className="h-[63px] w-auto ml-4 -mb-5 animate-fadeInSlideUp delay-500" 
          />
        </div>

        <p className="mt-4 ml-20 text-base lg:text-lg text-gray-600 animate-fadeInSlideUp delay-700 max-h-[6rem] overflow-hidden">
          At Jodiac, we offer stylish apparel to elevate your everyday look. From comfy cotton tees and trendy oversized shirts to classic polos, our collection ensures you stay effortlessly cool while showcasing your unique cosmic style.
        </p>

        <button
          className="mt-8 ml-20 bg-black text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-lg transform transition-transform hover:scale-105 duration-300"
          onClick={onShopNowClick}
        >
          Shop Now
        </button>
      </div>

      <div className="lg:w-1/3 w-full flex justify-center relative mt-8 lg:mt-0">
        <img
          src={assets.BannerImg}
          alt="Product Display"
          className="object-contain w-full lg:w-[140%] max-w-[800px] mr-60 animate-fadeInSlideUp delay-900"
        />
        <img 
          src={assets.Star}
          alt="Star"
          className="absolute top-20 right-1/4 w-14 h-14 transform animate-rotateStar"
        />
        <img 
          src={assets.Star}
          alt="Star"
          className="absolute bottom-32 left-[-180px] w-18 h-18 transform animate-rotateStar"
        />
      </div>
    </div>
  );
}

export default Banner;
