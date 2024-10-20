import React, { useState } from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { VscAccount, VscSearch } from 'react-icons/vsc';
import { TfiAlignJustify } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="text-2xl font-bold">
          <span className="text-black">Urban</span>
          <br />
          <span className="text-gray-700">Culture</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-sm">
          {['Home', 'Category', 'Best Selling', 'Contact us'].map((link) => (
            <li
              key={link}
              onClick={() => handleClick(link)}
              className={`relative cursor-pointer pb-2 hover:text-gray-500 transition duration-300 ${
                activeLink === link ? 'text-black' : 'text-gray-700'
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="underline-animation absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
              )}
            </li>
          ))}
        </ul>
        <div className="relative hidden md:block">
          <input
            type="text"
            className="border border-gray-300 rounded-full py-2 px-4 pr-10 text-gray-700"
            placeholder="Search for products..."
          />
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative cursor-pointer">
            <FiShoppingCart className="w-6 h-6 text-gray-700" />
            <div className="absolute -top-1 -right-2 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">
              2
            </div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full" onClick={handleLoginClick}>
            Login
          </button>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <button
            className="p-2 text-black rounded-full hover:bg-gray-200"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <VscSearch size={20} />
          </button>
          <Link to="/SignUp">
            <button className="p-2 text-black rounded-full hover:bg-gray-200">
              <VscAccount size={20} />
            </button>
          </Link>
          <div className="text-black cursor-pointer" onClick={toggleMenu}>
            <TfiAlignJustify size={24} />
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full py-2 px-4 text-gray-700"
            placeholder="Search for products..."
          />
        </div>
      )}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col space-y-4 text-center">
            {['Home', 'Category', 'Best Selling', 'Contact Us'].map((link) => (
              <li
                key={link}
                onClick={() => handleClick(link)}
                className={`cursor-pointer text-sm ${activeLink === link ? 'text-black' : 'text-gray-700'}`}
              >
                {link}
              </li>
            ))}
            <li>
              <button className="bg-black text-white px-4 py-2 rounded-full w-full" onClick={handleLoginClick}>
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
