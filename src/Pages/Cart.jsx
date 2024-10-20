import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 

const Cart = () => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8080/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.cart.products);
      setCart(response.data.cart.products);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while fetching the cart.');
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/Cart/remove`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          productId: productId,
        },
      });
      
      setCart(cart.filter((item) => item.productId._id !== productId));
    } catch (err) {
      console.error(err);
      setError('Failed to remove item from cart.');
    }
  };

  // Calculate total and subtotal
  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const subtotal = item.productId.price * item.quantity;
      return acc + subtotal;
    }, 0);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cart.map((item) => {
              const subtotal = item.productId.price * item.quantity;
              return (
                <div key={item.productId._id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center">
                    <img
                      src={item.productId.img}
                      alt={item.productId.name}
                      className="w-20 h-20 object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{item.productId.name}</h3>
                      <p className="text-gray-500">${item.productId.price}</p>
                      <p className="text-gray-400 line-through">${item.productId.oldPrice}</p>
                      <div className="flex items-center">
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-gray-700">Subtotal: ${subtotal.toFixed(2)}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleRemove(item.productId._id)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-6 text-right">
            <h3 className="text-2xl font-semibold">Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
