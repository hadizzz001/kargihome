"use client"

import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { fetchTemp1 } from "../../utils/index";

const PropertyDetails = () => {
  const [allTemp1, setTemp1] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get("id");
    const fetchData = async () => {
      try {
        const response = await fetch(`api/posts/${search}`);
        const data = await response.json();
        console.log("data: ", data);

        setTemp1(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the description:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div id="wrapper">
      <Header />
      {allTemp1 && Object.keys(allTemp1).length > 0 ? (
        <section className="container">
          <main className="mb-auto">
            <div className="space-y-6 pb-8 pt-6">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-black sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {allTemp1[0].title}
              </h1>
              <div className="prose max-w-none text-black dark:text-black">
                
                <p 
                                  dangerouslySetInnerHTML={{ __html: allTemp1[0].description }}
                                />
              </div>
              <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {allTemp1[0].img.map((imageUrl, index) => (
    <img
      key={index}
      src={imageUrl}
      alt={`${allTemp1[0].title} - ${index + 1}`}
      className="w-full h-64 object-cover rounded-lg shadow-md"
    />
  ))}
</div>
                <div className="text-lg font-semibold">
                  <p className="text-[20px]">Type: {allTemp1[0].type}</p>
                  <p className="text-[20px]">Number of bedrooms: {allTemp1[0].bed}</p>
                  <p className="text-[20px]">Category: {allTemp1[0].category}</p>
                  <p className="text-[20px]">Price: ${allTemp1[0].price}</p>
                </div>
              </div>
            </div>
          </main>
        </section>
      ) : (
        <div className="home___error-container">
          <h2 className="text-black text-xl font-bold">No data found</h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PropertyDetails;
