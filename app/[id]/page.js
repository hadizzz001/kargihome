import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from '../lib/contentful'; // Updated import path
 
import Header from '../component/Header';
import Footer from '../component/Footer';
import Slide from '../component/Slide';
 
// Fetch the entry from Contentful
const fetchContentfulEntry = async (id) => {
  try {
    const entry = await client.getEntry(id);
    return entry;
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
};

let imageUrls;
const EntryPage = async ({ params }) => {
  const { id } = await params;  // Await params to access id
  const data = await fetchContentfulEntry(id);

  if (!data) {
    return notFound();
  }

  const { title, description, images, price } = data.fields;

  // Log only the image URLs
  if (images && images.length > 0) {
    imageUrls = images.map(image => image.fields.file.url); // Extract image URLs
    console.log("Image URLs are:", imageUrls);
  } else {
    console.log("No images available");
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 my-8">
        <Slide data={imageUrls} />
        <h1 className="text-3xl font-bold text-center mt-20 mb-4">{title}</h1>

        <div className="rich-text-content text-center mb-6 text-gray-700 mt-20">
          {/* Render the description using documentToReactComponents */}
          {description && documentToReactComponents(description)}
        </div>

        <p className="text-center text-xl mt-4 font-semibold text-gray-800">
          <strong>Price:</strong> ${price}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default EntryPage;
