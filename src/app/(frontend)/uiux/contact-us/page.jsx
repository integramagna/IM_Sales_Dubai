export const metadata = {
  title: 'Contact Us | UI/UX Design Agency Dubai | Rabtora',
  description: "Get in touch with Rabtora's UI/UX design team. Tell us about your project and receive a clear, honest quote within 24 hours. No pitch, no jargon.",
  keywords: [
    'contact UI UX agency Dubai',
    'hire UI UX designer UAE',
    'UI UX design quote Dubai',
    'UX design agency contact',
    'UI design consultation UAE',
  ],
  openGraph: {
    title: 'Contact Us | UI/UX Design Agency Dubai | Rabtora',
    description: "Get in touch with Rabtora's UI/UX design team. Tell us about your project and receive a clear, honest quote within 24 hours.",
    url: 'https://impact.rabtora.ae/uiux/contact-us',
    siteName: 'Rabtora',
    type: 'website',
    images: [
      {
        url: 'https://impact.rabtora.ae/og.png',
        width: 1200,
        height: 630,
        alt: 'Rabtora UI/UX Design Agency Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Rabtora',
    title: 'Contact Us | UI/UX Design Agency Dubai | Rabtora',
    images: ['https://impact.rabtora.ae/og.png'],
  },
  alternates: {
    canonical: 'https://impact.rabtora.ae/uiux/contact-us',
  },
}

import ContactCopy from '../_components/contactpage/ContactCopy/ContactCopy'
import FAQS from '../_components/contactpage/FAQCopy/FAQCopy'
import Footer from '../_components/contactpage/footerCopy/footerCopy'
import StickyCta from '../_components/contactpage/StickyCta/StickyCta'

export default function ContactUsPage() {
  return (
    <>
      <ContactCopy />
      <FAQS />
      <div id="footer-sentinel" style={{ height: '1px' }} />
      <Footer />
      <StickyCta />
    </>
  )
}
