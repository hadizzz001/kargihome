'use client';
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

// Country codes based on ISO 3166-1 alpha-2
const LANGUAGES = {
  en: { label: "English", countryCode: "gb" },
  ru: { label: "Russian", countryCode: "ru" },
  ar: { label: "Arabic", countryCode: "sa" },
  ka: { label: "Georgian", countryCode: "ge" },  
};

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="dropdown" style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ background: "transparent", border: "none", color: "white", cursor: "pointer",
          padding: "0px 10px",
          display: "block",
          color: "#ffffff",
          lineHeight: "10px",
          textTransform: "uppercase",
          fontSize: "15px",
         }} 
      >
        <span
          className={`flag-icon flag-icon-${LANGUAGES[language].countryCode}`}
          style={{ marginRight: "8px" }}
        ></span>
        
      </button>

      {open && (
        <ul
          style={{
            listStyle: "none",
            position: "absolute",
            backgroundColor: "white",
            padding: "0.5em",
            margin: 0,
            zIndex: 1000,
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          {Object.entries(LANGUAGES).map(([code, { label, countryCode }]) => (
            <li key={code}>
              <button
                onClick={() => handleLanguageChange(code)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "0.5em",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center"
                }}
              >
<span
  className={`flag-icon flag-icon-${countryCode}`}
  style={{ marginRight: "8px", fontSize: "20px" }}
></span>
                
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
