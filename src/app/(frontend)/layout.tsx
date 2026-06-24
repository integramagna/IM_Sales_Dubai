import React from 'react'
import './globals.css'
import ConditionalHeader from './Components/Header/ConditionalHeader'
import Analytics from './Analytics'

export const metadata = {
  title: 'Rabtora | Branding, Strategy, and UX UI Design Agency',
  description:
    'Rabtora is a strategic design agency that creates the digital product and brand experiences that elevate companies to their next exciting chapter.',
  keywords: [
    'Creative Design agency',
    'UX UI Design',
    'website development',
    'best website design',
    'Product design',
    'UX Design',
    'UI Design',
    'branding',
    'Marketing plans',
    'Rabtora',
    'design',
  ],
  authors: [{ name: 'Rabtora', url: 'https://www.rabtora.ae/' }],
  creator: 'Rabtora',
  openGraph: {
    title: 'Rabtora | Branding & UX/UI Design Agency',
    description:
      'Rabtora is a strategic design agency that creates the digital product and brand experiences that elevate companies to their next exciting chapter.',
    url: 'https://rabtora.ae',
    siteName: 'Rabtora',
    type: 'website',
    images: [
      {
        url: 'https://impact.rabtora.ae/og.png',
        width: 1200,
        height: 630,
        alt: 'Rabtora Social Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Rabtora',
    title: 'Rabtora | Branding & UX/UI Design Agency',
    images: ['https://impact.rabtora.ae/og.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    shortcut: '/favicon.ico',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N9P3HHX4');`}} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href="/assets/fonts/PretendardVariable-Latin.woff2"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href="/assets/fonts/AwesomeSerifItalic-SemBdTall.woff2"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/landing/hero-sequence-poster.webp"
           fetchPriority="high"
          media="(max-width: 959px)"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
            #hero-main {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              background-color: #fff;
              box-sizing: border-box;
              padding:
  clamp(70px, 12vw, 180px)
  clamp(24px, 9vw, 115px)
  0
  clamp(24px, 9vw, 115px);
            }
            #hero-container {
              display: flex;
              flex-direction: row;
              gap: 30px;
              width: 100%;
            }
            #hero-left, #hero-right {
              display: flex;
              flex-direction: column;
              gap: 25px;
              flex: 1;
              min-width: 0;
            }
            #hero-right { align-items: flex-end; }
            #hero-h1, #hero-h2 {
              font-size: clamp(2rem, 2.03vw + 1.57rem, 4rem);
              font-weight: 600;
              color: #000;
              margin: 0;
              font-family: 'Awesome Serif', Georgia, serif;
            }
            #hero-h2 { text-align: right; }
            @media (max-width: 640px) {
              #hero-main { padding: 100px 24px 80px 24px; }
              #hero-container { flex-direction: column; gap: 20px; }
              #hero-left, #hero-right { width: 100%; flex: unset; }
              #hero-h1, #hero-h2 { font-size: 32px; }
              #hero-h2 { text-align: right; }
            }
          `,
          }}
        />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9P3HHX4" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <Analytics />
        <ConditionalHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}
