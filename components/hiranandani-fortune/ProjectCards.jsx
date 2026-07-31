'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const projects = [
  {
    id: 'mudra',
    title: 'Shriram 122 West',
    image: '/images/shriram-mudra-122-west/hero/banner1.webp',
    slug: '/shriram-mudra-122-west',
    description: 'Shriram 122 West offers thoughtfully designed 2 & 3 BHK apartments in the rapidly developing location of Mangadu, Chennai. Developed by Shriram Properties, this residential community blends modern design with comfortable living spaces ideal for families and professionals. The homes feature spacious layouts, ample ventilation, and contemporary interiors that ensure a balanced and convenient lifestyle.'
  },
  {
    id: 'park63',
    title: 'Shriram Park 63',
    image: '/images/shriram-park-63/hero/banner1.webp',
    slug: '/shriram-park-63',
    description: 'Shriram Park 63 is a thoughtfully planned residential development in Chennai, offering a harmonious blend of urban convenience and serene living. Located in Perungalathur along the rapidly developing GST Road corridor, the project ensures seamless connectivity to key destinations while maintaining a peaceful and well-planned environment with modern architecture and efficient layouts.'
  },
  {
    id: 'swargam',
    title: 'Shriram Swargam',
    image: '/images/shriram-swargam/hero/banner1.webp',
    slug: '/shriram-swargam',
    description: 'Shriram Swargam offers premium 2 & 3 BHK homes starting from ₹45 Lakhs* in the fast-growing corridor of Thirumazhisai near Poonamallee. Spread across 8.9 acres with 7 towers and 1,053 thoughtfully designed apartments, the project features 75% open space and a 12,000 sq. ft. clubhouse with 45+ modern amenities for a complete lifestyle experience.'
  }
]

const ProjectCards = () => {
  return (
    <section id="projects" className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1260px]">
        
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide mb-3" style={{ fontFamily: F_JOST }}>
            Our Featured Projects
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-[2px] bg-[#FF2328]/30"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF2328] mx-3 shadow-sm"></div>
            <div className="w-16 h-[2px] bg-[#FF2328]/30"></div>
          </div>
          {/* <p className="text-[15px] sm:text-[16.5px] text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed" style={{ fontFamily: F_SANS }}>
            Explore our thoughtfully designed developments offering unmatched connectivity, modern lifestyle amenities, and secure living spaces.
          </p> */}
        </div>

        {/* 3 Cards Grid — Exactly matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {projects.map((proj, idx) => (
            <Link 
              href={proj.slug} 
              key={proj.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="group flex flex-col justify-between bg-[#FFFDFB] rounded-[28px] border-[1.5px] border-[#FFC2BF] p-5 sm:p-6 shadow-[0_6px_25px_rgba(255,194,191,0.18)] cursor-pointer w-full h-full"
            >
              <div>
                {/* Image inset inside card with rounded corners */}
                <div className="relative h-[220px] sm:h-[240px] w-full rounded-[20px] overflow-hidden bg-gray-900 shadow-sm shrink-0">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Red Title */}
                <h3 
                  className="mt-6 text-[22px] sm:text-[25px] font-bold text-[#FF2328] leading-tight" 
                  style={{ fontFamily: "Montserrat, var(--font-jost), sans-serif" }}
                >
                  {proj.title}
                </h3>

                {/* Body Text (4-5 lines) */}
                <p 
                  className="mt-3.5 text-[#5A6372] text-[15px] sm:text-[15.5px] leading-[1.75] font-normal line-clamp-4 text-left" 
                  style={{ fontFamily: F_SANS }}
                >
                  {proj.description}
                </p>
              </div>

              {/* Left-Aligned Red Pill Button with Inverted Hover Effect on Direct Hover Only */}
              <div className="mt-7 flex items-center">
                <span className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 bg-[#FF2328] hover:bg-white text-white hover:text-[#FF2328] border-2 border-[#FF2328] font-semibold text-[15px] sm:text-[15.5px] rounded-full shadow-[0_4px_15px_rgba(255,35,40,0.28)] hover:shadow-[0_6px_20px_rgba(255,35,40,0.4)] transition-all duration-300 transform hover:translate-x-1">
                  Learn More
                  <svg className="w-4 h-4 stroke-[2.5] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectCards
