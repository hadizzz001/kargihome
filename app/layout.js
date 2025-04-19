import localFont from "next/font/local";
import "./globals.css";   
import WhatsAppIcon from './component/WhatsAppIcon';
import { LanguageProvider } from './contexts/LanguageContext';

 
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

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
  <meta charSet="utf-8" /> 
 
  <title>
    kargihome
  </title>
  <meta
    name="description"
    content="kargihome is a real estate agency based in Georgia"
  />
  <meta
    name="keywords"
    content="Estate Agents,Lettings Agents,Property For Sale,Property For Rent,Property,Houses,Homes"
  />
 
 
  <link
    href="https://fonts.googleapis.com/css?family=Roboto+Slab|Open+Sans|Marck+Script"
    rel="stylesheet"
    type="text/css"
  />
  
  <link rel="icon" type="image/png" href="https://ucarecdn.com/2fae4aff-4e02-4ef4-a21d-f5109e0a7a25/logo.jpg" />
  <link rel="shortcut icon" type="x-icon" href="https://ucarecdn.com/2fae4aff-4e02-4ef4-a21d-f5109e0a7a25/logo.jpg" />
   
 
  
  <meta property="og:title" content="kargihome is a real estate agency based in Georgia." />
  <meta
    property="og:description"
    content="kargihome is a real estate agency based in Georgia."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dqzzfskhw/image/upload/v1745011505/logo1_ld3wc1.jpg"
  />
 
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 
	   
 
  <link href="css/bootstrap.min.css" rel="stylesheet" />
 
  <link href="css/font-awesome.min.css" rel="stylesheet" />
  <link href="css/cozy-real-estate-font.css" rel="stylesheet" />
  <link href="css/owl.transitions.css" rel="stylesheet" />
 
  <link
    rel="stylesheet"
    type="text/css"
    href="rs-plugin/css/settings.css"
    media="screen"
  />
 
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
         <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />




<link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/flag-icon-css/css/flag-icon.min.css"
          />





</>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
        <WhatsAppIcon />
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
