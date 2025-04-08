"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LanguageDropdown from "./LanguageDropdown";
import { useLanguage } from "../contexts/LanguageContext";

const originalLabels = {
  home: "Home",
  about: "About",
  listing: "Listings",
  financing: "Financing",
  contact: "Contact"
};

const Navbar = () => {
  const { language } = useLanguage();
  const [labels, setLabels] = useState(originalLabels);

  useEffect(() => {
    console.log("🌐 Language changed to:", language);

    const fetchTranslations = async () => {
      if (language === "en") {
        console.log("Language is English, resetting to original labels.");
        setLabels(originalLabels);
        return;
      }

      try {
        const entries = await Promise.all(
          Object.entries(originalLabels).map(async ([key, text]) => {
            console.log(`🔁 Translating: "${text}"`);
            const res = await fetch("https://argos-translate.onrender.com/translate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                source_language: "en",
                target_language: language,
                text: text,
              }),
            });

            const data = await res.json();
            console.log(`✅ Translated "${text}" ➜ "${data.translatedText}"`);
            return [key, data.translatedText || text];
          })
        );

        const updatedLabels = Object.fromEntries(entries);
        setLabels(updatedLabels);
        console.log("🆕 Updated labels:", updatedLabels);
      } catch (err) {
        console.error("❌ Error during translation:", err);
        setLabels(originalLabels); // fallback
      }
    };

    fetchTranslations();
  }, [language]);

  return (
    <header id="header">
      <div className="container">
        <h1 style={{ color: 'white' }}>
          kargihome<b style={{ color: 'orange' }}>.com</b>
        </h1>
        <nav className="navbar">
          <ul className="nav navbar-nav">
            <li><a href="/">{labels.home}</a></li>
            <li><a href="/about">{labels.about}</a></li>
            <li><a href="/listing">{labels.listing}</a></li>
            <li><a href="/financing">{labels.financing}</a></li>
            <li><a href="/contact">{labels.contact}</a></li>
            <li><LanguageDropdown /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
