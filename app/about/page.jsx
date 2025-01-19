import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const page = () => {
  return (
    <>
      {/* WebScriptBodyTop place holder */}
      {/* BEGIN WRAPPER */}
      <div id="wrapper">
        <Header />
        <div className="content">
          <form method="post" action="./about-us.htm?pagename=about-us" id="ctl00">
            <div className="aspNetHidden">
              <input
                type="hidden"
                name="__VIEWSTATE"
                id="__VIEWSTATE"
                defaultValue="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"
              />
            </div>
            <div className="aspNetHidden">
              <input
                type="hidden"
                name="__VIEWSTATEGENERATOR"
                id="__VIEWSTATEGENERATOR"
                defaultValue="21418F34"
              />
            </div>
            <div 
  id="banner-container"
  style={{
    backgroundImage: 'url("https://ucarecdn.com/72b4c4f2-e292-4978-9bd8-61881ac3f30d/1e31d096ecf745368c9f67cf074f69ac.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    height: 240,
    position: "relative" // This is needed for absolute positioning inside the container
  }}
>
  <div className="container">
    <div className="col-sm-12">
      <h1
        id="banner-title"
        data-animation-direction="from-left"
        data-animation-delay={50}
        style={{ top: 105 }}
        className="animate-from-left animation-from-left"
      />
    </div>
  </div>

  {/* Added text with absolute positioning */}
  <div
    style={{
      position: "absolute",
      bottom: "10px",  // Position from the bottom of the container
      right: "10px",   // Position from the right of the container
      fontSize: "12px",  // Adjust font size
      color: "#fff",    // Text color (white)
      fontFamily: "Arial, sans-serif", // Optional: change the font
    }}
  >
    Designed by Freepik
  </div>
</div>

            <div
              id="banner-container"
              style={{
                backgroundImage: 'url("images/AUBR/blank.jpg")',
                backgroundRepeat: "repeat-x"
              }}
            >
              <div className="container">
                <div className="col-sm-12">
                  <h1
                    id="banner-title"
                    data-animation-direction="from-left"
                    data-animation-delay={50}
                    style={{}}
                    className="animate-from-left animation-from-left"
                  >
                    About hadizproductions
                  </h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="col-sm-12 ">
  

                <p
                  data-animation-direction="from-left"
                  data-animation-delay={50}
                  className="animate-from-left animation-from-left "
                >
                  hadizproductions is a real estate agency based in Tbilisi Georgia. Our primary tasks are :

                  <ul className="list-disc list-inside space-y-4  m-5 mb-20">
                    <li>Help to buy both commercial and residential properties.</li>
                    <li>Help to rent both commercial and residential properties.</li>
                    <li>Help to find room share or roommates.</li>
                    <li>Help to arrange mortgage through our partners.</li>
                  </ul>

                  <div className='mt-5'><a href=''>A guide for Renters</a></div><br />
                  <div className='mt-5' ><a href=''>A guide for Buyers</a></div><br />
                  <div className='mt-5' ><a href=''>A guide for Sellers</a></div><br />
                  <div className='mt-5' ><a href=''>A Guide for Roommates/room share</a></div><br />




                </p>











              </div>
            </div>
          </form>
        </div>


        <div className="mb-16">
  <dh-component>
    <div className="container flex justify-center mx-auto pt-16">
      <div>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Our Team Members
        </h1>
      </div>
    </div>
    <div className="w-full bg-gray-100 px-10 pt-10">
      <div className="container mx-auto">
        <div
          role="list"
          aria-label="Behind the scenes People"
          className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <div
            role="listitem"
            className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
          >
            <div className="rounded overflow-hidden shadow-md bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                    alt="Display Picture of Andres Berlin"
                    role="img"
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  Andres Berlin
                </h1>
                <p className="text-gray-800 text-sm text-center">
                  Chief Executive Officer
                </p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  The CEO's role in raising a company's corporate IQ is to
                  establish an atmosphere that promotes knowledge sharing and
                  collaboration.
                </p>
                <div className="pt-4">
                  <p className="text-gray-800 text-sm">
                    <span className="font-bold">Email:</span> andres.berlin@example.com
                  </p>
                  <p className="text-gray-800 text-sm">
                    <span className="font-bold">Number:</span> +1 234 567 8901
                  </p>
                  <p className="text-gray-800 text-sm">
                    <span className="font-bold">Language:</span> English, Spanish
                  </p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dh-component>
</div>


        <Footer />
      </div>

    </>

  )
}

export default page