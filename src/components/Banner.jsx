import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-8 lg:py-16 bg-[#F2F0F1]'>
      <div className='lg:w-1/2 w-full text-center lg:text-left'>
        <h1 className="text-3xl ml-10 lg:text-5xl font-bold text-black leading-tight">
          Game Changing Products - One Experience
        </h1>
        <p className="mt-4 ml-14 text-base lg:text-lg text-gray-600">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-8 ml-14 bg-black text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-lg">
          Shop Now
        </button>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center relative mt-8 lg:mt-0">
        <img
          src={assets.BannerImg}
          alt="Product Display"
          className="object-contain w-2/3 lg:w-auto max-w-xs lg:max-w-sm "
        />
        <img 
          src={assets.Star}
          alt="Star"
          className="absolute lg:mr-28 top-1/2 right-0 w-8 lg:w-12 h-8 lg:h-12 transform translate-x-4 lg:translate-x-8 -translate-y-8 lg:-translate-y-16"
        />
        <img 
          src={assets.Star}
          alt="Star"
          className="absolute bottom-0 left-1/4 w-5 lg:w-8 h-5 lg:h-8 transform -translate-y-6 lg:-translate-y-12 -translate-x-2 lg:-translate-x-4"
        />
      </div>
    </div>
  );
}

export default Banner;
