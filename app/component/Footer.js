import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
    <div id="footer-top" className="container">
      <div className="row">
        <div id="footer-contactus" className="block col-sm-4">
          <h3>Send Us A Message</h3>
          <ul className="footer-contacts">
            <li>
              <i className="fa-solid fa-location-dot" /> 39 Bury New Road,
              Prestwich, Manchester, M25 9JY{" "}
            </li>
            <li>
              <i className="fa-solid fa-phone" />{" "}
              <a
                id="repContactUs_repContactUsTelephone_0_hypContactUsTelephone_0"
                href="tel:01617988000"
              >
                0161 798 8000
              </a>
            </li>
            <li>
              <i className="fa-solid fa-envelope" />{" "}
              <a
                id="repContactUs_repContactUsEmail_0_hypContactUsEmail_0"
                href="mailto:info@kargihome.com"
              >
                Email Us
              </a>
            </li>
          </ul>
        </div>
        <div id="footer-quicklinks" className="block col-sm-4">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a
                id="repFooterLinks_hypFooterLink_0"
                href="properties.aspx@mode=0&showsearch=1.html"
              >
                Property For Sale
              </a>
            </li>
            <li>
              <a
                id="repFooterLinks_hypFooterLink_1"
                href="properties.aspx@mode=1&showsearch=1.html"
              >
                Property To Let
              </a>
            </li>
            <li>
              <a
                id="repFooterLinks_hypFooterLink_2"
                href="https://www.kargihome.com/register.aspx"
              >
                Register For Updates
              </a>
            </li>
          </ul>
        </div>
        <div id="footer-latest" className="block col-sm-4">
          <h3>Latest Properties</h3>
          <ul className="footer-listings">
            <li>
              <div className="image">
                <a
                  id="repLatestListings_hypFooterLastestListingsImage_0"
                  title="Property For Sale Bettwood Drive, Manchester"
                  href="property-for-sale-bettwood-drive-manchester-pi-aubr7592.htm"
                >
                  <img
                    id="repLatestListings_imgFooterLastestListings_0"
                    src="https://www.brightlogic-estateagents.co.uk/AUBR/upload/7592-THUMB-1.jpg"
                    alt="Bettwood Drive, Crumpsall"
                  />
                </a>
              </div>
              <p>
                <a
                  id="repLatestListings_hypFooterLastestListings_0"
                  href="property-for-sale-bettwood-drive-manchester-pi-aubr7592.htm"
                >
                  Bettwood Drive, Crumpsall<span>+</span>
                </a>
              </p>
            </li>
            <p />
            <li>
              <div className="image">
                <a
                  id="repLatestListings_hypFooterLastestListingsImage_1"
                  title="Property For Sale Singleton Road, Salford"
                  href="property-for-sale-singleton-road-salford-pi-aubr6375.htm"
                >
                  <img
                    id="repLatestListings_imgFooterLastestListings_1"
                    src="https://www.brightlogic-estateagents.co.uk/AUBR/upload/6375-THUMB-1.jpg"
                    alt="Singleton Road, Salford"
                  />
                </a>
              </div>
              <p>
                <a
                  id="repLatestListings_hypFooterLastestListings_1"
                  href="property-for-sale-singleton-road-salford-pi-aubr6375.htm"
                >
                  Singleton Road, Salford<span>+</span>
                </a>
              </p>
            </li>
            <p />
            <li>
              <div className="image">
                <a
                  id="repLatestListings_hypFooterLastestListingsImage_2"
                  title="Property For Sale Norwood Avenue, Salford"
                  href="property-for-sale-norwood-avenue-salford-pi-aubr7597.htm"
                >
                  <img
                    id="repLatestListings_imgFooterLastestListings_2"
                    src="https://www.brightlogic-estateagents.co.uk/AUBR/upload/7597-THUMB-1.jpg"
                    alt="Norwood Avenue, Salford"
                  />
                </a>
              </div>
              <p>
                <a
                  id="repLatestListings_hypFooterLastestListings_2"
                  href="property-for-sale-norwood-avenue-salford-pi-aubr7597.htm"
                >
                  Norwood Avenue, Salford<span>+</span>
                </a>
              </p>
            </li>
            <p />
          </ul>
        </div>
      </div>
    </div>
    {/* BEGIN COPYRIGHT */}
    <div id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            © 2024 Kargihome &amp; Company
            | Software &amp; Web Design by{" "}
            <a
              id="hypAcquaintWebSite"
              href="https://www.hadizproductions.com"
              target="_blank"
            >
              Hadiz Productions
            </a>



            <ul className="social-networks">
  <li>
    <a
      id="hypFacebook"
      href="https://www.facebook.com/kargihome8000"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-facebook-f" />
    </a>
  </li>
  <li>
    <a
      id="hypLinkedIn"
      href="https://www.linkedin.com/company/aubrey-lee-&-co.?trk=biz-companies-cym"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-linkedin" />
    </a>
  </li>
  <li>
    <a id="hypRSS" href="images/AUBR/rss.xml" target="_blank" rel="noopener noreferrer">
      <i className="fa-solid fa-rss" />
    </a>
  </li>
</ul>










          </div>
        </div>
      </div>
    </div>
 
  </footer>
  )
}

export default Footer