import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    localStorage.setItem('paymentDetails', JSON.stringify({
        paymentMethod,
        cardDetails: paymentMethod === 'card' ? cardDetails : null,
    }));

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8080/api/order', {
            paymentMethod,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setIsModalOpen(true);
        console.log('Order Response:', response.data);

    } catch (error) {
        console.error("Error placing order:", error);
    }
};


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6">Select Payment Method</h2>

      <div className="mb-6">
        <label className="flex items-center mb-3">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
            className="mr-2"
          />
          Debit/Credit Card
        </label>
        <label className="flex items-center mb-3">
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={paymentMethod === 'upi'}
            onChange={() => setPaymentMethod('upi')}
            className="mr-2"
          />
          UPI
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={() => setPaymentMethod('cod')}
            className="mr-2"
          />
          Cash on Delivery
        </label>
      </div>

      {paymentMethod === 'card' && (
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="123"
              />
            </div>
          </div>

          <button className="w-full bg-black text-white p-3 rounded-lg font-semibold">
            Add Card
          </button>
        </form>
      )}

      {paymentMethod === 'upi' && (
        <form onSubmit={handlePayment}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="upiId">
              Enter UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="yourname@bank"
            />
          </div>

          <button className="w-full bg-black text-white p-3 rounded-lg font-semibold">
            Pay with UPI
          </button>
        </form>
      )}

      {paymentMethod === 'cod' && (
        <div>
          <p className="text-gray-700">
            You have selected Cash on Delivery. Please keep the exact amount ready at the time of delivery.
          </p>
          <button className="w-full bg-black text-white p-3 rounded-lg font-semibold mt-4" onClick={handlePayment}>
            Confirm COD Order
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Payment Order Placed!</h3>
            <p>Your order has been placed successfully.</p>
            <button
              className="mt-4 bg-black text-white p-2 rounded-lg"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
