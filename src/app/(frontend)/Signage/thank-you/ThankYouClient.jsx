'use client'
import Link from 'next/link'
import styles from './ThankYou.module.css'
import logo from '../Components/Header/newlogo.png'

export default function ThankYouClient({ images }) {
  const doubled = images.length > 0 ? [...images, ...images] : []

  return (
    <div className={styles.pageWrapper}>
      <nav className={styles.mobileNav}>
        <div className={styles.navLogoWrap}>
          <img src={logo.src} alt="Rabtora" className={styles.navLogo} />
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
            <Link href="/Signage" className={styles.cta}>
              Back to Homepage
            </Link>
          </div>
        </div>
        {images.length > 0 && (
          <>
            <div className={styles.desktopImageArea}>
              <div className={styles.column}>
                <div className={`${styles.track} ${styles.trackDown}`}>
                  {doubled.map((img, i) => (
                    <div key={i} className={styles.imageLink}>
                      <img
                        src={img.src}
                        alt="Rabtora project"
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
                    <div key={i} className={styles.imageLink}>
                      <img
                        src={img.src}
                        alt="Rabtora project"
                        className={styles.projectImage}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.mobileImageArea}>
              <div className={styles.mobileRow}>
                <div className={`${styles.mobileTrack} ${styles.mobileTrackLeft}`}>
                  {doubled.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt="Rabtora project"
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
                      alt="Rabtora project"
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
