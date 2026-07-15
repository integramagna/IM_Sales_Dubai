'use client'
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './Landing.module.css'
import ContactPopup from '../Contact/ContactPopup'

import img1 from './1.webp'
import img2 from './2.webp'
import img3 from './3.webp'
import img4 from './4.webp'
import img1m from './1m.webp'
import img2m from './2m.webp'
import img3m from './3m.webp'
import img4m from './4m.webp'

const desktopImages = [img1, img2, img3, img4]
const mobileImages = [img1m, img2m, img3m, img4m]

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const useCarousel = (slideCount) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi])

  return { emblaRef, activeIndex, scrollTo }
}

const Carousel = ({ images, wrapperClassName }) => {
  const { emblaRef, activeIndex, scrollTo } = useCarousel(images.length)

  return (
    <div className={wrapperClassName}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaTrack}>
          {images.map((img, i) => (
            <div className={styles.emblaSlide} key={i}>
              <img src={img.src} alt="Rabtora signage project" className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pills}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.pill} ${i === activeIndex ? styles.pillActive : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const Landing = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <div className={styles.labelRow}>
              <p className={styles.label}>UAE'S PREMIUM SIGNAGE PARTNER</p>
              <div className={styles.labelLine} />
            </div>
            <h1 className={styles.heading}>
              Signage That <span className={styles.gold}>Stops Traffic.</span>
              <br />
              Branding That Sticks.
            </h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.carouselSection}>
              <Carousel images={desktopImages} wrapperClassName={styles.desktopCarousel} />
              <Carousel images={mobileImages} wrapperClassName={styles.mobileCarousel} />
            </div>
            <div className={styles.textCta}>
              <p className={styles.description}>
               "Precision-crafted shop boards, 3D letters, and LED signage for UAE businesses - designed, approved, and installed by one team."
              </p>
              <button
                type="button"
                className={styles.ctaButton}
                onClick={() => setIsPopupOpen(true)}
              >
                <span className={styles.ctaText}>Request a Quote</span>
                <span className={styles.ctaArrow}>
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

export default Landing
