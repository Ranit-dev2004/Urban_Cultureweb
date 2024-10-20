import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-16">
      <div className="w-full bg-gray-900 text-white py-10 flex flex-col items-center">
  <h3 className="text-xl font-bold mb-4 text-center">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
  <div className="flex items-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-3 rounded-l-md border-none outline-none text-gray-200 bg-gray-900"
    />
    <button className="p-3 bg-white text-gray-900 rounded-r-md">Subscribe to Newsletter</button>
  </div>
</div>
      <div className="w-full bg-gray-200 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-gray-900">COMPANY</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">About</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Works</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Career</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">HELP</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Customer Support</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Delivery Details</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">FAQ</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Account</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Manage Deliveries</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Orders</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Payments</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">RESOURCES</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Free eBooks</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">How to - Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-8 border-t border-gray-300">
        <div className="max-w-6xl mx-auto flex justify-center space-x-8">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-xl text-gray-900 hover:text-blue-600" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-xl text-gray-900 hover:text-blue-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-xl text-gray-900 hover:text-pink-500" />
          </a>
          <a href="#" aria-label="Pinterest">
            <FaPinterestP className="text-xl text-gray-900 hover:text-red-600" />
          </a>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Urban Culture.co © 2024-2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
