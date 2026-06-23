'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './ThankYou.module.css'

export default function ThankYouClient({ images }) {
  const [cursorVisible, setCursorVisible] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -300, y: -300 })
  const imageAreaRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const doubled = images.length > 0 ? [...images, ...images] : []

  return (
    <div className={styles.pageWrapper}>
      <div
        className={`${styles.exploreCursor} ${cursorVisible ? styles.exploreCursorVisible : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
        aria-hidden="true"
      >
        <span className={styles.exploreText}>Explore</span>
      </div>

      <nav className={styles.mobileNav}>
        <div className={styles.navLogoWrap}>
          <img
            src="/assets/images/header/integra-magna-logo.svg"
            alt="Integra Magna"
            className={styles.navLogo}
          />
        </div>
        <div className={styles.navLine} />
      </nav>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Thank you for reaching out</h1>
            <p className={styles.description}>
              We've received your enquiry and our team will review it shortly.
              Expect to hear from us within the next business day.
            </p>
            <Link href="/uiux" className={styles.cta}>
              Back to Homepage
            </Link>
          </div>
        </div>
        {images.length > 0 && (
          <>
            <div
              className={styles.desktopImageArea}
              ref={imageAreaRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              onClick={() =>
                window.open('https://integramagna.com', '_blank')
              }
            >
              <div className={styles.column}>
                <div className={`${styles.track} ${styles.trackDown}`}>
                  {doubled.map((img, i) => (
                    <div key={i} className={styles.imageLink}>
                      <img
                        src={img.src}
                        alt="Integra Magna project"
                        className={styles.projectImage}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.column}>
                <div className={`${styles.track} ${styles.trackUp}`}>
                  {doubled.map((img, i) => (
                    <a
                      key={i}
                      href={img.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.imageLink}
                    >
                      <img
                        src={img.src}
                        alt="Integra Magna project"
                        className={styles.projectImage}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={styles.mobileImageArea}
              onClick={() =>
                window.open('https://integramagna.com', '_blank')
              }
            >
              <div className={styles.mobileRow}>
                <div className={`${styles.mobileTrack} ${styles.mobileTrackLeft}`}>
                  {doubled.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt="Integra Magna project"
                      className={styles.mobileProjectImage}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div className={styles.mobileRow}>
                <div className={`${styles.mobileTrack} ${styles.mobileTrackRight}`}>
                  {doubled.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt="Integra Magna project"
                      className={styles.mobileProjectImage}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
