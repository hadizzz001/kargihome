import localFont from "next/font/local";
import "./globals.css"; 
 
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
  <meta charSet="utf-8" /> 
 
  {/* Free Cookie Consent Notice Banner by ComplyDog at https://complydog.com/free-cookie-consent-banner */}
  <title>
    Estate Agents In Prestwich, Manchester - Aubrey Lee &amp; Company
  </title>
  <meta
    name="description"
    content="Aubrey Lee are one of north Manchester's leading estate agents covering Prestwich, Salford & Whitefield"
  />
  <meta
    name="keywords"
    content="Prestwich Estate Agents,Lettings Agents,Property For Sale,Property For Rent,Property,Houses,Homes"
  />
  <meta name="author" content="www.acquaintcrm.co.uk" />
  <meta name="robots" content="index,follow,noodp,noydir" />
  <meta name="websiteversion" content="2.2" />
  <meta
    name="google-site-verification"
    content="Yddg0IAuvENf0bk3uTb6UMEracryJuOvRoBJsr4OXUY"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto+Slab|Open+Sans|Marck+Script"
    rel="stylesheet"
    type="text/css"
  />
  <link rev="made" href="mailto:webmaster@brightlogic.co.uk" />
  <link rel="icon" type="image/png" href="images/AUBR/site.ico" />
  <link rel="shortcut icon" type="x-icon" href="images/AUBR/site.ico" />
  <link rel="sitemap" type="application/xml" href="images/AUBR/sitemap.xml" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="Aubrey Lee & Company"
    href="images/AUBR/rss.xml"
  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Estate Agents In Prestwich, Manchester" />
  <meta
    name="twitter:description"
    content="Aubrey Lee are one of north Manchester's leading estate agents covering Prestwich, Salford & Whitefield"
  />
  <meta
    name="twitter:image"
    content="https://www.aubreylee.com/images/AUBR/logo.png"
  />
  <meta property="og:title" content="Estate Agents In Prestwich, Manchester" />
  <meta
    property="og:description"
    content="Aubrey Lee are one of north Manchester's leading estate agents covering Prestwich, Salford & Whitefield"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.aubreylee.com/images/AUBR/logo.png"
  />
  {/* Google Analytics */}
  {/* End Google Analytics */}
  {/* Mobile Meta Tag */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* IE6-8 support of HTML5 elements */}
  {/*[if lt IE 9]>
	   
	<![endif]*/}
  {/* Bootstrap CSS */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  {/* Extra CSS - moved from stylesheet.css by GJ */}
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  <link href="css/cozy-real-estate-font.css" rel="stylesheet" />
  <link href="css/owl.transitions.css" rel="stylesheet" />
  {/* Revolution Slider CSS settings */}
  <link
    rel="stylesheet"
    type="text/css"
    href="rs-plugin/css/settings.css"
    media="screen"
  />
  {/* Modernizr */}
  {/* Head place holder */}
  {/* WebScriptHeader place holder */}
  <link
    href="https://webutils.acquaintcrm.co.uk/css/sweetalert2.css"
    rel="stylesheet"
  />
  {/* Site Specific Styles */}
  <link
    rel="stylesheet"
    type="text/css"
    href="images/AUBR/stylesheet.css@cacheversion=2.css"
  />
  <link rel="stylesheet" type="text/css" href="css/system.css" />
  <link
    rel="stylesheet"
    type="text/css"
    href="images/AUBR/stylesheet2.css@cacheversion=2.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="images/AUBR/MaintenanceRequest.css"
  />
  {/* Fontawesome */}
</>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
