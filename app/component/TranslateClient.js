"use client";

import { useState } from "react";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
];

export default function TranslateClient() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [targetLang, setTargetLang] = useState("en");

  const handleTranslate = async () => {
    if (!text.trim()) return;

    const res = await fetch("https://argos-translate.onrender.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        from_lang: "en", // assume input is always in English
        to_lang: targetLang,
      }),
    });

    const data = await res.json();
    setTranslated(data.translatedText || data.error || "Error occurred");
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">🌍 Argos Translate</h1>

      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Type something in English..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <label className="font-semibold">Translate to:</label>
        <select
          className="p-2 border rounded"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleTranslate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Translate
        </button>
      </div>

      {translated && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>Translated:</strong>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
}
