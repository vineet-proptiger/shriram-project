'use client'
import React, { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationCategories = [
  {
    title: 'Education',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    items: [
      { name: 'Velammal Vidyashram', time: '3 km' },
      { name: 'Zion International Public School', time: '2 km' },
      { name: 'Alwin International Public School', time: '2.5 km' },
      { name: 'SRM University', time: '10 km' },
    ],
  },
  {
    title: 'Hospitals',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    items: [
      { name: 'Annai Arul Hospital', time: '3 km' },
      { name: 'Hindu Mission Hospital', time: '6 km' },
      { name: 'Deepam Hospital', time: '7 km' },
      { name: 'SRM Medical College Hospital', time: '10 km' },
    ],
  },
  {
    title: 'Food & Shopping',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    items: [
      { name: 'Grand Galada Centre Mall', time: '8 km' },
      { name: 'Gold Souk Grande', time: '12 km' },
      { name: 'Phoenix Marketcity', time: '20 km' },
      { name: 'Local Retail & Dining Hubs', time: 'Nearby' },
    ],
  },
  {
    title: 'Growth Drivers',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    items: [
      { name: 'GST Road', time: '1 km' },
      { name: 'Perungalathur Railway Station', time: '2 km' },
      { name: 'Tambaram', time: '5 km' },
      { name: 'Upcoming Infrastructure Developments', time: 'Nearby' },
    ],
  },
  {
    title: 'Convenient Travel',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    items: [
      { name: 'Chennai International Airport', time: '15 km' },
      { name: 'Tambaram Railway Station', time: '5 km' },
      { name: 'Perungalathur Bus Terminus', time: '2 km' },
      { name: 'Easy Access to GST Road & OMR', time: 'Nearby' },
    ],
  },
]

const Location = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-teal-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-teal)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-teal-light)', marginBottom: '10px',
          }}>Perungalathur, Chennai</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-teal)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              overflow: 'hidden',
            }}>
              {locationCategories.map((cat, ci) => {
                const isOpen = openIndex === ci
                return (
                  <div key={ci} style={{ borderBottom: ci < locationCategories.length - 1 ? '1px solid #f0f0f0' : 'none' }}>

                    {/* Accordion Header */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : ci)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        background: isOpen
                          ? 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'
                          : '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.25s ease',
                        borderLeft: isOpen ? '4px solid var(--color-teal)' : '4px solid transparent',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: isOpen ? 'var(--color-teal)' : '#9ca3af', transition: 'color 0.25s' }}>
                          {cat.icon}
                        </span>
                        <span style={{
                          fontFamily: F_JOST, fontSize: '13px', fontWeight: '800',
                          color: isOpen ? '#fff' : '#374151',
                          textTransform: 'uppercase', letterSpacing: '0.06em',
                          transition: 'color 0.25s',
                        }}>
                          {cat.title}
                        </span>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isOpen ? 'var(--color-teal)' : '#9ca3af'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Accordion Body */}
                    <div style={{
                      maxHeight: isOpen ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}>
                      <div style={{ padding: '4px 20px 12px' }}>
                        {cat.items.map((item, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderBottom: i < cat.items.length - 1 ? '1px solid #f8f8f8' : 'none',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{
                                width: '7px', height: '7px', borderRadius: '50%',
                                background: 'var(--color-teal)', flexShrink: 0,
                              }} />
                              <span style={{
                                fontSize: '13.5px', color: '#4b5563', fontWeight: '500',
                                fontFamily: F_SANS, letterSpacing: '0.01em',
                              }}>{item.name}</span>
                            </div>
                            {item.time && (
                              <span style={{
                                fontSize: '12px', color: 'var(--color-teal-dark)', fontWeight: '800',
                                fontFamily: F_JOST, whiteSpace: 'nowrap', marginLeft: '10px',
                                background: 'var(--color-teal-bg)', padding: '2px 10px',
                                borderRadius: '20px', border: '1px solid var(--color-teal-light)',
                              }}>{item.time}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-teal)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.430609785591!2d80.09641959999999!3d12.904297399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f75001d98cf3%3A0xc1676dfcf42f9b0!2sShriram%20Park%2063!5e1!3m2!1sen!2sin!4v1778912006817!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-teal)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Perungalathur, Chennai
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
