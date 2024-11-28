import React from 'react'

const page = () => {
  return (
    <>
  {/* WebScriptBodyTop place holder */}
  {/* BEGIN WRAPPER */}
  <div id="wrapper">
    {/* BEGIN HEADER */}
    <header id="header">
      <div className="sticky-wrapper" style={{ height: 181 }}>
        <div id="nav-section" className="stuck">
          <div id="topbar">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul id="top-buttons">
                    <li>
                      <a
                        id="hypTopBarTelephone"
                        title="Call Us"
                        href="tel:0161%20798%208000"
                      >
                        <i className="fa-solid fa-phone" aria-hidden="true" />{" "}
                        0161 798 8000
                      </a>
                    </li>
                    <li>
                      <a
                        id="hypTopBarEmail"
                        title="Email Us"
                        href="mailto:viewings@aubreylee.com"
                      >
                        <i
                          className="fa-solid fa-envelope"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        id="hypContactUs"
                        title="Contact Us"
                        href="contact.aspx"
                      >
                        <i className="fa-solid fa-user" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        id="hypTopBarFacebook"
                        title="Facebook"
                        href="https://www.facebook.com/AubreyLee8000"
                        target="_blank"
                      >
                        <i
                          className="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        id="hypTopBarLinkedIn"
                        title="LinkedIn"
                        href="https://www.linkedin.com/company/aubrey-lee-&-co.?trk=biz-companies-cym"
                        target="_blank"
                      >
                        <i
                          className="fa-brands fa-linkedin"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <a href="default.aspx" className="nav-logo">
                  <img
                    id="imgLogo"
                    src="images/AUBR/logo.png"
                    alt="Aubrey Lee &amp; Company"
                  />
                </a>
                {/* BEGIN MAIN MENU */}
                <nav className="navbar">
                  <button id="nav-mobile-btn">
                    <i className="fa-solid fa-bars" aria-hidden="true" />
                  </button>
                  <ul className="nav navbar-nav">
                    <li>
                      <a href="default.aspx?menuID=1"> Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="#" data-toggle="dropdown" data-hover="dropdown">
                        About
                        <b className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="about-us.htm">About Us</a>
                        </li>
                        <li>
                          <a href="meet-the-team.htm">Meet The Team</a>
                        </li>
                        <li>
                          <a href="testimonials.aspx?menuID=22">Testimonials</a>
                        </li>
                        <li>
                          <a
                            href="/images/aubr/misc/In_House_Complaints_Procedure.pdf"
                            target="_new"
                          >
                            Complaints Procedure
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" data-toggle="dropdown" data-hover="dropdown">
                        Sales
                        <b className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="properties.aspx?mode=0&showsearch=1&menuID=30">
                            Properties For Sale
                          </a>
                        </li>
                        <li>
                          <a href="properties.aspx?mode=0&showsearch=1&commercial=1&menuID=31">
                            Commercial Properties For Sale
                          </a>
                        </li>
                        <li>
                          <a href="selling.htm">Selling</a>
                        </li>
                        <li>
                          <a href="register.aspx?mode=2&menuID=34">
                            Free Valuations
                          </a>
                        </li>
                        <li>
                          <a href="register.aspx?mode=0&menuID=35">
                            Register For Updates
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" data-toggle="dropdown" data-hover="dropdown">
                        Letting
                        <b className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="properties.aspx?mode=1&showsearch=1&menuID=40">
                            Properties To Let
                          </a>
                        </li>
                        <li>
                          <a href="properties.aspx?mode=1&showsearch=1&commercial=1&menuID=41">
                            Commercial Properties To Let
                          </a>
                        </li>
                        <li>
                          <a href="landlords.htm">Statement Of Fees</a>
                        </li>
                        <li>
                          <a href="register.aspx?mode=3&menuID=44">
                            Free Valuations
                          </a>
                        </li>
                        <li>
                          <a href="register.aspx?mode=1&menuID=45">
                            Register For Updates
                          </a>
                        </li>
                        <li>
                          <a
                            href="/images/aubr/misc/CMPMemberShipCertificate.pdf"
                            target="_new"
                          >
                            Client Money Protection Certificate
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="news.aspx?menuID=8"> News</a>
                    </li>
                    <li>
                      <a href="contact.aspx?menuID=10"> Contact</a>
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
    {/* END HEADER */}
    {/* BEGIN CONTENT WRAPPER */}
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
            backgroundImage: 'url("images/AUBR/image01.jpg")',
            backgroundRepeat: "repeat-x",
            height: 240
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
                About Aubrey Lee
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-sm-12 ">
            <p
              data-animation-direction="from-left"
              data-animation-delay={50}
              className="animate-from-left animation-from-left"
            >
              Aubrey Lee and company was established in 1952 and is situated in
              Prestwich, in the Northwest of England. There are also two,
              independently owned, associate branches in Blackley and Crumpsall.
            </p>
            <p
              data-animation-direction="from-left"
              data-animation-delay={50}
              className="animate-from-left animation-from-left"
            >
              We specialise in the sale, letting and management of residential
              property and we are members of The Property Ombudsman Service
              (TPOS).
            </p>
            <p
              data-animation-direction="from-left"
              data-animation-delay={50}
              className="animate-from-left animation-from-left"
            >
              As one of the area's largest independent Estate Agents, with more
              than 65 years combined experience in the Manchester property
              market, here at Aubrey Lee we are able to service all requirements
              relating to the sale, letting or management of your residential
              and commercial property.
            </p>
            <p
              data-animation-direction="from-left"
              data-animation-delay={50}
              className="animate-from-left animation-from-left"
            >
              Thanks to our friendly and dedicated team who have helped to
              develop Aubrey Lee into the successful company it is today, we
              promise to provide a service of the highest possible standard.
            </p>
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
    {/* END MAIN CONTENT */}
    {/* END CONTENT WRAPPER */}
    {/* BEGIN FOOTER */}
    <footer id="footer">
      <div id="footer-top" className="container">
        <div className="row">
          <div id="footer-contactus" className="block col-sm-4">
            <h3>Send Us A Message</h3>
            <ul className="footer-contacts">
              <li>
                <i className="fa-solid fa-location-dot" aria-hidden="true" /> 39
                Bury New Road, Prestwich, Manchester, M25 9JY{" "}
              </li>
              <li>
                <i className="fa-solid fa-phone" aria-hidden="true" />{" "}
                <a
                  id="repContactUs_repContactUsTelephone_0_hypContactUsTelephone_0"
                  href="tel:01617988000"
                >
                  0161 798 8000
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" aria-hidden="true" />{" "}
                <a
                  id="repContactUs_repContactUsEmail_0_hypContactUsEmail_0"
                  href="mailto:viewings@aubreylee.com"
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
                  href="properties.aspx?mode=0&showsearch=1"
                >
                  Property For Sale
                </a>
              </li>
              <li>
                <a
                  id="repFooterLinks_hypFooterLink_1"
                  href="properties.aspx?mode=1&showsearch=1"
                >
                  Property To Let
                </a>
              </li>
              <li>
                <a id="repFooterLinks_hypFooterLink_2" href="register.aspx">
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
                    title="Property For Sale Vine Street, Salford"
                    href="property-for-sale-vine-street-salford-pi-aubr7633.htm"
                  >
                    <img
                      id="repLatestListings_imgFooterLastestListings_0"
                      src="https://www.brightlogic-estateagents.co.uk/AUBR/upload/7633-THUMB-1.jpg"
                      alt="The Mount, Vine Street, Salford"
                    />
                  </a>
                </div>
                <p>
                  <a
                    id="repLatestListings_hypFooterLastestListings_0"
                    href="property-for-sale-vine-street-salford-pi-aubr7633.htm"
                  >
                    The Mount, Vine Street, Salford<span>+</span>
                  </a>
                </p>
              </li>
              <p />
              <li>
                <div className="image">
                  <a
                    id="repLatestListings_hypFooterLastestListingsImage_1"
                    title="Property For Sale Balmoral Grange, Prestwich, Manchester"
                    href="property-for-sale-balmoral-grange-prestwich-manchester-pi-aubr7626.htm"
                  >
                    <img
                      id="repLatestListings_imgFooterLastestListings_1"
                      src="https://www.brightlogic-estateagents.co.uk/AUBR/upload/7626-THUMB-1.jpg"
                      alt="Balmoral Grange, Prestwich"
                    />
                  </a>
                </div>
                <p>
                  <a
                    id="repLatestListings_hypFooterLastestListings_1"
                    href="property-for-sale-balmoral-grange-prestwich-manchester-pi-aubr7626.htm"
                  >
                    Balmoral Grange, Prestwich<span>+</span>
                  </a>
                </p>
              </li>
              <p />
              <li>
                <div className="image">
                  <a
                    id="repLatestListings_hypFooterLastestListingsImage_2"
                    title="Property For Sale Woodthorpe Grange, Prestwich, Manchester"
                    href="property-for-sale-woodthorpe-grange-prestwich-manchester-pi-aubr4125.htm"
                  >
                    <img
                      id="repLatestListings_imgFooterLastestListings_2"
                      src="https://www.brightlogic-estateagents.co.uk/AUBR/upload/4125-THUMB-1.jpg"
                      alt="Woodthorpe Grange, Prestwich"
                    />
                  </a>
                </div>
                <p>
                  <a
                    id="repLatestListings_hypFooterLastestListings_2"
                    href="property-for-sale-woodthorpe-grange-prestwich-manchester-pi-aubr4125.htm"
                  >
                    Woodthorpe Grange, Prestwich<span>+</span>
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
              © 2024 Aubrey Lee &amp; Company |{" "}
              <a id="hypLegalPrivacy" href="privacy-policy.htm">
                Legal &amp; Privacy
              </a>{" "}
              |{" "}
              <a id="hypSiteMap" href="sitemap.aspx">
                Sitemap
              </a>{" "}
              | Software &amp; Web Design by{" "}
              <a
                id="hypAcquaintWebSite"
                href="https://www.acquaintcrm.co.uk"
                target="_blank"
              >
                Acquaint CRM
              </a>
              {/* BEGIN SOCIAL NETWORKS */}
              <ul className="social-networks">
                <li>
                  <a
                    id="hypFacebook"
                    href="https://www.facebook.com/AubreyLee8000"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    id="hypLinkedIn"
                    href="https://www.linkedin.com/company/aubrey-lee-&-co.?trk=biz-companies-cym"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    id="hypRSS"
                    href="https://www.aubreylee.com/images/AUBR/rss.xml"
                    target="_blank"
                  >
                    <i className="fa-solid fa-rss" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              {/* END SOCIAL NETWORKS */}
            </div>
          </div>
        </div>
      </div>
      {/* END COPYRIGHT */}
      {/* BEGIN PARTNERS WRAPPER */}
      <div id="partners">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="item animate-from-bottom animation-from-bottom"
                data-animation-direction="from-bottom"
                data-animation-delay={50}
              >
                <a id="repPartners_hypPartner_0">
                  <img
                    id="repPartners_imgPartner_0"
                    src="images/AUBR/dps.png"
                    alt="DPS"
                  />
                </a>
              </div>
              <div
                className="item animate-from-bottom animation-from-bottom"
                data-animation-direction="from-bottom"
                data-animation-delay={50}
              >
                <a id="repPartners_hypPartner_1">
                  <img
                    id="repPartners_imgPartner_1"
                    src="images/AUBR/tpos-tsi-uk.png"
                    alt="The Property Ombudsman"
                  />
                </a>
              </div>
              <div
                className="item animate-from-bottom animation-from-bottom"
                data-animation-direction="from-bottom"
                data-animation-delay={50}
              >
                <a id="repPartners_hypPartner_2">
                  <img
                    id="repPartners_imgPartner_2"
                    src="images/AUBR/Uktenantdata.png"
                    alt="UK Tenant Data"
                  />
                </a>
              </div>
              <div
                className="item animate-from-bottom animation-from-bottom"
                data-animation-direction="from-bottom"
                data-animation-delay={50}
              >
                <a id="repPartners_hypPartner_3">
                  <img
                    id="repPartners_imgPartner_3"
                    src="images/AUBR/rm.png"
                    alt="Rightmove"
                  />
                </a>
              </div>
              <div
                className="item animate-from-bottom animation-from-bottom"
                data-animation-direction="from-bottom"
                data-animation-delay={50}
              >
                <a id="repPartners_hypPartner_4">
                  <img
                    id="repPartners_imgPartner_4"
                    src="images/AUBR/zoopla.png"
                    alt="Zoopla"
                  />
                </a>
              </div>
              <div
                className="item animate-from-bottom animation-from-bottom"
                data-animation-direction="from-bottom"
                data-animation-delay={50}
              >
                <a id="repPartners_hypPartner_5">
                  <img
                    id="repPartners_imgPartner_5"
                    src="images/AUBR/prime.png"
                    alt="Primelocation"
                  />
                </a>
              </div>
              <div
                className="item animate-from-bottom animation-from-bottom"
                data-animation-direction="from-bottom"
                data-animation-delay={50}
              >
                <a id="repPartners_hypPartner_6">
                  <img
                    id="repPartners_imgPartner_6"
                    src="images/AUBR/cmp.png"
                    alt="CMP "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END PARTNERS WRAPPER */}
      {/* Footer Text */}
    </footer>
    {/* END FOOTER */}
  </div>
  {/* END WRAPPER */}
  {/* Libs */}
  {/* Template Scripts */}
  {/* WebScriptBodyBottom place holder */}
  <div
    className="cdog-global cdog-global-hidden-at-start cdog-unique-13qmi6 cdog-global-show"
    style={{ zIndex: 1002 }}
  >
    <div
      id="cdog-window"
      className="cdog-window"
      data-cdog-window-powered-by="true"
      style={{ color: "rgb(28, 28, 28)", zIndex: 1002 }}
    >
      <div
        className="cdog-window-inner"
        style={{
          color: "rgb(28, 28, 28)",
          backgroundColor: "rgb(255, 255, 255)"
        }}
      >
        <div className="cdog-window-exit-button">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <path
                d="m21.8 18.3v-11.3h-3.5v11.3h-11.2v3.5h11.2v11.3h3.5v-11.3h11.2v-3.5z"
                transform="matrix(.70711 .70711 -.70711 .70711 11 -17.284)"
              />
            </svg>
          </span>
        </div>
        <div className="cdog-window-main-content">
          <div>
            <div className="cdog-window-main-content-top cdog-animation-drop-in">
              <div className="cdog-window-main-content-top-inner">
                <div className="cdog-manage-privacy-preference-center-section">
                  <h5>
                    <strong>Control Your Privacy</strong>
                  </h5>
                  <div className="cdog-window-disclaimer-text ql-editor">
                    Websites may store or retrieve information on your browser,
                    mostly in the form of cookies. This information is used to
                    personalize your experience and is not usually linked to
                    your identity. You can choose not to allow certain types of
                    cookies, but it may affect your website experience. Learn
                    more and change settings by clicking on the different
                    categories.
                  </div>
                  <div>
                    <a
                      href="#"
                      className="cdog-button cdog-button-primary"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(28, 28, 28)",
                        borderRadius: 3
                      }}
                    >
                      Allow All
                    </a>
                  </div>
                </div>
                <div className="cdog-manage-consent-preferences-section">
                  <h5>
                    <strong>Choose Which Cookies To Enable</strong>
                  </h5>
                  <div className="cdog-manage-consent-preferences-accordion">
                    <div className="cdog-accordion-drawer">
                      <input
                        className="cdog-switch"
                        type="checkbox"
                        name="strictlyNecessaryCookies"
                        disabled=""
                        id="switch"
                      />
                      <label
                        htmlFor="switch"
                        className="cdog-switch-label cdog-cookie-switch"
                      >
                        Toggle
                      </label>
                      <input
                        className="cdog-accordion-drawer-trigger"
                        id="cdog-accordion-drawer"
                        type="checkbox"
                      />
                      <label
                        className="cdog-accordion-drawer-title"
                        htmlFor="cdog-accordion-drawer"
                      >
                        <div className="cdog-accordion-drawer-title-text">
                          Strictly Necessary
                        </div>
                      </label>
                      <div className="cdog-accordion-drawer-content-wrapper">
                        <div className="cdog-accordion-drawer-content">
                          Strictly necessary cookies enable website
                          functionality and cannot be turned off. They are
                          typically set in response to actions you take, like
                          setting privacy preferences, logging in, or filling in
                          forms. You can block or receive alerts about these
                          cookies, but some website features may not work. These
                          cookies do not store personal information.
                        </div>
                      </div>
                    </div>
                    <div className="cdog-accordion-drawer">
                      <input
                        className="cdog-switch"
                        type="checkbox"
                        name="performanceCookies"
                        id="switch-2"
                      />
                      <label
                        htmlFor="switch-2"
                        className="cdog-switch-label cdog-cookie-switch"
                      >
                        Toggle
                      </label>
                      <input
                        className="cdog-accordion-drawer-trigger"
                        id="cdog-accordion-drawer-2"
                        type="checkbox"
                      />
                      <label
                        className="cdog-accordion-drawer-title"
                        htmlFor="cdog-accordion-drawer-2"
                      >
                        <div className="cdog-accordion-drawer-title-text">
                          Performance
                        </div>
                      </label>
                      <div className="cdog-accordion-drawer-content-wrapper">
                        <div className="cdog-accordion-drawer-content">
                          Performance cookies track site visits and traffic
                          sources to measure and improve site performance. They
                          provide information on popular pages and visitor
                          behavior. The information collected is anonymous. If
                          you do not allow these cookies, we will not know when
                          you have visited the site and cannot monitor its
                          performance.
                        </div>
                      </div>
                    </div>
                    <div className="cdog-accordion-drawer">
                      <input
                        className="cdog-switch"
                        type="checkbox"
                        name="targetingCookies"
                        id="switch-3"
                      />
                      <label
                        htmlFor="switch-3"
                        className="cdog-switch-label cdog-cookie-switch"
                      >
                        Toggle
                      </label>
                      <input
                        className="cdog-accordion-drawer-trigger"
                        id="cdog-accordion-drawer-3"
                        type="checkbox"
                      />
                      <label
                        className="cdog-accordion-drawer-title"
                        htmlFor="cdog-accordion-drawer-3"
                      >
                        <div className="cdog-accordion-drawer-title-text">
                          Targeting
                        </div>
                      </label>
                      <div className="cdog-accordion-drawer-content-wrapper">
                        <div className="cdog-accordion-drawer-content">
                          Targeting cookies are cookies that our advertising
                          partners may set on our site. They use them to create
                          a profile of your interests and show relevant ads on
                          other sites. They do not store personal information,
                          but use your browser and internet device's unique ID.
                          Without these cookies, you will see less targeted ads.
                        </div>
                      </div>
                    </div>
                    <div className="cdog-accordion-drawer">
                      <input
                        className="cdog-switch"
                        type="checkbox"
                        name="functionalCookies"
                        id="switch-4"
                      />
                      <label
                        htmlFor="switch-4"
                        className="cdog-switch-label cdog-cookie-switch"
                      >
                        Toggle
                      </label>
                      <input
                        className="cdog-accordion-drawer-trigger"
                        id="cdog-accordion-drawer-4"
                        type="checkbox"
                      />
                      <label
                        className="cdog-accordion-drawer-title"
                        htmlFor="cdog-accordion-drawer-4"
                      >
                        <div className="cdog-accordion-drawer-title-text">
                          Functional
                        </div>
                      </label>
                      <div className="cdog-accordion-drawer-content-wrapper">
                        <div className="cdog-accordion-drawer-content">
                          Functional cookies improve your website experience
                          through enhanced functionality and personalization.
                          They are set by us or third-party providers. Without
                          them, some or all of these services may not work
                          properly.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cdog-manage-consent-preferences-button">
                    <a
                      href="#"
                      className="cdog-button cdog-button-primary"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(28, 28, 28)",
                        borderRadius: 3
                      }}
                    >
                      Confirm My Choices
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cdog-window-main-content-bottom">
              <div className="cdog-window-main-content-bottom-inner" />
            </div>
          </div>
        </div>
        <div className="show">
          <a
            href="https://complydog.com/powered-by-complydog/cookie-consent-popup?utm_source=ComplyDog%20Cookie%20Popup%20(via%20Free%20Cookie%20Tool)&utm_medium=ComplyDog%20Window&utm_campaign=https%3A%2F%2Fwww.aubreylee.com%2Fabout-us.htm&company_name=&company_logo_image_url=&goal=&from_free_cookie_tool_website=true"
            target="_blank"
            rel="nofollow noopener"
            className="cdog-window-powered-by"
          >
            <div className="cdog-window-powered-by-inner">
              <span>Compliance powered by</span>
              <span className="cdog-window-powered-by-inner-logo">
                <svg
                  className="cdog-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 140 21"
                >
                  <g fillRule="evenodd">
                    <path
                      transform="translate(24.5)"
                      d="m8.7284 15.966c-4.1698 0-7.4753-3.4136-7.4753-7.6265 0-4.213 3.3056-7.6265 7.4753-7.6265 2.0957 0 3.9753 0.8642 5.2716 2.2469l-1.0154 0.90741c-1.0586-1.1235-2.5926-1.8148-4.2562-1.8148-3.392 0-6.0494 2.8302-6.0494 6.287 0 3.4568 2.6574 6.287 6.0494 6.287 1.6636 0 3.1759-0.69136 4.2562-1.8148l1.0154 0.90741c-1.2963 1.3827-3.1759 2.2469-5.2716 2.2469zm12.293 0c-2.8735 0-5.2716-2.0957-5.2716-5.2932 0-3.1975 2.3981-5.2284 5.2716-5.2284s5.2932 2.0309 5.2932 5.2284c0 3.1975-2.4198 5.2932-5.2932 5.2932zm0-1.3179c2.1173 0 3.9105-1.5772 3.9105-3.9753 0-2.3765-1.7932-3.9105-3.9105-3.9105-2.1389 0-3.8889 1.534-3.8889 3.9105 0 2.3981 1.75 3.9753 3.8889 3.9753zm20.136-9.2037c2.4414 0 3.9969 1.642 3.9969 4.429v5.8765h-1.3827v-5.8117c0-1.9444-1.1667-3.1543-2.8302-3.1543-1.9012-0.021605-3.284 1.3611-3.1327 3.8241l-0.021605-0.08642v5.2284h-1.3611v-5.8117c0-1.966-1.1667-3.1543-2.7654-3.1543-1.6204 0-3.1759 0.95062-3.2191 3.3704v5.5957h-1.3827v-10.09h1.3827v1.8148c0.51852-1.3395 1.966-2.0309 3.4568-2.0309 1.642 0 2.9815 0.8642 3.5432 2.4198 0.73457-2.0093 2.4846-2.4198 3.716-2.4198zm12.725 0c2.8302 0 5.1204 2.2037 5.1204 5.2716 0 3.0679-2.2901 5.25-5.1204 5.25-1.7068 0-3.2623-0.79938-4.0185-2.1821v6.8704h-1.3827v-14.994h1.3827v1.9877c0.73457-1.3827 2.3333-2.2037 4.0185-2.2037zm-0.10802 9.2037c2.1389 0 3.8673-1.6852 3.8673-3.9105 0-2.2469-1.7284-3.9753-3.8673-3.9753-2.0957 0-3.9105 1.5772-3.9105 3.9105 0 2.4414 1.9012 3.9753 3.9105 3.9753zm7.9938 1.1019v-15.772h1.3827v15.772zm11.991-10.09h1.4907l-6.3302 14.994h-1.4691l2.0741-5.034-4.1698-9.9599h1.4907l3.4352 8.2531zm4.0833 10.09v-14.886h5.6389c4.213 0 6.6543 3.2407 6.6543 7.4753 0 4.213-2.4414 7.4105-6.6543 7.4105zm1.4259-1.3395h4.213c3.392 0 5.2284-2.6358 5.2284-6.071 0-3.4568-1.8364-6.1358-5.2284-6.1358h-4.213zm18.364 1.5556c-2.8735 0-5.2716-2.0957-5.2716-5.2932 0-3.1975 2.3981-5.2284 5.2716-5.2284 2.8735 0 5.2932 2.0309 5.2932 5.2284 0 3.1975-2.4198 5.2932-5.2932 5.2932zm0-1.3179c2.1173 0 3.9105-1.5772 3.9105-3.9753 0-2.3765-1.7932-3.9105-3.9105-3.9105-2.1389 0-3.8889 1.534-3.8889 3.9105 0 2.3981 1.75 3.9753 3.8889 3.9753zm16.485-8.9877h1.3827v8.5988c0 4.8827-2.1821 6.5247-5.466 6.5247-1.7068 0-3.3704-0.82099-4.3642-2.463l1.1667-0.64815c0.73457 1.1883 1.9877 1.7932 3.1975 1.7932 2.463 0 4.0833-1.2531 4.0833-5.142v-0.51852c-0.75617 1.3611-2.3333 2.1605-4.0185 2.1605-2.8086 0-5.1204-2.2037-5.1204-5.2716 0-3.0679 2.2901-5.25 5.1204-5.25 1.7068 0 3.2623 0.79938 4.0185 2.1605zm-3.9105 8.9877c2.0957 0 3.9105-1.5772 3.9105-3.9105 0-2.4414-1.9012-3.9753-3.9105-3.9753-2.1173 0-3.8457 1.6852-3.8457 3.9105 0 2.2469 1.7284 3.9753 3.8457 3.9753z"
                    />
                    <path
                      transform="matrix(1 0 0 -1 .385 19.81)"
                      d="m10.85 19.4775c-.49-.175-1.05-.4375-1.225-.5775-.1575-.1575-.5775-.4025-.9275-.5425-.3325-.14-1.225-.875-1.9775-1.6275-1.155-1.1725-1.3125-1.4-1.0675-1.575.2275-.175.2275-.2275 0-.42-.7525-.6125-.315-1.575.735-1.575.525 0 .5775-.035.4025-.3325-.1225-.2275-.1225-.49 0-.7875.14-.3675.1225-.455-.105-.455-.14 0-.21-.0875-.14-.1925.0525-.105-.0525-.42-.2625-.7-.1925-.2625-.3675-.56-.3675-.6475 0-.07-.315-.4375-.6825-.805-.6825-.6825-.7-.6825-1.155-.385-.245.1575-.6125.5425-.7875.8575-.385.63-.4725 1.8725-.14 1.8725.1575 0 .1575.0525.0175.1925-.3325.3325-1.4-.28-1.9425-1.1375-.28-.4375-.56-.7525-.6125-.7-.14.1575-.4725-1.1375-.35-1.435.0525-.14 0-.245-.1225-.245-.2975 0-.0525-1.015.385-1.645.2625-.385.2975-.525.14-.63-.4725-.2975 1.26-1.05 2.3975-1.05.3675 0 .5775-.0875.5775-.245 0-.1225.1925-.5775.42-1.015s.5075-1.33.595-1.9775c.2625-1.6275.7175-2.0475 1.4525-1.3825.2975.2625.3325.2625.595 0 .1575-.1575.4725-.28.6825-.28.595 0 .875.42.7525 1.155-.1575.9275-.0175 1.12.8225 1.12 1.015 0 2.7475.4725 3.1675.875.1925.175 1.575.665 3.0625 1.1025 2.38.6825 2.7125.8225 2.765 1.155.035.21-.07.5775-.2275.8225-.2975.455-.3325.42.91.8575.315.105.4725.9275.2625 1.4-.14.315-.14.455.07.6125.385.3325.2975 1.155-.14 1.47-.5425.385-1.19.35-1.645-.0875l-.385-.3675-.1225.56c-.0875.385-.035.63.1575.8575.1575.175.28.4025.28.5075 0 .1225.105.21.245.21.56 0 .595 1.12.0875 2.1175-.42.8575-.315 1.645.2975 2.135.56.42.525.8925-.0525 1.33-.28.21-.5775.4375-.6825.525-.4725.385-1.6625.8925-2.1175.8925-.2625 0-.805.1225-1.19.2625-.945.3325-1.7325.315-2.8525-.07z"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div
      id="cdog-widget"
      className="cdog-widget hide"
      data-cdog-widget-position="bottom-right"
      data-cdog-widget-icon="true"
      style={{ zIndex: 1002 }}
    >
      <div
        className="cdog-widget-inner cdog-is-free-cookie-tool"
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(0, 0, 0)",
          borderRadius: 12,
          maxWidth: 380
        }}
      >
        <img
          src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"%3E%3Cpath d="m12.078 0c6.587.042 11.922 5.403 11.922 12 0 6.623-5.377 12-12 12s-12-5.377-12-12c3.887 1.087 7.388-2.393 6-6 4.003.707 6.786-2.722 6.078-6zm1.422 17c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-6.837-3c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm11.337-3c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-6-1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-9-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm13.5-2c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-15-2c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6-2c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-3.5-1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="%23b9926b" fill-rule="evenodd"/%3E%3C/svg%3E'
          alt="ComplyDog"
          className="cdog-widget-icon cdog-animation-puff-in"
        />
        <div className="cdog-widget-text-and-actions cdog-animation-puff-in">
          <div className="cdog-widget-text">
            <div style={{ color: "rgb(0, 0, 0)" }}>
              We use cookies as an essential part of our website.
            </div>
          </div>
          <div className="cdog-widget-actions">
            <a
              href="#"
              className="cdog-widget-actions-button cdog-button"
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(28, 28, 28)",
                borderRadius: 3
              }}
            >
              Allow All
            </a>
            <a
              href="#"
              className="cdog-widget-actions-button cdog-button manage-settings-button"
            >
              Manage Settings
            </a>
          </div>
        </div>
        <a
          href="https://complydog.com/powered-by-complydog/cookie-consent-popup?utm_source=ComplyDog%20Cookie%20Popup%20(via%20Free%20Cookie%20Tool)&utm_medium=ComplyDog%20Widget&utm_campaign=https%3A%2F%2Fwww.aubreylee.com%2Fabout-us.htm&company_name=&company_logo_image_url=&goal=&from_free_cookie_tool_website=true"
          className="cdog-widget-powered-by"
          target="_blank"
          rel="nofollow noopener"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(0, 0, 0)",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12
          }}
        >
          Compliance powered by ComplyDog
        </a>
      </div>
    </div>
  </div>
</>

  )
}

export default page