"use client";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    citizenship: "",
    email: "",
    profession: "",
    transactionType: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="relative h-full w-full bg-gray-100 overflow-hidden flex flex-col lg:flex-row items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://www.brightlogic-estateagents.co.uk/AUBR/upload/5055-1.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-30 absolute inset-0" />
      </div>

      {/* Left Section */}
      <div className="relative z-10 flex-1 p-8 space-y-4 text-center">
        <h2
          className="text-[40px] font-light text-white leading-tight"
          style={{
            fontFamily: "'Roboto Slab', sans-serif",
            textShadow: "2px 4px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          Are you looking for an affordable Home or a single room to rent?
          <br />
          Are you planning to buy a Home in Georgia?
        </h2>
        <p className="text-[22px] font-medium text-white">
          Contact us today to get the best deals!
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-500 text-white rounded-lg font-semibold text-[24px] transition-all duration-300 hover:scale-105 px-8 py-4"
        >
          Contact us TODAY!
        </a>
      </div>

      {/* Right Section: Registration Form */}
      <div className="relative z-10 flex-1 p-6">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Register Now</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Mobile Number */}
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Address */}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Citizenship */}
            <input
              type="text"
              name="citizenship"
              value={formData.citizenship}
              onChange={handleChange}
              placeholder="Citizenship*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Profession */}
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              placeholder="Profession*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Transaction Type */}
            <select
              name="transactionType"
              value={formData.transactionType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="" disabled>Do you want to Sell, Rent, or Share Room?</option>
              <option value="Sell">Sell</option>
              <option value="Rent">Rent</option>
              <option value="Home owner">Home owner</option>
            </select>
 

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
