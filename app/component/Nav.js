import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <>   
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 focus:outline-none md:hidden"
              style={{float:'right',marginTop:'3em'}}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button> 

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-lg font-medium hover:text-gray-200 transition text-white">
              Home
            </Link>
            <Link href="/about" className="block text-lg font-medium hover:text-gray-200 transition text-white">
              About
            </Link>
            <Link href="/listing" className="block text-lg font-medium hover:text-gray-200 transition text-white">
            Listings
            </Link>
            <Link href="/financing" className="block text-lg font-medium hover:text-gray-200 transition text-white">
            Financing
            </Link>
            <Link href="/contact" className="block text-lg font-medium hover:text-gray-200 transition text-white">
              Contact
            </Link>
          </div>
        </div>
      )} 
      </>
  );
};

export default Navbar;
