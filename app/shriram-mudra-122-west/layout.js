import './mudra-theme.css'

import Script from 'next/script'
import { CITY_DISPLAY } from '../../lib/shriram-mudra-122-west/config'

export const metadata = {
  title: 'Shriram Mudra | 2, 2.5 & 3 BHK Apartments in Mangadu, Chennai | Shriram Properties',
  description:
    'Shriram Mudra (Shriram 122 West) — Premium 2, 2.5 & 3 BHK residential apartments in Mangadu, Chennai. Located near Porur and Chennai–Bangalore Highway. Modern clubhouse & lifestyle amenities. Price starting ₹58 Lakhs*. By Shriram Properties.',
  alternates: {
    canonical: 'https://shriramprojects.in/shriram-mudra-122-west',
  },
  openGraph: {
    title: 'Shriram Mudra | 2, 2.5 & 3 BHK Apartments in Mangadu, Chennai',
    description:
      'Shriram Mudra (Shriram 122 West) — Premium 2, 2.5 & 3 BHK residential apartments in Mangadu, Chennai. Located near Porur and Chennai–Bangalore Highway. Price starting ₹58 Lakhs*.',
    url: 'https://shriramprojects.in/shriram-mudra-122-west',
    siteName: 'Shriram Properties',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function ShriramMudraLayout({ children }) {
  return (
    <>
      <Script id="gtag-mudra" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </>
  )
}
