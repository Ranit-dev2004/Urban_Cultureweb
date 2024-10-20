import React, { useState, useEffect } from 'react';
import { FaTruck, FaCreditCard, FaClipboardCheck } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: "",
    email: "",
    phone: "",
    streetAddress: "",
    landmark: "",
    city: "",
    pinCode: "",
    state: "",
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/Shipping/getaddress", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAddresses(response.data.addresses);
      } catch (error) {
        setError(`Error fetching addresses: ${error.message}`);
        console.error("Error fetching addresses:", error);
      }
    };
    fetchAddresses();
  }, [token]);

  const handleAddNewAddress = async () => {
    setError('');
    setSuccess('');
    try {
      const response = await axios.post(
        "http://localhost:8080/api/Shipping/addaddress",
        newAddress,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAddresses([...addresses, response.data]);
      setSuccess('Address added successfully!');
      setNewAddress({
        name: "",
        email: "",
        phone: "",
        streetAddress: "",
        landmark: "",
        city: "",
        pinCode: "",
        state: "",
      });
    } catch (error) {
      setError("Error adding new address");
      console.error("Error adding new address:", error);
    }
  }
  return (
    <div className="checkout-container mx-auto max-w-screen p-8">
      <Navbar />
      <div className="flex justify-center gap-8 mb-10 mt-10">
        <span
          className={`flex items-center space-x-2 cursor-pointer ${step === 1 ? 'text-black' : 'text-gray-400'}`}
          onClick={() => setStep(1)}
        >
          <FaTruck className="text-xl" />
          <span className="font-semibold">Address</span>
        </span>
        <span
          className={`flex items-center space-x-2 cursor-pointer ${step === 2 ? 'text-black' : 'text-gray-400'}`}
          onClick={() => setStep(2)}
        >
          <FaCreditCard className="text-xl" />
          <span className="font-semibold">Payment Method</span>
        </span>
        <span
          className={`flex items-center space-x-2 cursor-pointer ${step === 3 ? 'text-black' : 'text-gray-400'}`}
          onClick={() => setStep(3)}
        >
          <FaClipboardCheck className="text-xl" />
          <span className="font-semibold">Review</span>
        </span>
      </div>

      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Select a delivery address</h2>
          <div className="space-y-4 mb-6">
            {addresses.map((address) => (
              <div
                key={address._id}
                className="p-4 border border-gray-200 rounded-md flex justify-between items-center"
              >
                <div>
                  <input
                    type="radio"
                    checked={selectedAddress === address._id}
                    onChange={() => setSelectedAddress(address._id)}
                    className="mr-2"
                  />
                  <span className="font-medium">{address.name}</span>
                  <p className="text-gray-500">{`${address.streetAddress}, ${address.city}, ${address.state} - ${address.pincode}`}</p>
                </div>
                <button className="text-sm text-black hover:underline">Edit</button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-600"
          >
            Deliver Here
          </button>
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Add A New Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Name"
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              />
              <input
                type="email"
                placeholder="Email"
                value={newAddress.email}
                onChange={(e) => setNewAddress({ ...newAddress, email: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={newAddress.phone}
                onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Flat, House, Building"
                value={newAddress.streetAddress}
                onChange={(e) => setNewAddress({ ...newAddress, streetAddress: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Landmark"
                value={newAddress.landmark}
                onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="City"
                value={newAddress.city}
                onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Pin Code"
                value={newAddress.pinCode}
                onChange={(e) => setNewAddress({ ...newAddress, pinCode: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              />
              <select
                value={newAddress.state}
                onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                className="border-gray-300 rounded-md p-3 focus:border-black focus:ring focus:ring-blue-200"
              >
                <option value="">Select State</option>
                <option value="kentucky">Kentucky</option>
              </select>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button
              onClick={handleAddNewAddress}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-600"
            >
              Add the new address
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Select Payment Method</h2>
          <p>Payment step details go here.</p>
          <button
            onClick={() => setStep(3)}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-600"
          >
            Proceed to Review
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Review Order</h2>
          <p>Review step details go here.</p>
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-600">
            Place Order
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Checkout;
