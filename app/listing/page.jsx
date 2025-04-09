"use client";
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useLanguage } from "../contexts/LanguageContext"; // Import language context

const Body = () => {
  const { language } = useLanguage(); // Access the current language from context
  const [allTemp, setTemp] = useState([]);
  const [translatedContent, setTranslatedContent] = useState({});
  const [translatedTitles, setTranslatedTitles] = useState([]);
  const [translatedTypes, setTranslatedTypes] = useState([]);

  // Filter states
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setTemp(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const translateContent = async () => {
      const contentToTranslate = {
        properties: "Properties",
        minRent: "Min Rent",
        maxRent: "Max Rent",
        minBedrooms: "Min Bedrooms",
        propertyType: "Property Type",
        clearFilters: "Clear Filters",
        noProperties: "No properties available.",
        readMore: "Read more →"
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

  // Translate item titles and types
  useEffect(() => {
    const translateItems = async () => {
      try {
        const titleTranslations = await Promise.all(
          allTemp.map(async (item) => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text: item.title }),
            });

            const data = await res.json();
            return data.translatedText || item.title;
          })
        );

        const typeTranslations = await Promise.all(
          allTemp.map(async (item) => {
            const res = await fetch("/api/translate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ targetLanguage: language, text: item.type }),
            });

            const data = await res.json();
            return data.translatedText || item.type;
          })
        );

        setTranslatedTitles(titleTranslations);
        setTranslatedTypes(typeTranslations);
      } catch (err) {
        console.error("Error translating items:", err);
        // Fallback to original titles and types if translation fails
        setTranslatedTitles(allTemp.map((item) => item.title));
        setTranslatedTypes(allTemp.map((item) => item.type));
      }
    };

    if (allTemp.length > 0) {
      translateItems();
    }
  }, [language, allTemp]);

  // Filtering logic
  const filteredData = allTemp.filter((item) => {
    const price = parseInt(item.price);
    const bed = parseInt(item.bed);

    return (
      (!minRent || price >= parseInt(minRent)) &&
      (!maxRent || price <= parseInt(maxRent)) &&
      (!minBedrooms || bed >= parseInt(minBedrooms)) &&
      (!propertyType || item.type === propertyType)
    );
  });

  // Dropdown options (no "Any")
  const rentOptions = ["500", "1000", "1500", "2000", "3000", "5000"];
  const bedroomOptions = ["1", "2", "3", "4"];
  const typeOptions = ["Residential", "Commercial"];

  return (
    <>
      <div id="wrapper">
        <Header />

        <section className="container">
          <main className="mb-auto">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-black dark:text-black sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  {translatedContent.properties || "Properties"}
                </h1>

                {/* Filters */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <select
                    value={minRent}
                    onChange={(e) => setMinRent(e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option value="">{translatedContent.minRent || "Min Rent"}</option>
                    {rentOptions.map((value) => (
                      <option key={`min-${value}`} value={value}>
                        ${value}
                      </option>
                    ))}
                  </select>

                  <select
                    value={maxRent}
                    onChange={(e) => setMaxRent(e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option value="">{translatedContent.maxRent || "Max Rent"}</option>
                    {rentOptions.map((value) => (
                      <option key={`max-${value}`} value={value}>
                        ${value}
                      </option>
                    ))}
                  </select>

                  <select
                    value={minBedrooms}
                    onChange={(e) => setMinBedrooms(e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option value="">{translatedContent.minBedrooms || "Min Bedrooms"}</option>
                    {bedroomOptions.map((value) => (
                      <option key={`bed-${value}`} value={value}>
                        {value}+
                      </option>
                    ))}
                  </select>

                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option value="">{translatedContent.propertyType || "Property Type"}</option>
                    {typeOptions.map((value) => (
                      <option key={`type-${value}`} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => {
                      setMinRent('');
                      setMaxRent('');
                      setMinBedrooms('');
                      setPropertyType('');
                    }}
                    className="border p-2 rounded bg-gray-200 hover:bg-gray-300 col-span-1 md:col-span-4"
                  >
                    {translatedContent.clearFilters || "Clear Filters"}
                  </button>
                </div>
              </div>

              {/* Property List */}
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredData && filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <a href={`/product?id=${item._id}`} key={item._id}>
                      <li className="py-12">
                        <article>
                          <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
                            {/* Image Section */}
                            <div className="flex-shrink-0">
                              <img
                                src={item.img[0]}
                                alt={item.title}
                                className="w-full max-w-xs rounded-lg object-cover"
                              />
                            </div>

                            {/* Details Section */}
                            <div className="space-y-5 flex-1">
                              <div className="space-y-6">
                                <div>
                                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                    {translatedTitles[index] || item.title}
                                  </h2>
                                  <p className="text-2xl font-bold leading-8 tracking-tight">
                                    {translatedContent.minBedrooms || "Number of bedrooms:"} {item.bed}
                                  </p>
                                  <p className="text-2xl font-bold leading-8 tracking-tight">
                                    {translatedTypes[index] || item.type}
                                  </p>
                                  <p className="text-2xl font-bold leading-8 tracking-tight">
                                    ${item.price}
                                  </p>
                                </div>
                              </div>
                              <div className="text-base font-medium leading-6">
                                <a
                                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                  aria-label={`Read more: "${item.title}"`}
                                  href={`/product?id=${item._id}`}
                                >
                                  {translatedContent.readMore || "Read more →"}
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    </a>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-10">
                    {translatedContent.noProperties || "No properties available."}
                  </div>
                )}
              </ul>
            </div>
          </main>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Body;
