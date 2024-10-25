import React from 'react';
import { assets } from '../assets/assets';

const Newarrival = () => {
  return (
    <div className='flex flex-col items-center p-12 bg-white'>
      <div className='flex justify-between items-center w-4/5 mb-8'>
        <h2 className='text-5xl font-extrabold text-black tracking-wide'>New Arrivals</h2>
        <button className='bg-black text-white py-2 px-8 rounded-full hover:bg-gray-800 transition duration-300 shadow-md'>
          View All
        </button>
      </div>

      <div className='relative bg-black text-white p-8 w-4/5 rounded-xl flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-12'>
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center opacity-50 pointer-events-none">
          <img src={assets.Ellipse} className='w-[800px] h-[400px]' alt="background-ellipse" />
        </div>
        <div className='relative mb-8'>
          <img src={assets.Discover} className='w-fit max-h-[350px] mx-auto object-cover' alt='JBL Boombox' />
        </div>
        <div className='absolute top-20 left-20'>
  <h3 className='text-4xl font-bold text-white'>Discover Your</h3>
  <p className='text-5xl font-bold text-white flex items-center'>
    <span>
      <img src={assets.Wave} alt="Wave" className='inline-block mr-2' />
    </span>
    Live Free
  </p>
  <button className='mt-10 px-16 py-3 bg-transparent text-2xl text-white border border-white rounded-full shadow-lg hover:bg-gray-200 hover:text-black transition duration-300'>
  Shop now!!
</button>
</div>

      </div>

      <div className='grid grid-cols-2 gap-8 w-4/5'>
        {renderProductCard(assets.tshirt, 'PlayStation 5', 'Black and White version of the PS5 coming out on sale.')}
        {renderProductCard(assets.octshirt, "Women's Collections", 'Featured women collections that give you another vibe.')}
        {renderProductCard(assets.speakers, 'Speakers', 'Amazon wireless speakers.')}
        {renderProductCard(assets.perfume, 'Perfume', 'GUCCI INTENSE OUD EDP')}
      </div>

      <div className='flex justify-around w-4/5 mt-16'>
        {renderFeature(assets.freeDeliveryIcon, 'Free and Fast Delivery')}
        {renderFeature(assets.customerServiceIcon, '24/7 Customer Service')}
        {renderFeature(assets.moneyBackIcon, 'Money Back Guarantee')}
      </div>
    </div>
  );
};
const renderProductCard = (imgSrc, title, description) => (
  <div className='bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative'>
    <img src={imgSrc} alt={title} className='w-auto h-auto max-w-full max-h-[220px] mx-auto object-contain mb-4' />
    <h4 className='text-2xl font-semibold text-white mb-2'>{title}</h4>
    <p className='text-sm text-gray-300 mb-4'>{description}</p>
    <button className='bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-sm'>
      Shop Now
    </button>
  </div>
);
const renderFeature = (iconSrc, text) => (
  <div className='flex flex-col items-center'>
    <img src={iconSrc} alt={text} className='w-24 h-24 mb-5' />
    <p className='text-xl font-medium text-black'>{text}</p>
  </div>
);

export default Newarrival;
