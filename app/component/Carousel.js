"use client";

import React, { useState, useEffect } from "react";
import { sendData } from "../api/sendData/sendData";
import { useLanguage } from "../contexts/LanguageContext"; // Assuming LanguageContext is used for language selection

const originalLabels = {
  title: "Are you looking for an affordable Home or a single room to rent?",
  subtitle: "Are you planning to buy a Home in Georgia?",
  contactUsText: "Contact us today to get the best deals!",
  contactButtonText: "Contact us TODAY!",
  registerNowText: "Register Now",
  fullNamePlaceholder: "Full Name*",
  mobileNumberPlaceholder: "Mobile Number*",
  addressPlaceholder: "Address*",
  citizenshipPlaceholder: "Citizenship*",
  emailPlaceholder: "Email Address*",
  professionPlaceholder: "Profession*",
  transactionTypeLabel: "Do you want to Sell, Rent, or Share Room?",
  submitButtonText: "Submit",
  transactionOptions: {
    sell: "Sell",
    rent: "Rent",
    homeOwner: "Home owner",
  },
};

const RegistrationForm = () => {
  const { language, setLanguage } = useLanguage();
  const [inputs, setInputs] = useState({});
  const [labels, setLabels] = useState(originalLabels);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  // Load language from localStorage on initial load
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage); // Set the language from localStorage
    }
  }, [setLanguage]);

  // Fetch translations based on selected language
  useEffect(() => {
    const fetchTranslations = async () => {
      if (language === "en") {
        setLabels(originalLabels);
        return;
      }

      try {
        const entries = await Promise.all(
          Object.entries(originalLabels).map(async ([key, text]) => {
            if (key === "transactionOptions") return [key, text]; // Skip translation for transaction options keys
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text }),
            });

            const data = await res.json();
            return [key, data.translatedText || text];
          })
        );

        setLabels(Object.fromEntries(entries));
      } catch (err) {
        console.error("Translation failed", err);
        setLabels(originalLabels);
      }
    };

    fetchTranslations();
  }, [language]);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
    }
  }, [language]);

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
            bottom: "0px", // Position from the bottom of the container
            right: "10px", // Position from the right of the container
            fontSize: "12px", // Adjust font size
            color: "#fff", // Text color (white)
            fontFamily: "Arial, sans-serif", 
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
          {labels.title}
          <br />
          {labels.subtitle}
        </h2>
        <p className="text-[22px] font-medium text-white">{labels.contactUsText}</p>
        <a
          href="/contact"
          className="inline-block bg-orange-500 text-white rounded-lg font-semibold text-[24px] transition-all duration-300 hover:scale-105 px-8 py-4"
        >
          {labels.contactButtonText}
        </a>
      </div>

      {/* Right Section: Registration Form */}
      <div className="relative z-10 flex-1 p-6">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">{labels.registerNowText}</h3>
          <form
            action={async (formData) => {
              await sendData(formData);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              placeholder={labels.fullNamePlaceholder}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              onChange={handleChange}
              placeholder={labels.mobileNumberPlaceholder}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder={labels.addressPlaceholder}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="citizenship"
              onChange={handleChange}
              placeholder={labels.citizenshipPlaceholder}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder={labels.emailPlaceholder}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="profession"
              onChange={handleChange}
              placeholder={labels.professionPlaceholder}
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
                {labels.transactionTypeLabel}
              </option>
              <option value="Sell">{labels.transactionOptions.sell}</option>
              <option value="Rent">{labels.transactionOptions.rent}</option>
              <option value="Home owner">{labels.transactionOptions.homeOwner}</option>
            </select>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              {labels.submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
