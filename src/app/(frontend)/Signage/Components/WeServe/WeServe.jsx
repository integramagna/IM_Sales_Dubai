import React from 'react'
import styles from './WeServe.module.css'
import img1 from './1.webp'
import img2 from './2.webp'
import img3 from './3.webp'
import img4 from './4.webp'
import img5 from './5.webp'
import img6 from './6.webp'
import img7 from './7.webp'
import img8 from './8.webp'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]

const WeServe = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Mainconatiner}>
        <div className={styles.top}>
          <h4>
            <span className={styles.industries}>Industries</span>{' '}
            <span className={styles.weServe}>We Serve</span>
          </h4>
        </div>
        <div className={styles.bottom}>
          {images.map((img, i) => (
            <div className={styles.imageWrap} key={i}>
              <img src={img.src} alt="Industry we serve" className={styles.image} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeServe
