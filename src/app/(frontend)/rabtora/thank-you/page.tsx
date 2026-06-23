import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import ThankYouClient from './ThankYouClient'
import imageLinks from './imageLinks'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Thank You | Integra Magna',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  const imageDir = path.join(process.cwd(), 'public', 'assets', 'images', 'thankyouimages')
  let images: { src: string; url: string }[] = []

  try {
    const files = fs.readdirSync(imageDir)
    images = files
      .filter((f) => /\.(png|jpg|jpeg|webp|gif|avif)$/i.test(f))
      .sort()
      .map((f) => ({
        src: `/assets/images/thankyouimages/${f}`,
        url: (imageLinks as Record<string, string>)[f] ?? 'https://integramagna.com',
      }))
  } catch {
    images = []
  }

  return <ThankYouClient images={images} />
}
