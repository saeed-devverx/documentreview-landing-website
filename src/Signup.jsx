import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
      "ipv4_address": "0.0.0.10"
  });


  useEffect(() => {
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      setFormData(prev => ({
        ...prev,
        ipv4_address: data.ip
      }));
    });
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return;
    }
    delete formData.confirmPassword;


    try {
      const response = await axios.post(
        "https://drl-admin.devverx.us/client/add_user",
        formData
      );

      navigate("/login");
    } catch (error) {
      setError("Signup Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 pt-28 pb-5 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <h3 className="text-gray-600 font-semibold mb-2">Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="street"
              placeholder="Street"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              name="zip_code"
              placeholder="Zip Code"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <input
            type="tel"
            name="phone_number"
            placeholder="phone_number"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Signup;
