import React from 'react' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 
import Image from 'next/image';  
 


const fetchContentfulEntry = async (id) => {
    try {
      const entry = await client.getEntry(id);
      return entry;
    } catch (error) {
      console.error('Error fetching entry:', error);
      return null;
    }
  };
   

const Data = async ({ params }) => {
    const { id } = await params;  // Await params to access id
  const data = await fetchContentfulEntry(id);

  if (!data) {
    return notFound();
  }

  const { title, description, images, price } = data.fields;

  return (
    <div className="container mx-auto px-4 my-8">
    {images && images.length > 0 && (
        <div className="relative">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {images.map((image, index) => (
                <div key={index} className="swiper-slide mt-20 ">
                  <Image
                    src={`https:${image.fields.file.url}`}
                    alt={image.fields.title || 'Property Image'}
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                </div>
              ))}
            </div>
            {/* Add navigation buttons for the slider */}
            <div className=" swiper-button-next absolute top-1/2 right-2 z-10 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"></div>
            <div className=" swiper-button-prev absolute top-1/2 left-2 z-10 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"></div>
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold text-center mt-20 mb-4">{title}</h1>

      <div className="rich-text-content text-center mb-6 text-gray-700 mt-20">
        {/* Render the description using documentToReactComponents */}
        {description && documentToReactComponents(description)}
      </div>

      <p className="text-center text-xl mt-4 font-semibold text-gray-800">
        <strong>Price:</strong> ${price}
      </p>
    </div>
  )
}

export default Data