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
                href="mailto:info@hadizproductions"
              >
                Email Us
              </a>
            </li>
          </ul>
        </div>
 
      </div>
    </div>
    {/* BEGIN COPYRIGHT */}
    <div id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            © 2024 hadizproductions &amp; Company
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
      href="https://www.facebook.com/hadizproductions8000"
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