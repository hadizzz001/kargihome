'use client';

import { useState } from 'react';

export default function TranslateForm() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLanguage: language }),
      });

      const data = await res.json();
      setResult(data.translatedText || 'Error: No translation');
    } catch (err) {
      console.error(err);
      setResult('Translation failed');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Translate</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <br />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="fr">French</option>
        <option value="ru">Russian</option>
      </select>
      <br />
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? 'Translating...' : 'Translate'}
      </button>

      {result && (
        <div>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
