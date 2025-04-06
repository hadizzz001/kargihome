"use client";
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Body = () => {
  const [allTemp, setTemp] = useState([]);

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
                  Properties
                </h1>

                {/* Filters */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <select
                    value={minRent}
                    onChange={(e) => setMinRent(e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option value="">Min Rent</option>
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
                    <option value="">Max Rent</option>
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
                    <option value="">Min Bedrooms</option>
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
                    <option value="">Property Type</option>
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
                    Clear Filters
                  </button>
                </div>
              </div>

              {/* Property List */}
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredData && filteredData.length > 0 ? (
                  filteredData.map((item) => (
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
                                    {item.title}
                                  </h2>
                                  <p className="text-2xl font-bold leading-8 tracking-tight">
                                    Number of bedrooms: {item.bed}
                                  </p>
                                  <p className="text-2xl font-bold leading-8 tracking-tight">
                                    {item.type}
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
                                  Read more →
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
                    No properties available.
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
