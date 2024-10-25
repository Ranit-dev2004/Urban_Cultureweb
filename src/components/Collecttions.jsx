import React from 'react';
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaCamera, FaHeadphonesAlt, FaGamepad } from 'react-icons/fa';

const Categories = () => {
  const handleCategoryClick = (category) => {
    console.log(`You clicked on ${category}`);
  };

  return (
    <div className="flex flex-col items-center w-full bg-white py-12">
      <div className="w-5/6">
        <h2 className="text-5xl font-bold mb-8 text-left">Categories</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-5/6">
        <div
          className="flex flex-col items-center justify-center border p-4 rounded-md cursor-pointer hover:bg-gray-100 transition"
          onClick={() => handleCategoryClick('Phones')}
        >
          <FaMobileAlt className="w-12 h-12 mb-2" />
          <span>Phones</span>
        </div>
        <div
          className="flex flex-col items-center justify-center border p-4 rounded-md cursor-pointer hover:bg-gray-100 transition"
          onClick={() => handleCategoryClick('Computers')}
        >
          <FaLaptop className="w-12 h-12 mb-2" />
          <span>Computers</span>
        </div>
        <div
          className="flex flex-col items-center justify-center border p-4 rounded-md cursor-pointer hover:bg-gray-100 transition"
          onClick={() => handleCategoryClick('SmartWatch')}
        >
          <FaTabletAlt className="w-12 h-12 mb-2" />
          <span>SmartWatch</span>
        </div>
        <div
          className="flex flex-col items-center justify-center border p-4 rounded-md cursor-pointer hover:bg-gray-100 transition"
          onClick={() => handleCategoryClick('Camera')}
        >
          <FaCamera className="w-12 h-12 mb-2" />
          <span>Camera</span>
        </div>
        <div
          className="flex flex-col items-center justify-center border p-4 rounded-md cursor-pointer hover:bg-gray-100 transition"
          onClick={() => handleCategoryClick('Headphones')}
        >
          <FaHeadphonesAlt className="w-12 h-12 mb-2" />
          <span>Headphones</span>
        </div>
        <div
          className="flex flex-col items-center justify-center border p-4 rounded-md cursor-pointer hover:bg-gray-100 transition"
          onClick={() => handleCategoryClick('Gaming')}
        >
          <FaGamepad className="w-12 h-12 mb-2" />
          <span>Gaming</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
