'use client'
import React from 'react'
import Link from 'next/link'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/hiranandani-fortune/footer/footer.webp')", color: '#fff' }}>
    <div className="relative z-10">
      <div className="max-w-[860px] mx-auto px-2 sm:px-6 pt-14 pb-8 text-center">
        <h2 
          className="text-[21px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wide mb-2 text-white whitespace-nowrap sm:whitespace-normal" 
          style={{ fontFamily: F_JOST }} 
          data-aos="fade-in"
        >
          About The Developer
        </h2>
        <p style={{ fontSize: '13px', color: '#FF2328', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Landmark Residential Developments — Chennai, Tamil Nadu
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <span style={{ width: '36px', height: '2.5px', background: '#FF2328', borderRadius: '2px' }} />
        </div>
        <p style={{ fontSize: '15px', color: '#fff', fontFamily: 'var(--font-poppins), sans-serif', lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}
          data-aos="fade-in" data-aos-delay="100">
          Shriram Properties presents premier residential developments across Chennai&apos;s most coveted corridors — including Mangadu, Perungalathur along GST Road, and Thirumazhisai near Poonamallee. Renowned for creating thoughtfully designed communities, Shriram Properties blends modern architectural excellence with abundant open spaces, Vastu-compliant home designs, and unmatched quality standards. Offering spacious layouts, world-class leisure amenities, expansive clubhouses, and seamless connectivity to prime IT hubs and educational centers — our communities are meticulously crafted to embody our enduring philosophy: <em style={{ color: '#FF2328', fontWeight: '600' }}>Homes that live in you</em>.
        </p>
        
        {/* RERA Block */}
        {/* <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontFamily: F_SANS, fontSize: '14px', color: '#aaa' }}>RERA No :</span>
          <strong style={{ fontFamily: F_JOST, fontSize: '15px', color: '#fff', letterSpacing: '0.04em' }}>P52000050196</strong>
        </div> */}
      </div>

      {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-6 border-t border-[#222] text-center max-w-[1200px] mx-auto">
        <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
          &copy; 2026 Shriram Properties. All rights reserved.
        </p>
      </div> */}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
          <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
