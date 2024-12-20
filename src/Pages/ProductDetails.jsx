import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(res.data.product);
        setLoading(false);
      } catch (err) {
        setError('Something went wrong while fetching product details');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === 'increment' ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You need to log in to add products to the cart.');
      navigate('/login');
      return;
    }

    try {
      await axios.post(
        'http://localhost:8080/api/Cart/addcart',
        {
          productId: id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/cart');
    } catch (error) {
      console.error(error);
      alert('Failed to add product to cart. Please try again.');
    }
  };

  const handleGoToCheckout = () => {
    try {
      console.log('Navigating to checkout with:', { productId: id, quantity });
      localStorage.setItem('checkoutData', JSON.stringify({ productId: id, quantity }));
      navigate('/Cheakout');
    } catch (error) {
      console.error('Error navigating to checkout:', error);
    }
  };

  return (
    <div className="w-full mx-auto bg-white">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-8 p-8">
        <div className="flex-1">
          <img
            src={product?.images?.[0]?.img}
            alt={product?.name}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">{product?.name}</h2>

          <p className="text-gray-700 text-2xl">
            ${product?.price}
            {product?.oldPrice && (
              <>
                <span className="line-through text-gray-400 ml-2">${product?.oldPrice}</span>
                <span className="text-red-500 text-lg ml-2">-{product?.discount}%</span>
              </>
            )}
          </p>

          <p className="text-yellow-500">
            Rating: {product?.rating} / 5 ({product?.reviews} reviews)
          </p>
          <div className="space-y-4">
            {product?.images?.length > 0 && (
              <div>
                <p className="text-lg font-semibold">Select Color</p>
                <div className="flex space-x-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: image.color }}
                      />
                      <img
                        src={image.img}
                        alt={`${product.name} - ${image.color}`}
                        className="w-16 h-16 object-cover mt-2 rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product?.Size?.length > 0 && (
              <div>
                <p className="text-lg font-semibold">Select Size</p>
                <div className="flex space-x-4">
                  {product.Size.map((size, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center">
              <button
                className="p-2 border border-gray-300 rounded-l"
                onClick={() => handleQuantityChange('decrement')}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center border-t border-b border-gray-300"
                readOnly
              />
              <button
                className="p-2 border border-gray-300 rounded-r"
                onClick={() => handleQuantityChange('increment')}
              >
                +
              </button>
            </div>

            <button
              className="bg-black text-white px-6 py-3 rounded-lg w-full mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-[#ea580c] text-white px-6 py-3 rounded-lg w-full mt-4"
              onClick={handleGoToCheckout}
            >
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex space-x-8 border-b-2 pb-4">
          <button className="text-lg font-semibold">Product Details</button>
          <button className="text-lg font-semibold">Rating & Reviews</button>
          <button className="text-lg font-semibold">FAQs</button>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">All Reviews ({product?.reviews})</h3>
          {product?.reviewsList?.length > 0 ? (
            product.reviewsList.map((review, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <p className="font-bold">{review.user}</p>
                <p className="text-yellow-500">Rating: {review.rating} / 5</p>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
