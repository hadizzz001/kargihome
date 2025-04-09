"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { sendEmail } from "../api/sendEmail/sendEmail";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useLanguage } from "../contexts/LanguageContext"; // Import the language context

export default function Home() {
  const { language } = useLanguage(); // Get the selected language from context
  const [inputs, setInputs] = useState({});
  const [value, setValue] = useState("");
  const [translations, setTranslations] = useState({
    getInTouch: "GET IN TOUCH",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone Number",
    message: "Message",
    sendButton: "Send",
  });

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        getInTouch: "GET IN TOUCH",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message",
        sendButton: "Send",
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

        setTranslations(Object.fromEntries(translated));
      } catch (err) {
        console.error("Translation failed", err);
        setTranslations(contentToTranslate); // Fallback to original content if translation fails
      }
    };

    translateContent();
  }, [language]);

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      setValue(numericValue);
    }

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="container-xl">
          <br />
          <h4 className="br_text-2xl-serif md:br_text-3xl-serif" style={{ textAlign: "center" }}>
            {translations.getInTouch}
          </h4>
        </div>
      </div>
      <div className="container-xl mt-5">
        <div>
          <div className="pl-5 pt-4 pr-5">
            <form
              action={async (formData) => {
                await sendEmail(formData);
              }}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="firstname"
                        type="text"
                        placeholder={translations.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="lastname"
                        type="text"
                        placeholder={translations.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder={translations.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="phone"
                        type="text"
                        placeholder={translations.phone}
                        value={value}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <textarea
                        className="form-control form-control-text-area"
                        name="message"
                        placeholder={translations.message}
                        rows={9}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row pt-2">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                  <button
                    type="submit"
                    className="klaviyo_submit_button"
                    style={{ padding: "1.5em" }}
                  >
                    {translations.sendButton}
                  </button>
                </div>
                <div className="col-md-5"></div>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div className="clearfix" />
      <Footer />
    </>
  );
}
