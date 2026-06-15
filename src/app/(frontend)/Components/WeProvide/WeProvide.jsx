'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './WeProvide.module.css'
import ContactPopup from '../Contact/ContactPopup'


const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const designServices = ['UI / UX Design', 'Website Design', 'Website Redesign', 'Graphic Design', 'Design']
const devServices = ['Web Development', 'Landing Pages', 'E-commerce Websites', 'Corporate Website', 'Maintenance & Support']
const aiServices = ['Web Development', 'Landing Pages', 'E-commerce Websites', 'Corporate Website', 'Maintenance & Support']

const otherColumns = [
  { title: 'Design', items: designServices },
  { title: 'Development', items: devServices },
  { title: 'Ai', items: aiServices },
]

const WeProvide = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const mainRef = useRef(null)
  const bottomRef = useRef(null)
  const otherCardRef = useRef(null)

useEffect(() => {
    let mm
    let cancelled = false

    Promise.all([import('gsap'), import('gsap/dist/ScrollTrigger')]).then(
      ([{ default: gsap }, { default: ScrollTrigger }]) => {
        if (cancelled) return
        gsap.registerPlugin(ScrollTrigger)
        mm = gsap.matchMedia()

        mm.add('(min-width: 641px)', () => {
          const OFFSET = 50
          gsap.set(otherCardRef.current, { y: '100%' })
          ScrollTrigger.normalizeScroll(false)

          gsap.to(otherCardRef.current, {
            y: OFFSET,
            ease: 'none',
            scrollTrigger: {
              trigger: mainRef.current,
              start: 'top -100px',
              end: () => '+=' + window.innerHeight * 1.8,
              pin: true,
              pinSpacing: true,
              scrub: true,
              anticipatePin: 0,
              invalidateOnRefresh: true,
            },
          })

          if (typeof document !== 'undefined' && document.fonts) {
            document.fonts.ready.then(() => ScrollTrigger.refresh(true))
          }

          return () => {
            gsap.set(otherCardRef.current, { clearProps: 'transform' })
          }
        })
      },
    )

    return () => {
      cancelled = true
      if (mm) mm.revert()
    }
  }, [])
  return (
    <>
      <div className={styles.main} ref={mainRef}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h3>
              Services <span className={styles.we}>we provide</span>
            </h3>
          </div>
          <div className={styles.cardsWrapper}>
            <div className={styles.bottom} ref={bottomRef}>
              <div className={styles.bottomTop}>
                <div className={styles.titile}>
                  <h1>Branding</h1>
                </div>
                <div className={styles.list}>
                  <div className={styles.firstlist}>
                    <div className={styles.item}>
                      <h4>1.</h4>
                      <h5>Brand Identity{' '}<span className={styles.desc}>Brand mark, style guide, fonts</span></h5>
                    </div>
                    <div className={styles.item}>
                      <h4>2.</h4>
                      <h5>Logo Design <span className={styles.desc}>For brand recognition</span></h5>
                    </div>
                    <div className={styles.item}>
                      <h4>3.</h4>
                      <h5>Packaging Design <span className={styles.desc}>Labels, boxes, packets</span></h5>
                    </div>
                  </div>
                  <div className={styles.firstlist}>
                    <div className={styles.item}>
                      <h4>4.</h4>
                      <h5>Pitch Deck{' '}<span className={styles.desc}>Investor slide, company profile</span></h5>
                    </div>
                    <div className={styles.item}>
                      <h4>5.</h4>
                      <h5>Rebranding <span className={styles.desc}> When your old identity is costing you clients</span></h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottomBottom}>
                <button onClick={() => setPopupOpen(true)}>
                  <span className={styles.textspan}>Start Your Brand Identity</span>
                  <span className={styles.svgicon}><ArrowIcon /></span>
                </button>
                <p>
                 Every brand identity we build is custom-researched, strategically positioned, and built to last, not templated, not rushed.
                </p>
              </div>
            </div>
            <div className={styles.otherCard} ref={otherCardRef}>
              <h3 className={styles.otherTitle}>Other services</h3>
              <div className={styles.otherColumns}>
                {otherColumns.map(({ title, items }) => (
                  <div key={title} className={styles.otherColumn}>
                    <h4 className={styles.otherColTitle}>{title}</h4>
                    <div className={styles.otherList}>
                      {items.map((item, i) => (
                        <div key={i} className={styles.otherItem}>
                          <span className={styles.otherNum}>{i + 1}.</span>
                          <span className={styles.otherItemText}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.otherBottom}>
                <button className={styles.otherCta} onClick={() => setPopupOpen(true)}>
                  <span className={styles.otherCtaText}>Tell Us What You're Building</span>
                  <span className={styles.otherCtaArrow}><ArrowIcon /></span>
                </button>
                <p className={styles.otherDesc}>
                  Design, development, and e-commerce so you never have to manage 5 different agencies again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default WeProvide
