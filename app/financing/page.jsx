"use client";

import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useLanguage } from "../contexts/LanguageContext"; // Import language context

const Page = () => {
  const { language } = useLanguage(); // Get selected language from context
  const [translatedContent, setTranslatedContent] = useState({
    title: "Financing",
    description:
      "We know that a real estate investment is one of the most important decisions very likely you are about to take. Taking into account your needs we are happy to fully support mortgage arrangement in collaboration with other partners and stakeholders. For further details please contact with us TODAY.",
  });

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        title: "Financing",
        description:
          "We know that a real estate investment is one of the most important decisions very likely you are about to take. Taking into account your needs we are happy to fully support mortgage arrangement in collaboration with other partners and stakeholders. For further details please contact with us TODAY.",
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
        setTranslatedContent(contentToTranslate); // Fallback to original content if translation fails
      }
    };

    translateContent();
  }, [language]);

  return (
    <>
      {/* WebScriptBodyTop place holder */}
      {/* BEGIN WRAPPER */}
      <div id="wrapper">
        <Header />
        <div className="content">
          <form method="post" action="./about-us.htm?pagename=about-us" id="ctl00">
            <div
              id="banner-container"
              style={{
                backgroundImage:
                  'url("https://ucarecdn.com/632f7135-bc98-4095-bc8d-70fb0529dfbf/2b7292dfae774590ac1e0a6becc09457.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                height: 240,
                position: "relative", // Ensure text is positioned relative to this container
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

              {/* Added text with absolute positioning */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px", // Position from the bottom of the container
                  right: "10px", // Position from the right of the container
                  fontSize: "12px", // Adjust font size
                  color: "#000", // Text color (white)
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
                backgroundRepeat: "repeat-x",
              }}
            >
              <div className="container">
                <div className="col-sm-12">
                  <h1
                    id="banner-title"
                    data-animation-direction="from-left"
                    data-animation-delay={50}
                    style={{}}
                    className="animate-from-left animation-from-left"
                  >
                    {translatedContent.title}
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
                  {translatedContent.description}
                </p>

                <br />
                <br />
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Page;
