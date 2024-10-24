import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-8 lg:py-16 bg-[#F2F0F1]'>
      <div className='lg:w-1/2 w-full text-center lg:text-left'>
        <h1 className="text-3xl ml-10 lg:text-5xl font-bold text-black leading-tight animate-fadeInSlideUp">
          Unlock Your
        </h1>
        <span className="text-3xl ml-10 lg:text-5xl font-bold text-black leading-tight animate-fadeInSlideUp delay-300">
          Cosmic
        </span>
        <img 
          src={assets.Swag} 
          alt="Swag"
          className="h-5 lg:h-11 w-auto ml-2 lg:ml-56 -mt-2 lg:-mt-10 animate-fadeInSlideUp delay-500" 
        />
        <p className="mt-4 ml-14 text-base lg:text-lg text-gray-600 animate-fadeInSlideUp delay-700">
          At Jodiac, we offer stylish apparel to elevate your everyday look. From comfy cotton tees and trendy oversized shirts to classic polos, our collection ensures you stay effortlessly cool while showcasing your unique cosmic style.
        </p>
        <button className="mt-8 ml-14 bg-black text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-lg transform transition-transform hover:scale-105 duration-300">
          Shop Now
        </button>
      </div>

      <div className="lg:w-1/3 -rotate-12 w-full flex justify-center relative mt-8 lg:mt-0">
        <img
          src={assets.BannerImg}
          alt="Product Display"
          className="object-contain w-5/6 lg:w-full max-w-md mr-60 lg:max-w-lg animate-fadeInSlideUp delay-900"
        />
        <img 
          src={assets.Star}
          alt="Star"
          className="absolute lg:mr-32 top-20 right-0 w-8 lg:w-12 h-8 lg:h-12 transform translate-x-4 lg:translate-x-8 -translate-y-8 lg:-translate-y-16 animate-rotateStar"
        />
        <img 
          src={assets.Star}
          alt="Star"
          className="absolute bottom-0 right-48 w-5 lg:w-8 h-5 lg:h-8 transform -translate-y-6 lg:-translate-y-12 -translate-x-2 lg:-translate-x-4 animate-rotateStar delay-300"
        />
      </div>
    </div>
  );
}

export default Banner;
