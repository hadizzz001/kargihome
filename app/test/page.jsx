'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('en');
  const [translated, setTranslated] = useState('');
  const originalText = 'Welcome to our website! We are happy to have you here.';

  const handleTranslate = async (selectedLang) => {
    setLang(selectedLang);

    if (selectedLang === 'en') {
      setTranslated(originalText);
      return;
    }

    const res = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: originalText,
          targetLang: selectedLang
        })
      });
      

    const data = await res.json();
    setTranslated(data.translatedText || originalText);
  };

  useEffect(() => {
    handleTranslate(lang);
  }, []);

  return (
    <main className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">
        🌐 {translated || originalText}
      </h1>

      <select
        value={lang}
        onChange={(e) => handleTranslate(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
      </select>
    </main>
  );
}
