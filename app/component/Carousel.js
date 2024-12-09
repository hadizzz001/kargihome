"use client";

import React, { useState } from "react";
import { sendData } from "../api/sendData/sendData";

const RegistrationForm = () => {

  const [inputs, setInputs] = useState({});


  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };


  return (
    <div className="relative h-full w-full bg-gray-100 overflow-hidden flex flex-col lg:flex-row items-center">
      {/* Background Image */}
      <div
  className="absolute inset-0 h-full w-full bg-cover bg-right"
  style={{
    backgroundImage:
      'url("https://ucarecdn.com/12aa2660-5986-475b-8219-1b8c4a678ddd/5c6ffe392b0142ebab4023abbb802fc6.jpg")',
  }}
>
  <div className="bg-black bg-opacity-30 absolute inset-0" />

  {/* Added text with absolute positioning */}
  <div
    style={{
      position: "absolute",
      bottom: "10px",  // Position from the bottom of the container
      right: "10px",   // Position from the right of the container
      fontSize: "12px",  // Adjust font size
      color: "#fff",    // Text color (white)
      fontFamily: "Arial, sans-serif", // Optional: change the font
    }}
  >
    Designed by Freepik
  </div>
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
          <form action={async (formData) => {
            await sendData(formData);
          }} className="space-y-4">
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              placeholder="Full Name*"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              onChange={handleChange}
              placeholder="Mobile Number*"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Address*"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="citizenship"
              onChange={handleChange}
              placeholder="Citizenship*"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email Address*"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="profession"
              onChange={handleChange}
              placeholder="Profession*"
              className="w-full p-3 border rounded-lg"
              required
            />
            <select
              name="transactionType"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="" disabled>
                Do you want to Sell, Rent, or Share Room?
              </option>
              <option value="Sell">Sell</option>
              <option value="Rent">Rent</option>
              <option value="Home owner">Home owner</option>
            </select>
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
