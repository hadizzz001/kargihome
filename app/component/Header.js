'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from "../contexts/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";

const originalLabels = {
  home: "Home",
  about: "About",
  listing: "Listings",
  financing: "Financing",
  contact: "Contact"
};

const Header = () => {
  const { language } = useLanguage();
  const [labels, setLabels] = useState(originalLabels);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchTranslations = async () => {
      if (language === "en") {
        setLabels(originalLabels);
        return;
      }

      try {
        const entries = await Promise.all(
          Object.entries(originalLabels).map(async ([key, text]) => {
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

  return (
    <header className="site-header">
      {/* Logo */}
      <a href="/" className="site-title">
        kargihome<span className="dot">.</span>com
      </a>

      {/* Desktop Nav */}
      <nav className="navbar-custom">
        <ul className="nav-links">
          <li><a href="/" className="nav-item">{labels.home}</a></li>
          <li><a href="/about" className="nav-item">{labels.about}</a></li>
          <li><a href="/listing" className="nav-item">{labels.listing}</a></li>
          <li><a href="/financing" className="nav-item">{labels.financing}</a></li>
          <li><a href="/contact" className="nav-item">{labels.contact}</a></li>
          <li><LanguageDropdown /></li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={() => setIsMenuOpen(true)}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-language">
          <LanguageDropdown />
        </div>
        <div className="close-btn" onClick={() => setIsMenuOpen(false)}>&times;</div>

        <a href="/" onClick={() => setIsMenuOpen(false)}>{labels.home}</a>
        <a href="/about" onClick={() => setIsMenuOpen(false)}>{labels.about}</a>
        <a href="/listing" onClick={() => setIsMenuOpen(false)}>{labels.listing}</a>
        <a href="/financing" onClick={() => setIsMenuOpen(false)}>{labels.financing}</a>
        <a href="/contact" onClick={() => setIsMenuOpen(false)}>{labels.contact}</a>
      </div>
    </header>
  );
};

export default Header;
