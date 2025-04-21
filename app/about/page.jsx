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
        aboutKargiHome: "About kargihome",
        kargiHomeDescription: "kargihome is a real estate agency based in Tbilisi Georgia. Our primary tasks are :",
        guideForRenters: "A guide for Renters",
        guideForBuyers: "A guide for Buyers",
        guideForSellers: "A guide for Sellers",
        guideForRoommates: "A Guide for Roommates/room share",
        ourTeamMembers: "Our Team Members",
        ceoDescription: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
        email: "Email:",
        number: "Number:",
        language: "Language:"
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
                {translatedContent.kargiHomeDescription || "kargihome is a real estate agency based in Tbilisi Georgia. Our primary tasks are :"}
                <ul className="list-disc list-inside space-y-4  m-5 mb-20">
                  <li>{translatedContent.guideForRenters || "Help to buy both commercial and residential properties."}</li>
                  <li>{translatedContent.guideForBuyers || "Help to rent both commercial and residential properties."}</li>
                  <li>{translatedContent.guideForSellers || "Help to find room share or roommates."}</li>
                  <li>{translatedContent.guideForRoommates || "Help to arrange mortgage through our partners."}</li>
                </ul>

                <div className='mt-5'>
                  <a href=''>{translatedContent.guideForRenters || "A guide for Renters"}</a>
                </div><br />
                <div className='mt-5'>
                  <a href=''>{translatedContent.guideForBuyers || "A guide for Buyers"}</a>
                </div><br />
                <div className='mt-5'>
                  <a href=''>{translatedContent.guideForSellers || "A guide for Sellers"}</a>
                </div><br />
                <div className='mt-5'>
                  <a href=''>{translatedContent.guideForRoommates || "A Guide for Roommates/room share"}</a>
                </div><br />
              </p>
            </div>
          </div>

          <div className="mb-16">
            <dh-component>
              <div className="container flex justify-center mx-auto pt-16">
                <div>
                  <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    {translatedContent.ourTeamMembers || "Our Team Members"}
                  </h1>
                </div>
              </div>
              <div className="w-full bg-gray-100 px-10 pt-10">
                <div className="container mx-auto">
                  <div
                    role="list"
                    aria-label="Behind the scenes People"
                    className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                  >
                    <div
                      role="listitem"
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src="https://res.cloudinary.com/dqzzfskhw/image/upload/v1745227454/d667e72a-1e67-4b0b-b97a-1ef5149b2235_-_Copy_nliezz.jpg"
                              alt="Display Picture of Andres Berlin"
                              role="img"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Ella
                          </h1>
                          <p className="text-gray-800 text-sm text-center">
                            {/* {translatedContent.ceoDescription || "Chief Executive Officer"} */}
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            {/* {translatedContent.ceoDescription || "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration."} */}
                          </p>
                          <div className="pt-4">
                            <p className="text-gray-800 text-3xl">
                              <span className="font-bold">{translatedContent.email || "Email:"}</span> info@kargihome.com
                            </p>
                            <p className="text-gray-800 text-3xl">
                              <span className="font-bold">{translatedContent.number || "Number:"}</span>  +995 597137561
                            </p>
                            <p className="text-gray-800 text-3xl">
                              <span className="font-bold">{translatedContent.language || "Language:"}</span> English, Georgian, Russian
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dh-component>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
