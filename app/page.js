'use client'
import dynamic from 'next/dynamic'
import '../components/hiranandani-fortune/hiranandani-theme.css'

import Navbar from '../components/hiranandani-fortune/Navbar'
import Hero   from '../components/hiranandani-fortune/Hero'

// const Overview       = dynamic(() => import('../components/hiranandani-fortune/Overview'),       { ssr: true })
const ProjectCards   = dynamic(() => import('../components/hiranandani-fortune/ProjectCards'),   { ssr: true })
// const Highlights     = dynamic(() => import('../components/hiranandani-fortune/Highlights'),     { ssr: true })
// const AboutDeveloper = dynamic(() => import('../components/hiranandani-fortune/AboutDeveloper'), { ssr: true })
const Footer         = dynamic(() => import('../components/hiranandani-fortune/Footer'),         { ssr: true })
const AosInit        = dynamic(() => import('../components/hiranandani-fortune/AosInit'),        { ssr: false })

export default function MainDomainHome() {
  return (
    <main className="hiranandani-page relative min-h-screen">
      <AosInit />
      <Navbar />
      <Hero />
      {/* <Overview /> */}
      <ProjectCards />
      {/* <Highlights /> */}
      {/* <AboutDeveloper /> */}
      <Footer />
    </main>
  )
}
