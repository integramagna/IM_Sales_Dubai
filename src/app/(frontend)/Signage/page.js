export const metadata = {
  title: 'Signage Company in Dubai | LED, 3D & Flex Board Signs | Rabtora',
  description:
    "UAE's trusted full-service signage partner. LED shop boards, 3D letter signage, ACP & acrylic signs, flex boards, and municipality-approved installation across Dubai and the UAE. Get a free quote in 24 hours.",
  keywords: [
    'signage company Dubai',
    'LED shop board UAE',
    '3D letter signage Dubai',
    'flex board printing UAE',
    'acrylic signage Dubai',
    'shop sign board UAE',
    'signage manufacturer Dubai',
    'outdoor signage UAE',
    'building signage Dubai',
    'Rabtora signage',
  ],
  openGraph: {
    title: 'Signage Company in Dubai | LED, 3D & Flex Board Signs | Rabtora',
    description:
      "UAE's trusted full-service signage partner — precision-crafted LED, 3D, and flex board signage that builds authority and drives foot traffic.",
    url: 'https://impact.rabtora.ae/Signage',
    siteName: 'Rabtora',
    type: 'website',
    images: [
      {
        url: 'https://impact.rabtora.ae/og.png',
        width: 1200,
        height: 630,
        alt: 'Rabtora Signage Solutions Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Rabtora',
    title: 'Signage Company in Dubai | LED, 3D & Flex Board Signs | Rabtora',
    images: ['https://impact.rabtora.ae/og.png'],
  },
  alternates: {
    canonical: 'https://rabtora.com/signage',
  },
}
import Landing from './Components/Landing/Landing'
import Contact from './Components/Contact/Contact'
import FAQ from './Components/FAQ/FAQ'
import BottomImageScrool from './Components/BottomImageScrool/BottomImageScrool'
import Footer from './Components/Footer/footerCopy'
import Ready from './Components/Ready/Ready'
import GetFree from './Components/GetFree/GetFree'
import OurProcess from './Components/OurProcess/OurProcess'
import WeServe from './Components/WeServe/WeServe'
import Solutions from './Components/Solutions/Solutions'
import WhyUAE from './Components/WhyUAE/WhyUAE'

export default function Signage() {
  return (
    <>
      <Landing />
            <WhyUAE />
      <Solutions />
      <WeServe />
      <OurProcess />
      <GetFree />
      <Contact />
      <FAQ />
      <Ready />
      <BottomImageScrool />
      <Footer />
    </>
  )
}
