import './shriram-theme.css'
import { CITY_DISPLAY } from '../../lib/shriram-swargam/config'
import Script from 'next/script'

export const metadata = {
  title: 'Shriram Codename Pudhiya Chennai | 2 & 3 BHK Apartments — Thirumazhisai',
  description: 'Shriram Codename Pudhiya — Premium 2 & 3 BHK Apartments at Thirumazhisai, Chennai. Starting ₹45 Lakhs*. 8.9 Acres, 7 Towers, 1053 Apartments, 75% Open Space. Enquire Now.',
  alternates: {
    canonical: 'https://shriramprojects.in/shriram-swargam',
  },
  openGraph: {
    title: 'Shriram Codename Pudhiya Chennai | 2 & 3 BHK Apartments — Thirumazhisai',
    description: 'Shriram Codename Pudhiya — Premium 2 & 3 BHK Apartments at Thirumazhisai, Chennai. Starting ₹45 Lakhs*. 8.9 Acres, 7 Towers, 1053 Apartments, 75% Open Space.',
    url: 'https://shriramprojects.in/shriram-swargam',
    siteName: 'Shriram Properties',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function ShriramCodenamePudhiyaLayout({ children }) {
  return (
    <>
      {/* GTM-575H8R87 is loaded globally from app/layout.js. */}
      <Script id="gtm-p899fkzc" strategy="afterInteractive">{`
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({ city: ${JSON.stringify(CITY_DISPLAY)} });
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P899FKZC');
      `}</Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P899FKZC"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {children}
    </>
  )
}
  
