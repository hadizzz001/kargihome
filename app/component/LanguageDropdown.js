"use client";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LANGUAGES = {
  en: { label: "English", flag: "🇬🇧" },
  ru: { label: "Russian", flag: "🇷🇺" },
  ar: { label: "Arabic", flag: "🇸🇦" },
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
      <button onClick={() => setOpen(!open)} style={{ background: "transparent", border: "none", color: "white", cursor: "pointer" }}>
        🌐 {LANGUAGES[language].flag} {LANGUAGES[language].label}
      </button>

      {open && (
        <ul style={{ listStyle: "none", position: "absolute", backgroundColor: "white", padding: "0.5em", margin: 0 }}>
          {Object.entries(LANGUAGES).map(([code, { label, flag }]) => (
            <li key={code}>
              <button onClick={() => handleLanguageChange(code)} style={{ background: "none", border: "none", padding: "0.5em", cursor: "pointer" }}>
                {flag} {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
