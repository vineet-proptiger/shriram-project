import './shriram-park-63-theme.css'

import Script from 'next/script'
import { CITY_DISPLAY } from '../../lib/shriram-park-63/config'

export const metadata = {
  title: "Shriram Park 63 | Uber Luxury 3 BHK Apartments Perungalathur Chennai — Price Starting ₹1.51 Cr*",
  description:
    "Shriram Park 63 — Ready to Move-In Uber Luxury 3 BHK residences in Perungalathur, Chennai. Price starting @ ₹1.51 Cr*. 11.78-acre township, 40+ amenities, MIVAN construction, EDGE certified green building.",
  alternates: {
    canonical: 'https://shriramprojects.in/shriram-park-63',
  },
  openGraph: {
    title: "Shriram Park 63 | Uber Luxury 3 BHK Apartments Perungalathur Chennai",
    description:
      "Shriram Park 63 — Ready to Move-In Uber Luxury 3 BHK residences in Perungalathur, Chennai. Price starting @ ₹1.51 Cr*. 11.78-acre township, 40+ amenities.",
    url: 'https://shriramprojects.in/shriram-park-63',
    siteName: 'Shriram Properties',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function ShriramPark63Layout({ children }) {
  return (
    <>
      <Script id="gtag-park-63" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </>
  )
}
