import React from 'react';
import { assets } from '../assets/assets';

const Newarrival = () => {
  return (
    <div className='ml-32'>
      {/* Section Title */}
      <div className='flex justify-between items-center w-5/6 mb-8'>
        <h2 className='text-4xl font-bold'>New Arrivals</h2>
        <button className='bg-black text-white p-3 rounded-full hover:bg-gray-800 transition duration-300'>
          View All
        </button>
      </div>

      {/* Main Box for JBL Speaker */}
      <div className='relative bg-black text-white p-8 w-5/6 rounded-lg flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        {/* Background Ellipse */}
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <img src={assets.Ellipse} className='opacity-90 w-[900px] h-[500px]' alt="background-ellipse" />
        </div>
        
        {/* JBL Speaker Image */}
        <div className='relative'>
          <img src={assets.jbl} className='w-[400px] h-[200px] mx-auto object-contain' alt='JBL Boombox' />
        </div>
        
        {/* Text Overlay */}
        <div className='absolute top-16 left-16'>
          <h3 className='text-3xl font-bold'>Enhance Your Music Experience</h3>
          <button className='mt-8 px-6 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition duration-300'>
            Buy Now
          </button>
        </div>
      </div>

      {/* Product Section with Two Columns */}
      <div className='grid grid-cols-2 gap-6 w-5/6 mt-8'>
        {/* Left Column - PlayStation 5 and Women's Collections */}
        <div className='grid grid-rows-2 gap-6'>
          {/* PlayStation 5 */}
          <div className='bg-black p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative'>
            <img src={assets.ps5} alt='PlayStation 5' className='w-full h-[200px] object-contain mb-4' />
            <h4 className=' flex text-xl font-semibold absolute bottom-24 left-4 text-white'>PlayStation 5</h4>
            <p className='text-sm text-white absolute bottom-20 left-4'>Black and White version of the PS5 coming out on sale.</p>
            <button className='absolute bottom-4 left-4 bg-transparent border border-white px-3 py-1 text-white rounded-full hover:bg-white hover:text-black transition duration-300'>
              Shop Now
            </button>
          </div>

          {/* Women's Collections */}
          <div className='bg-black p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative'>
            <img src={assets.womenCollection} alt="Women's Collections" className='w-full h-[200px] object-contain mb-4' />
            <h4 className='text-xl font-semibold absolute bottom-24 left-4 text-white'>Women's Collections</h4>
            <p className='text-sm text-white absolute bottom-20 left-4'>Featured women collections that give you another vibe.</p>
            <button className='absolute bottom-4 left-4 bg-transparent border border-white px-3 py-1 text-white rounded-full hover:bg-white hover:text-black transition duration-300'>
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Column - Speakers and Perfume */}
        <div className='grid grid-rows-2 gap-6'>
          {/* Speakers */}
          <div className='bg-black p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative'>
            <img src={assets.speakers} alt='Speakers' className='w-full h-[200px] object-contain mb-4' />
            <h4 className='text-xl font-semibold absolute bottom-24 left-4 text-white'>Speakers</h4>
            <p className='text-sm text-white absolute bottom-20 left-4'>Amazon wireless speakers.</p>
            <button className='absolute bottom-4 left-4 bg-transparent border border-white px-3 py-1 text-white rounded-full hover:bg-white hover:text-black transition duration-300'>
              Shop Now
            </button>
          </div>

          {/* Perfume */}
          <div className='bg-black p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative'>
            <img src={assets.perfume} alt='Perfume' className='w-full h-[200px] object-contain mb-4' />
            <h4 className='text-xl font-semibold absolute bottom-24 left-4 text-white'>Perfume</h4>
            <p className='text-sm text-white absolute bottom-20 left-4'>GUCCI INTENSE OUD EDP</p>
            <button className='absolute bottom-4 left-4 bg-transparent border border-white px-3 py-1 text-white rounded-full hover:bg-white hover:text-black transition duration-300'>
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer: Delivery Information */}
      <div className='flex justify-around w-5/6 mt-12'>
        <div className='flex flex-col items-center'>
          <img src={assets.freeDeliveryIcon} alt='Free Delivery' className='w-20 h-20'/>
          <p className='mt-5 text-2xl'>Free and Fast Delivery</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={assets.customerServiceIcon} alt='Customer Service' className='w-20 h-20'/>
          <p className='mt-5 text-2xl'>24/7 Customer Service</p>
        </div>
        <div className='flex flex-col items-center'>
          <img src={assets.moneyBackIcon} alt='Money Back' className='w-20 h-20'/>
          <p className='mt-5 text-2xl'>Money Back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
