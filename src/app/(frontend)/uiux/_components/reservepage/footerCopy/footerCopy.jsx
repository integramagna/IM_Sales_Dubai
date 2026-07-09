import React from 'react'
import styles from './footerCopy.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h3>Connect us on</h3>
          <div className={styles.socials}>
  <a
    href="https://www.linkedin.com/company/rabtora"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.linkdin}
    aria-label="LinkedIn"
  >
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.00193751 -0.00343776H3.88994V24.4766H0.00193751V-0.00343776ZM18.5971 7.12456C22.9891 7.12456 25.9771 10.1486 25.9771 15.0446V24.4766H22.2331V15.2606C22.2331 12.1646 20.5771 10.5086 17.8411 10.5086C16.2211 10.5086 14.4571 11.4086 13.1251 13.0646V24.4766H9.38106V7.55656H13.1251V9.06856C14.6011 7.80856 16.4371 7.12456 18.5971 7.12456Z" fill="white"/>
    </svg>
  </a>
  <a
    href="https://www.facebook.com/people/Rabtora-Madhyam-Management/61589694790986/"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.facebook}
    aria-label="Facebook"
  >
    <svg width="39" height="26" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3179 4.6465H3.88994V12.3145H15.7339V15.8785H3.88994V25.5625H0.00193751V1.0825H17.3179V4.6465ZM30.0563 8.2105C34.8083 8.2105 38.6603 12.1705 38.6603 17.0665C38.6603 22.0345 34.8083 25.9945 30.0563 25.9945C27.8963 25.9945 26.0603 25.3465 24.6563 24.2305V25.5625H20.9123V0.00249863H24.6563V9.9385C26.0603 8.8585 27.8963 8.2105 30.0563 8.2105ZM29.5163 22.6105C32.6483 22.6105 34.9163 20.0905 34.9163 17.0665C34.9163 14.0785 32.6483 11.5945 29.5163 11.5945C27.6443 11.5945 25.9163 12.2065 24.6563 13.9705V20.1985C25.9163 21.9625 27.6443 22.6105 29.5163 22.6105Z" fill="white"/>
    </svg>
  </a>
</div>
          </div>
          <div className={styles.bottom}>
            <h4>Privacy Policy</h4>
            <p>Copyright © 2026 Rabtora</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
