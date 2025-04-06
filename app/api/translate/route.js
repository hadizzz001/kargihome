// app/api/translate/route.js

export async function POST(req) {
    try {
      const body = await req.json();
      console.log('Received body:', body);
  
      if (!body.text || !body.targetLang) {
        return new Response(JSON.stringify({ error: 'Missing parameters' }), { status: 400 });
      }
  
      const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          q: body.text,
          source: 'en',
          target: body.targetLang,
          format: 'text'
        })
      });
  
      if (!response.ok) {
        const error = await response.text();
        console.error('LibreTranslate error:', error);
        return new Response(JSON.stringify({ error: 'Translation failed' }), { status: 502 });
      }
  
      const data = await response.json();
  
      return new Response(JSON.stringify({ translatedText: data.translatedText }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Server error:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
  }
  