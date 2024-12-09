"use client";
import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { fetchTemp } from "../../utils/index";

const Body = () => {
  const [allTemp, setTemp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTemp();
      setTemp(data);
    };
    fetchData();
  }, []);


  console.log(allTemp);
  

  return (
    <>
      <div id="wrapper">
        <Header />

        <section className="container">
          <main className="mb-auto">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  Properties
                </h1>
              </div>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {allTemp && allTemp.length > 0 ? (
                  allTemp.map((item) => (
                    <li key={item.id} className="py-12">
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
                                  <a
                                    className="text-gray-900 dark:text-gray-100"
                                    href={`/product?id=${item.id}`}
                                  >
                                    {item.title}
                                  </a>
                                </h2>
                                <div className="flex flex-wrap">
                                  {item.tags &&
                                    item.tags.map((tag) => (
                                      <a
                                        key={tag}
                                        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                        href={`/tags/${tag}`}
                                      >
                                        {tag}
                                      </a>
                                    ))}
                                </div>
                              </div>
                              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                {item.description}
                              </div>
                            </div>
                            <div className="text-base font-medium leading-6">
                              <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                aria-label={`Read more: "${item.title}"`}
                                href={`/product?id=${item.id}`}
                              >
                                Read more →
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))
                ) : (
                  <div className="text-center text-gray-500">No properties available.</div>
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
