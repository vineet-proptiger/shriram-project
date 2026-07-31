import './shriram-theme.css'
import { GoogleTagManager } from '@next/third-parties/google'
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
      {/* GTM script → <head> me, noscript iframe → <body> me — automatically */}
      <GoogleTagManager gtmId="GTM-P899FKZC" />
      {/* City push to dataLayer */}
      <Script id="gtm-city-push" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ city: ${JSON.stringify(CITY_DISPLAY)} });
      `}</Script>
      {children}
    </>
  )
}
  
