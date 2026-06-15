import type { Metadata } from 'next'
import TeamImageAndService from '../Components/TeamImageAndService'
import ZoomingVideo from '../Components/ZoomingVideo/ZoomingVideo'
import Clients from '../Components/Clientele/Clients'
import Footer from '../Components/Footer/Footer'
import StartSection from '../Components/StartSection/StartSection'
import ProjectsGrid from '../Components/ProjectsGrid/ProjectsGrid'
import Landing from '../Components/Landing/Landing'
import LogosLanding from '../Components/LogosLanding/LogosLanding'
import ClutchSection from '../Components/ClutchSection/ClutchSection'
import WeProvide from '../Components/WeProvide/WeProvide'
import AboutSection from '../Components/AboutSection/AboutSection'
import Contact from '../Components/Contact/Contact'
import CTASection from '../Components/CTASection/CTASection'
import FAQS from '../Components/FAQS/FAQS'
import WhatsAppButton from '../Components/WhatsApp/WhatsAppButton'
import styles from './branding.module.css'

export const metadata: Metadata = {
  title: 'Free Brand Audit | Integra Magna Brand Identity Studio',
  description:
    'We build brand identities for startups and growing businesses. Strategy-first design, delivered in 3–6 weeks. Trusted by 250+ brands. Get a free brand audit.',
  keywords: [
    'brand identity studio India',
    'brand identity design agency',
    'logo design agency India',
    'startup branding agency',
    'rebranding agency India',
    'brand identity for startups',
    'brand identity design for startups India',
    'affordable brand identity agency India',
    'brand identity studio Mumbai',
    'brand identity studio Bangalore',
    'how much does brand identity cost India',
    'branding agency',
    'brand strategy',
    'corporate branding',
    'Integra Magna',
  ],
  authors: [{ name: 'Integra Magna', url: 'https://integramagna.com' }],
  creator: 'Integra Magna',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://integramagna.com/branding' },
  openGraph: {
    title: 'Free Brand Audit | Integra Magna Brand Identity Studio',
    description:
      'We build brand identities for startups and growing businesses. Strategy-first design, delivered in 3–6 weeks. Trusted by 250+ brands. Get a free brand audit.',
    url: 'https://integramagna.com/branding',
    siteName: 'Integra Magna',
    type: 'website',
    images: [
      {
        url: 'https://www.integramagna.com/twitter-image.png',
        width: 1200,
        height: 627,
        alt: 'Integra Magna — Branding Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Integra_Magna',
    title: 'Free Brand Audit | Integra Magna Brand Identity Studio',
    description:
      'We build brand identities for startups and growing businesses. Strategy-first design, delivered in 3–6 weeks. Trusted by 250+ brands. Get a free brand audit.',
    images: ['https://www.integramagna.com/twitter-image.png'],
  },
}
export default function BrandingPage() {
  return (
    <>
      <div id="home" className={styles.homeSection}>
        <Landing />
        <LogosLanding />
      </div>
      <ZoomingVideo />
      <div id="work">
        <ProjectsGrid />
      </div>
      <CTASection />
      <Clients />
      <div id="services">
        <WeProvide />
      </div>

      <TeamImageAndService />

      <div id="about">
        <AboutSection />
      </div>
      <div id="review">
        <ClutchSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <FAQS />
      <StartSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
