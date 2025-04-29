"use client";
import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useLanguage } from "../contexts/LanguageContext"; // Import language context

const Page = () => {
  const { language } = useLanguage(); // Access the current language from context
  const [translatedContent, setTranslatedContent] = useState({}); // State to store translated content

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        aboutKargiHome: "Data Protection and Privacy Policy",
        kargiHomeDescription: "At KargiHome, protecting your personal information is a top priority. As a real estate agency based in Tbilisi, Georgia, we are committed to handling your data with the utmost care and responsibility. Whether you are using our services as a renter, buyer, seller, or roommate, we collect only the information necessary to provide effective guidance and support.", 
        kargiHomeDescription1: "Our data protection and privacy policies are in accordance with the Georgian legislation, guidance and standard practice.", 
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
        <div className="content">
          <div
            id="banner-container"
            style={{
              backgroundImage: 'url("https://ucarecdn.com/72b4c4f2-e292-4978-9bd8-61881ac3f30d/1e31d096ecf745368c9f67cf074f69ac.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              height: 240,
              position: "relative"
            }}
          >
            <div className="container">
              <div className="col-sm-12">
                <h1
                  id="banner-title"
                  data-animation-direction="from-left"
                  data-animation-delay={50}
                  style={{ top: 105 }}
                  className="animate-from-left animation-from-left"
                />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "10px",  // Position from the bottom of the container
                right: "10px",   // Position from the right of the container
                fontSize: "12px",  // Adjust font size
                color: "#fff",    // Text color (white)
                fontFamily: "Arial, sans-serif", // Optional: change the font
              }}
            >
              Designed by Freepik
            </div>
          </div>

          <div
            id="banner-container"
            style={{
              backgroundImage: 'url("images/AUBR/blank.jpg")',
              backgroundRepeat: "repeat-x"
            }}
          >
            <div className="container">
              <div className="col-sm-12">
                <h1
                  id="banner-title"
                  data-animation-direction="from-left"
                  data-animation-delay={50}
                  className="animate-from-left animation-from-left"
                >
                  {translatedContent.aboutKargiHome || "About kargihome"}
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="col-sm-12 ">
              <p
                data-animation-direction="from-left"
                data-animation-delay={50}
                className="animate-from-left animation-from-left"
              >
                {translatedContent.kargiHomeDescription  }
               
              </p>
              <p
                data-animation-direction="from-left"
                data-animation-delay={50}
                className="animate-from-left animation-from-left"
              >
                {translatedContent.kargiHomeDescription1  }
               
              </p>
            </div>
          </div>

      

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
