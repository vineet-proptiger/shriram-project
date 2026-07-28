import './shriram-theme.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { CITY_DISPLAY } from '../../lib/shriram-swargam/config'
import Script from 'next/script'

export const metadata = {
  title: 'Shriram Codename Pudhiya Chennai | 2 & 3 BHK Apartments — Thirumazhisai',
  description: 'Shriram Codename Pudhiya — Premium 2 & 3 BHK Apartments at Thirumazhisai, Chennai. Starting ₹45 Lakhs*. 8.9 Acres, 7 Towers, 1053 Apartments, 75% Open Space. Enquire Now.',
}

export default function ShriramCodenamePudhiyaLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <Script id="gtag-shriram" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </>
  )
}
