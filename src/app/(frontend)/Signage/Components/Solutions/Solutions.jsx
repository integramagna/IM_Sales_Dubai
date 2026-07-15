'use client'
import React, { useState } from 'react'
import styles from './Solutions.module.css'
import ContactPopup from '../Contact/ContactPopup'
import img1 from './1.webp'
import img2 from './2.webp'
import img3 from './3.webp'
import img4 from './4.webp'
import img5 from './5.webp'

const solutions = [
  {
    title: 'LED Shop Board',
    description:
      'Bright and energy-efficient LED shop boards designed to grab attention day and night with enhanced visibility and modern appeal.',
    image: img1,
  },
  {
    title: '3D Letter Board',
    description:
      'Premium 3D letter signage crafted with precision to give your brand a bold, dimensional, and professional look.',
    image: img2,
  },
  {
    title: 'Lollipop Flange & Signature Board',
    description:
      'Durable and stylish ACP and acrylic signage solutions available in both 2D and 3D formats for a sleek corporate finish.',
    image: img3,
  },
  {
    title: 'Lit Flex board',
    description:
      'Cost-effective and versatile flex boards ideal for promotional campaigns, storefront branding, and outdoor advertising.',
    image: img4,
  },
  {
    title: 'Nonlit Flex Board',
    description:
      'High-quality non-lit flex boards offering clear and impactful branding solutions for budget-friendly advertising needs.',
    image: img5,
  },
]

const BuildingIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.44531 30.9459V5.61881C8.44531 4.87246 8.7418 4.15668 9.26955 3.62893C9.7973 3.10117 10.5131 2.80469 11.2594 2.80469H22.5159C23.2623 2.80469 23.9781 3.10117 24.5058 3.62893C25.0336 4.15668 25.3301 4.87246 25.3301 5.61881V30.9459H8.44531Z" stroke="white" strokeWidth="1.29883" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.44075 16.8828H5.62662C4.88027 16.8828 4.16449 17.1793 3.63674 17.7071C3.10899 18.2348 2.8125 18.9506 2.8125 19.6969V28.1393C2.8125 28.8857 3.10899 29.6014 3.63674 30.1292C4.16449 30.6569 4.88027 30.9534 5.62662 30.9534H8.44075" stroke="white" strokeWidth="1.29883" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25.3281 12.6562H28.1422C28.8886 12.6562 29.6044 12.9527 30.1321 13.4805C30.6599 14.0082 30.9564 14.724 30.9564 15.4704V28.1339C30.9564 28.8803 30.6599 29.5961 30.1321 30.1238C29.6044 30.6516 28.8886 30.9481 28.1422 30.9481H25.3281" stroke="white" strokeWidth="1.29883" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.0703 8.4375H19.6986" stroke="white" strokeWidth="1.29883" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.0703 14.0703H19.6986" stroke="white" strokeWidth="1.29883" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.0703 19.6953H19.6986" stroke="white" strokeWidth="1.29883" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.0703 25.3203H19.6986" stroke="white" strokeWidth="1.29883" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Solutions = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h4>
              <span className={styles.signage}>Signage</span>{' '}
              <span className={styles.solutionsText}>Solutions</span>
            </h4>
          </div>
          <div className={styles.bottom}>
            {solutions.map((item, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <BuildingIcon />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <div className={styles.divider} />
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <img src={item.image.src} alt={item.title} className={styles.cardImage} loading="lazy" />
                </div>
              </div>
            ))}

            <div className={styles.ctaCard}>
              <div className={styles.ctaContent}>
                <div className={styles.ctaHeadingDesc}>
                  <h2 className={styles.ctaHeading}>Ready to start a project ?</h2>
                  <p className={styles.ctaDescription}>
                    Book a free consultation to get clarity, direction, and expert advice you can
                    implement right away.
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.ctaButton}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <span className={styles.ctaText}>Request a Quote</span>
                  <span className={styles.ctaArrow}>
                    <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.66315 1.00091L9.6181 1.00091L9.6181 8.95587M9.06567 1.55334L1.00024 9.61878" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

export default Solutions
