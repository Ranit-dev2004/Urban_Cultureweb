import React, { useState, useEffect } from 'react';
import { FaTruck, FaCreditCard, FaClipboardCheck } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Payment from '../components/Payment';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: "",
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
        phone: "",
        streetAddress: "",
        landmark: "",
        city: "",
        pinCode: "",
        state: "",
      });
      setSelectedAddress(response.data._id);
    } catch (error) {
      setError("Error adding new address");
      console.error("Error adding new address:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
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
          className={`flex items-center space-x-2 cursor-pointer ${step === 2 && selectedAddress ? 'text-black' : 'text-gray-400'}`}
          onClick={() => selectedAddress && setStep(2)}
        >
          <FaCreditCard className="text-xl" />
          <span className="font-semibold">Payment Method</span>
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
                  <p className="text-gray-500">{`${address.streetAddress}, ${address.city}, ${address.state} - ${address.pinCode}`}</p>
                </div>
                <button className="text-sm text-black hover:underline">Edit</button>
              </div>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-600"
            disabled={!selectedAddress}
          >
            Deliver Here
          </button>
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Add A New Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="name"
                value={newAddress.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="phone"
                value={newAddress.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="streetAddress"
                value={newAddress.streetAddress}
                onChange={handleInputChange}
                placeholder="Street Address"
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="landmark"
                value={newAddress.landmark}
                onChange={handleInputChange}
                placeholder="Landmark"
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="city"
                value={newAddress.city}
                onChange={handleInputChange}
                placeholder="City"
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="pinCode"
                value={newAddress.pinCode}
                onChange={handleInputChange}
                placeholder="Pin Code"
                className="border p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="state"
                value={newAddress.state}
                onChange={handleInputChange}
                placeholder="State"
                className="border p-2 rounded-md w-full"
              />
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

      {step === 2 && selectedAddress && <Payment />}

      <Footer />
    </div>
  );
};

export default Checkout;
