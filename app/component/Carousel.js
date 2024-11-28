"use client";

import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
    address: "",
    category: "Buy",
    minPrice: "0",
    maxPrice: "0",
    bedrooms: "0",
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
            {/* Title */}
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Miss">Miss</option>
              <option value="Master">Master</option>
              <option value="Mx">Mx</option>
              <option value="Dr">Dr</option>
            </select>

            {/* First Name */}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Telephone */}
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Telephone*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose A Password*"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Address */}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-3 border rounded-lg"
            />

            {/* Category */}
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category (e.g., Buy or Rent)"
              className="w-full p-3 border rounded-lg"
            />

            {/* Minimum Price */}
            <input
              type="number"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleChange}
              placeholder="Minimum Price"
              className="w-full p-3 border rounded-lg"
            />

            {/* Maximum Price */}
            <input
              type="number"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleChange}
              placeholder="Maximum Price"
              className="w-full p-3 border rounded-lg"
            />

            {/* Bedrooms */}
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="Number of Bedrooms"
              className="w-full p-3 border rounded-lg"
            />

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
