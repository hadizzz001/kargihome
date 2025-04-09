"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from './component/Header';
import Carousel from './component/Carousel';
import Footer from './component/Footer';
import { useLanguage } from "./contexts/LanguageContext"; // Import language context

export default function Home() {
  const { language } = useLanguage(); // Access the current language from context
  const [translatedContent, setTranslatedContent] = useState({}); // State to store translated content

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        opportunityText: "This is a great opportunity for students, visitors and others to choose the option of home stay accommodation by living together with the local Georgian families and learn about unique Georgian food, culture and language. If it suits your personality and lifestyle.",
        contactUs: "Please contact us Today !!!!!",
        investText: "If you want to move to Georgia together with your family by real estate investment please contact us Today !!!",
        interiorDesignText: "To make your new home even more beautiful and attractive our interior design team are here to design and offer you the best and amazing deals. With our innovativeness and dedications you can turn your bedrooms, living room, kitchen, balcony into your dream home. For details please contact us Today."
      };

      try {
        const translated = await Promise.all(
          Object.entries(contentToTranslate).map(async ([key, text]) => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text }),
            });

            const data = await res.json();
            return [key, data.translatedText || text];
          })
        );

        setTranslatedContent(Object.fromEntries(translated));
      } catch (err) {
        console.error("Translation failed", err);
        setTranslatedContent(contentToTranslate); // Fallback to original text if translation fails
      }
    };

    translateContent();
  }, [language]);

  return (
    <>
      <div id="wrapper">
        <Header />
        <div className="content" style={{ zIndex: 0, position: "relative" }}>
          <Carousel />
          <div className="action-box">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 center">
                  <h2 />
                  <p>
                    <span style={{ color: "orange", fontSize: 24 }}>
                      {translatedContent.opportunityText}
                      <br /><br />
                      {translatedContent.contactUs}
                      <br /><br /><br />
                      <h1 style={{ color: "orange", fontSize: 30 }}>
                        {translatedContent.investText}
                      </h1>
                      <br />
                      <br />
                      <br />
                      <h1 style={{ color: "orange", fontSize: 30 }}>
                        {translatedContent.interiorDesignText}
                      </h1>
                    </span>
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="col-sm-12">
              {/*Start of Tawk.to Script*/}
              {/*End of Tawk.to Script*/}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
