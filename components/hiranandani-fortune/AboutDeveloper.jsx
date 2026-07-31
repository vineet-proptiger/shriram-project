'use client'
import React from 'react'

const GOLD = 'var(--color-gold)'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ContactFormUI = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#ffffff',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Full Name <span style={{ color: GOLD }}>*</span></label>
        <input name="fullname" type="text" placeholder="Enter full name"
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#ffffff',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Email Address</label>
        <input name="email" type="email" placeholder="Email Id (optional)"
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      <div>
        <label style={{
          display: 'block', fontSize: '11px', fontWeight: '700', color: '#ffffff',
          fontFamily: F_JOST, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px'
        }}>Mobile Number <span style={{ color: GOLD }}>*</span></label>
        <input name="phone" type="tel" placeholder="10-digit mobile number" maxLength={10}
          className="form-input" style={{ fontFamily: F_SANS, width: '100%' }} />
      </div>

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
        <input type="checkbox" defaultChecked style={{ accentColor: GOLD, marginTop: '2px', flexShrink: 0 }} />
        <span style={{ fontSize: '12px', color: '#ffffff', fontFamily: F_SANS, lineHeight: 1.5 }}>
          I authorize the developer &amp; its representatives to contact me via Email / SMS / WhatsApp / Call.
        </span>
      </label>
      <button type="submit"
        className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-none flex items-center justify-center gap-2 bg-[#000242] text-white border-2 border-[#000242] hover:bg-white hover:text-[#000242]"
        style={{ marginTop: '4px' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        Submit Details
      </button>
    </form>
  )
}

const AboutDeveloper = () => (
  <section id="developer" className="py-16 sm:py-20 relative bg-fixed bg-cover bg-center border-b border-gray-100" style={{ backgroundImage: 'url(/images/hiranandani-fortune/about-devloper/about-dev.webp)' }}>
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">

        {/* Left — Get In Touch Text with elegant soft dark shadow card */}
        <div 
          className="text-white flex flex-col justify-center p-6 md:p-8 rounded-2xl bg-black/45 backdrop-blur-[3px] border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]" 
          data-aos="fade-right" 
          data-aos-duration="1000" 
          data-aos-delay="100"
        >
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-white mb-3" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>
            Get In Touch
          </h2>
          {/* Decorative Line */}
          <div className="flex items-center justify-start mt-2 mb-6">
            <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
            <div className="w-2 h-2 rounded-full bg-[#7d9b93] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#7d9b93]"></div>
          </div>
          <p className="text-[19px] text-white font-medium leading-relaxed max-w-md drop-shadow-lg" style={{ fontFamily: F_SANS, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Let’s connect and bring your ideas to life. Reach out today for expert guidance, quick responses, and solutions tailored perfectly to your needs.
          </p>
        </div>

        {/* Right — Contact Form UI (No Backend Logic) */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column', height: '100%',
        }} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">

          {/* Form Header */}
          <div style={{
            background: '#000242',
            padding: '18px 24px', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
            }} />
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '800', fontSize: '18px',
              color: '#fff', margin: '0 0 4px', letterSpacing: '-0.01em'
            }}>
              Book Site Visit Today
            </h3>
            <p style={{ fontFamily: F_SANS, fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
              Register now to get the best deal &amp; book your site visit
            </p>
          </div>

          {/* Form Body */}
          <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <ContactFormUI />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default AboutDeveloper
