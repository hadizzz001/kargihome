"use client"
// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';  
import Nav from './Nav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header id="header">
      <div className="sticky-wrapper menu1">
        <div id="nav-section" className="stuck">
          <div id="topbar">
            <div className="container">
              <div className="row">

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <a style={{ textIndent: 'none', display: "inline-grid", marginTop: "2em", textDecoration: "none" }} href="/">
                  <h1 style={{ color: 'white', fontFamily: 'Open Sans', fontWeight: 'bolder' }}>kargihome<b style={{ color: 'orange', fontSize: '50px' }}>.</b>com</h1>
                </a>
                {/* BEGIN MAIN MENU */}

<Nav />

                <nav className="navbar"> 


                  <ul className="nav navbar-nav">
                    <li>
                      <a href="/"> Home</a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="/about"
                        data-toggle="dropdown"
                        data-hover="dropdown"
                      >
                        About

                      </a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="/sale"
                        data-toggle="dropdown"
                        data-hover="dropdown"
                      >
                        Sales

                      </a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="/letting"
                        data-toggle="dropdown"
                        data-hover="dropdown"
                      >
                        Letting

                      </a>
                    </li>
                  </ul>
                </nav>
 
                {/* END MAIN MENU */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
