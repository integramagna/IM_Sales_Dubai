export const metadata = {
  title: 'UI/UX Design Agency in Dubai | Rabtora',
  description: "UAE's trusted UI/UX design agency. We design interfaces that drive more clicks, signups, and conversions for websites, apps, and digital products. Get a free quote in 24 hours.",
  keywords: [
    'UI UX design agency Dubai',
    'UX design UAE',
    'UI design agency',
    'user experience design Dubai',
    'conversion rate optimization',
    'app UI design Dubai',
    'website UX design UAE',
    'product design agency Dubai',
    'UI UX designer UAE',
  ],
  openGraph: {
    title: 'UI/UX Design Agency in Dubai | Rabtora',
    description: "UAE's trusted UI/UX design agency. We design interfaces that drive more clicks, signups, and conversions — for websites, apps, and digital products.",
    url: 'https://impact.rabtora.ae/uiux',
    siteName: 'Rabtora',
    type: 'website',
    images: [
      {
        url: 'https://www.rabtora.com/twitter-image.png',
        width: 1200,
        height: 627,
        alt: 'Rabtora UI/UX Design Agency Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Rabtora',
    title: 'UI/UX Design Agency in Dubai | Rabtora',
    images: ['https://www.rabtora.com/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://rabtora.com/uiux',
  },
}

import HomePage from "./_components/main/home";
import Brand from "./_components/brands/brands";
import ProjectsGrid from "./_components/ProjectsGrid/ProjectsGrid";
import Packaging from "./_components/packing/packing";
import Black from "./_components/black/black";
import White from "./_components/white/white";
import ClutchSection from "./_components/clutch/clutch";
import ContactCopy from "./_components/ContactCopy/ContactCopy";
import FAQS from "./_components/FAQCopy/FAQCopy";
import Grid from "./_components/Grids/Grids";
import Footer from "./_components/footerCopy/footerCopy";
import StickyCta from "./_components/StickyCta/StickyCta";

export default function Chitti() {
    return (
        <>
            <HomePage />
            <Brand />
            <ProjectsGrid />
            <Packaging />
            <Black />
            <White />
            <ClutchSection />
            <ContactCopy />
            <FAQS />
            <Grid />
            <div id="footer-sentinel" style={{ height: '1px' }} />
            <Footer />
            <StickyCta />
        </>
    )
}