"use client"

import React, { useEffect, useState } from 'react';
import { useLanguage } from "../contexts/LanguageContext"; // Import language context
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { language } = useLanguage(); // Access the current language from context
  const [translatedContent, setTranslatedContent] = useState({}); // State to store translated content

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        sendMessage: "Send Us A Message",
       
        email: "Email Us", 
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
    <footer id="footer">
      <div id="footer-top" className="container">
        <div className="row">
          <div id="footer-contactus" className="block col-sm-4">
            <h3>{translatedContent.sendMessage || "Send Us A Message"}</h3>
            <ul className="footer-contacts">
         
              <li>
                <i className="fa-solid fa-phone" />{" "}
                <a
                  id="repContactUs_repContactUsTelephone_0_hypContactUsTelephone_0"
                  href="tel:+995597137561"
                >
                  +995 597 137 561
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" />{" "}
                <a
                  id="repContactUs_repContactUsEmail_0_hypContactUsEmail_0"
                  href="mailto:info@kargihome.com"
                >
                  {translatedContent.email || "Email Us"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BEGIN COPYRIGHT */}
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            © {new Date().getFullYear()} kargihome

              <ul className="social-networks">
                {/* <li>
                  <a
                    id="hypFacebook"
                    href="https://www.facebook.com/kargihome8000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li> */}
                 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
