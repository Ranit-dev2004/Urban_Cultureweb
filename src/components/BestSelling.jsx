import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BestSelling = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null); // Ref to the scrollable container

  useEffect(() => {
    const fetchBestSellingItems = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/Product/best-selling');
        setItems(res.data);
        setLoading(false);
      } catch (err) {
        setError('Something went wrong while fetching data');
        setLoading(false);
      }
    };

    fetchBestSellingItems();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll left by 200 pixels
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll right by 200 pixels
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col w-full ml-28 bg-white py-8 sm:py-12 px-4 sm:px-8">
      <div className="flex items-center mb-6 sm:mb-8">
        <h2 className="text-5xl sm:text-5xl font-bold text-left transform -translate-x-5">Best Selling</h2>
        <button onClick={scrollLeft} className="ml-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400">
          &#8592;
        </button>
        <button onClick={scrollRight} className="ml-2 p-2 bg-gray-300 rounded-full hover:bg-gray-400">
          &#8594;
        </button>
      </div>
      <div ref={scrollRef} className="flex overflow-x-auto space-x-4 sm:space-x-6 scrollbar-hide">
        {items.map((item) => (
          <Link to={`/product/${item._id}`} key={item._id}>
            <div className="item-card flex-shrink-0 mr-4 sm:mr-6 w-48 sm:w-64 bg-white shadow-lg rounded-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold mt-2">{item.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  ${item.price}{' '}
                  <span className="line-through text-gray-400">${item.oldPrice}</span>
                </p>
                <p className="text-yellow-500 text-sm">Rating: {item.rating} / 5 ({item.reviews} reviews)</p>
                <span className="text-red-500 text-sm">{item.discount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
