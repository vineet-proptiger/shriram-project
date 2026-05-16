import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationCategories = [
  {
    title: 'Education',
    items: [
      { name: 'DAV School, Porur', dist: '2 km' },
      { name: 'Sri Ramachandra University', dist: '3 km' },
      { name: 'Hindustan International School', dist: '4 km' },
    ]
  },
  {
    title: 'Hospitals',
    items: [
      { name: 'Sri Ramachandra Hospital', dist: '3.5 km' },
      { name: 'Apollo Hospital, Vanagaram', dist: '5 km' },
      { name: 'Billroth Hospitals', dist: '6 km' },
    ]
  },
  {
    title: 'Food & Shopping',
    items: [
      { name: 'VR Mall, Chennai', dist: '8 km' },
      { name: 'Phoenix Market City', dist: '12 km' },
      { name: 'Porur Lake Market', dist: '2 km' },
    ]
  },
  {
    title: 'Growth Drivers',
    items: [
      { name: 'DLF IT Park, Manapakkam', dist: '6 km' },
      { name: 'Ramapuram IT Corridor', dist: '5 km' },
      { name: 'Porur Technology Hub', dist: '3 km' },
    ]
  },
  {
    title: 'Convenient Travel',
    items: [
      { name: 'Chennai–Bangalore Highway (NH-48)', dist: '1 km' },
      { name: 'Porur Bus Terminus', dist: '2.5 km' },
      { name: 'Upcoming Metro Station', dist: '4 km' },
    ]
  }
];

const Location = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-teal-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-teal)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-teal-light)', marginBottom: '10px',
          }}>Mangadu, Chennai</span>
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

          {/* LEFT — Accordion List */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {locationCategories.map((cat, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} style={{
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    border: '1px solid #e5e7eb',
                    overflow: 'hidden',
                  }}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{
                        fontFamily: F_JOST, fontWeight: '700', fontSize: '15px',
                        color: isOpen ? 'var(--color-primary)' : '#111827',
                        transition: 'color 0.2s',
                      }}>
                        {cat.title}
                      </span>
                      {isOpen ? <ChevronUp size={18} color="var(--color-primary)" /> : <ChevronDown size={18} color="#6b7280" />}
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 20px 20px',
                        borderTop: '1px solid #f3f4f6',
                      }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
                          {cat.items.map((item, i) => (
                            <li key={i} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '8px 0',
                              fontSize: '14px',
                              color: '#4b5563',
                              fontFamily: F_SANS,
                            }}>
                              <span style={{
                                width: '6px', height: '6px', borderRadius: '50%',
                                background: 'var(--color-teal)', marginTop: '7px', flexShrink: 0,
                              }} />
                              <span>{item.name} – {item.dist}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(74,140,152,0.15)',
              border: '2px solid var(--color-teal)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.840128363508!2d80.1149992!3d13.027802200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261e3fc15854b%3A0xfb1248ce84734a7f!2sShriram%20122%20West!5e1!3m2!1sen!2sin!4v1778928675811!5m2!1sen!2sin"
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
                  Mangadu, Chennai
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
