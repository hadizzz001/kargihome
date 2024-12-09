"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { fetchTemp1 } from "../../utils/index";

const PropertyDetails = () => {
  const [allTemp1, setTemp1] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state
  const searchParams = useSearchParams();
  const search = searchParams.get("id"); // Get the 'id' from the query parameters

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTemp1(search);
      setTemp1(data);
      setLoading(false);  // Set loading to false once the data is fetched
    };
    fetchData();
  }, [search]);  // Make sure the effect is triggered when 'search' changes

  console.log(allTemp1);

  if (loading) {
    // Render a loading indicator or a placeholder while data is being fetched
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <div id="wrapper">
        <Header />
        
        {allTemp1 && Object.keys(allTemp1).length > 0 ? (
          <section className="container">
            <main className="mb-auto">
              <div className="space-y-6 pb-8 pt-6">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  {allTemp1[0].title}
                </h1>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  <p>{allTemp1[0].description}</p>
                </div>
                <div className="space-y-4">
                  <img
                    // Uncomment the src once data is available for the image
                    src={allTemp1[0].img[0]}
                    alt={allTemp1[0].title}
                    className="w-full max-w-4xl rounded-lg object-cover"
                  />
                  <div className="text-lg font-semibold">
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
    </>
  );
};

export default PropertyDetails;
