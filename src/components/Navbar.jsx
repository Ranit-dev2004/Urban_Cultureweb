import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { VscAccount, VscSearch } from 'react-icons/vsc';
import { TfiAlignJustify } from 'react-icons/tfi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; 
import axios from 'axios';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8080/api/auth/getuser', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data.user);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };
    fetchUser();
  }, []);

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

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;
    try {
      const response = await axios.get(`http://localhost:8080/api/findProductByField`, {
        params: { name: searchQuery }, 
      });
      console.log('Search Results:', response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <img src={assets.logo} alt="Urban Culture Logo" className="h-12 w-auto" /> 
        </div>
        <ul className="hidden md:flex space-x-8 text-sm">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleClick('Home')}
          >
            <li className={`relative cursor-pointer pb-2 hover:text-gray-500 transition duration-300 ${activeLink === 'Home' ? 'text-black' : 'text-gray-700'}`}>
              Home
              {activeLink === 'Home' && (
                <span className="underline-animation absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
              )}
            </li>
          </ScrollLink>
          <ScrollLink
            to="category"
            smooth={true}
            duration={500}
            onClick={() => handleClick('Category')}
          >
            <li className={`relative cursor-pointer pb-2 hover:text-gray-500 transition duration-300 ${activeLink === 'Category' ? 'text-black' : 'text-gray-700'}`}>
              Category
              {activeLink === 'Category' && (
                <span className="underline-animation absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
              )}
            </li>
          </ScrollLink>
          <ScrollLink
            to="best-selling"
            smooth={true}
            duration={500}
            onClick={() => handleClick('Best Selling')}
          >
            <li className={`relative cursor-pointer pb-2 hover:text-gray-500 transition duration-300 ${activeLink === 'Best Selling' ? 'text-black' : 'text-gray-700'}`}>
              Best Selling
              {activeLink === 'Best Selling' && (
                <span className="underline-animation absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
              )}
            </li>
          </ScrollLink>
          <RouterLink to="/contact">
            <li className={`relative cursor-pointer pb-2 hover:text-gray-500 transition duration-300 ${activeLink === 'Contact Us' ? 'text-black' : 'text-gray-700'}`}>
              Contact Us
            </li>
          </RouterLink>
        </ul>
        <div className="relative hidden md:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="border border-gray-300 rounded-full py-2 px-4 pr-10 text-gray-700"
            placeholder="Search for products..."
          />
          <FiSearch 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" 
            size={20} 
            onClick={handleSearch}
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative cursor-pointer">
            <FiShoppingCart className="w-6 h-6 text-gray-700" />
            <div className="absolute -top-1 -right-2 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">
              2
            </div>
          </div>
          {user ? (
            <span className="text-black">Hello, {user.name}</span>
          ) : (
            <button className="bg-black text-white px-4 py-2 rounded-full" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
        <div className="flex md:hidden items-center gap-4">
          <button
            className="p-2 text-black rounded-full hover:bg-gray-200"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <VscSearch size={20} />
          </button>
          <RouterLink to="/SignUp">
            <button className="p-2 text-black rounded-full hover:bg-gray-200">
              <VscAccount size={20} />
            </button>
          </RouterLink>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
      )}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col space-y-4 text-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onClick={() => handleClick('Home')}
            >
              <li className={`cursor-pointer text-sm ${activeLink === 'Home' ? 'text-black' : 'text-gray-700'}`}>
                Home
              </li>
            </ScrollLink>
            <ScrollLink
              to="category"
              smooth={true}
              duration={500}
              onClick={() => handleClick('Category')}
            >
              <li className={`cursor-pointer text-sm ${activeLink === 'Category' ? 'text-black' : 'text-gray-700'}`}>
                Category
              </li>
            </ScrollLink>
            <ScrollLink
              to="best-selling"
              smooth={true}
              duration={500}
              onClick={() => handleClick('Best Selling')}
            >
              <li className={`cursor-pointer text-sm ${activeLink === 'Best Selling' ? 'text-black' : 'text-gray-700'}`}>
                Best Selling
              </li>
            </ScrollLink>
            <RouterLink to="/contact">
              <li className={`cursor-pointer text-sm ${activeLink === 'Contact Us' ? 'text-black' : 'text-gray-700'}`}>
                Contact Us
              </li>
            </RouterLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
