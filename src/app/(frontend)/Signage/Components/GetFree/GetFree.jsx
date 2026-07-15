'use client'
import React, { useState } from 'react'
import styles from './GetFree.module.css'
import ContactPopup from '../Contact/ContactPopup'

const GetFree = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.headingDesc}>
              <h2 className={styles.heading}>Get Free Quote Today</h2>
              <p className={styles.description}>
                Speak with a signage expert, get a free site assessment, and receive a detailed
                proposal - no obligation whatsoever.
              </p>
            </div>
            <button
              type="button"
              className={styles.ctaButton}
              onClick={() => setIsPopupOpen(true)}
            >
              <span className={styles.ctaText}>Request a Quote</span>
              <span className={styles.ctaArrow}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.66315 1.00091L9.6181 1.00091L9.6181 8.95587M9.06567 1.55334L1.00024 9.61878" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

export default GetFree
