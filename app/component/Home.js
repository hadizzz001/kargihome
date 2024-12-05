"use client";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link'; // Import Link for navigation
import Header from '../component/Header';
import Footer from '../component/Footer';

const HomePost = ({ exhibitions }) => {
    // Define chunkArray function to split the exhibitions array
    const chunkArray = (arr, n) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += n) {
            chunkedArr.push(arr.slice(i, i + n));
        }
        return chunkedArr;
    };

    const exhibitionChunks = chunkArray(exhibitions, 2);

    return (
        <>
            <div id="wrapper">
                <Header />

                <section className="container">
                    <main className="mb-auto">
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-black-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                                    Properties
                                </h1>
                            </div>

                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {exhibitionChunks.length > 0 ? (
                                    exhibitionChunks.map((chunk, index) => (
                                        <li key={index} className="py-12">
                                            {chunk.map((item, subIndex) => {
                                                return (
                                                    <article key={subIndex}>
                                                        <div className="flex flex-col xl:flex-row xl:space-x-8 space-y-8 xl:space-y-0">
                                                            <div className="xl:w-1/3">
                                                                {/* Show only the first image */}
                                                                {item.fields.images && Array.isArray(item.fields.images) && item.fields.images.length > 0 && (
                                                                    <div className="mb-4">
                                                                        <img
                                                                            key={0} // Always the first image
                                                                            src={item.fields.images[0].fields.file.url}
                                                                            className="w-full h-auto object-cover rounded-md" // Improved responsive styling
                                                                            alt={item.fields.images[0].fields.title || "Exhibition Image"}
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="xl:w-2/3 space-y-5 ">
                                                                <div className="space-y-6">
                                                                    <div>
                                                                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                                            <a
                                                                                className="text-gray-900 dark:text-black-100"
                                                                                href={`/${item.sys.id}`}
                                                                            >
                                                                                {item.fields.title}
                                                                            </a>
                                                                        </h2>
                                                                        <div className="flex flex-wrap">
                                                                            {item.fields.tags?.map((tag, tagIndex) => (
                                                                                <a
                                                                                    key={tagIndex}
                                                                                    className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                                                    href={`/tags/${tag}`}
                                                                                >
                                                                                    {tag}
                                                                                </a>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                                        {documentToReactComponents(item.fields.description)}
                                                                    </div>
                                                                </div>
                                                                <div className="text-base font-medium leading-6 " style={{marginBottom: "2em"}}>
                                                                    <Link
                                                                        href={`/${item.sys.id}`}
                                                                        passHref
                                                                        aria-label={`Read more: ${item.fields.title}`}
                                                                    >
                                                                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                                                                            Read More →
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                );
                                            })}
                                        </li>
                                    ))
                                ) : (
                                    <div className="text-center mt-5 mb-5">
                                        <h2 className="text-dark text-xl font-bold">No Exhibitions Available</h2>
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

export default HomePost;
