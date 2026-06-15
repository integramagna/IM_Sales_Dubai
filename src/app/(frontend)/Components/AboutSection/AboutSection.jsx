'use client'
import React from 'react'
import styles from './AboutSection.module.css'
import Image from 'next/image'
import TeamImage from './1.png'
import { useState } from 'react'
import ContactPopup from '../Contact/ContactPopup'

const AboutSection = () => {
    const [popupOpen, setPopupOpen] = useState(false)
  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h4>
              <span className={styles.ten}>10+ years. 250+ brands.</span> <br />
              One obsession: making your brand impossible to ignore.
            </h4>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div className={styles.desc}>
                <p>
                  Integra Magna is a Design and Tech studio. We've helped everyone from first-time
                  founders to enterprise marketing teams build brands that win, not just look good.
                  We obsess over strategy, craft, and outcomes.
                </p>
              </div>
              <div className={styles.rowscontainer}>
                <div className={styles.one}>
                  <h3>04</h3>
                  <p>
                    Countries <br />
                    India, US, UAE, UK
                  </p>
                </div>
                <div className={styles.smallines}></div>
                <div className={styles.two}>
                  <h3>250+</h3>
                  <p>
                    Projects successfully
                    <br />
                    completed in various niches
                  </p>
                </div>
              
                <div className={styles.three}>
                  <h3>$1B+</h3>
                  <p>Partners</p>
                </div>
              </div>
             <div className={styles.ctanew} onClick={() => setPopupOpen(true)} style={{ cursor: 'pointer' }}>
                <p>Work With a Top Rated Team</p>
                <div className={styles.svgiconss}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


                </div>

              </div>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.imageWrapper}>
                <Image src={TeamImage} alt="Integra Magna team" />
                <div className={`${styles.badgeWrapper} ${styles.badgeBranding}`}>
                  <span className={styles.badgeDot} />
                  <div className={styles.badgePill}>
                    <span className={styles.badgeText}>Branding</span>
                  </div>
                </div>
                <div className={`${styles.badgeWrapper} ${styles.badgeDesign}`}>
                  <span className={styles.badgeDot} />
                  <div className={styles.badgePill}>
                    <span className={styles.badgeText}>Design</span>
                  </div>
                </div>
                <div className={`${styles.badgeWrapper} ${styles.badgeDevelopment}`}>
                  <span className={styles.badgeDot} />
                  <div className={styles.badgePill}>
                    <span className={styles.badgeText}>Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}

export default AboutSection
