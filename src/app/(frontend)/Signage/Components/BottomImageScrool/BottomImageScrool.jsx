import React from 'react'
import styles from './BottomImageScrool.module.css'
import img1 from './1.webp'
import img2 from './2.webp'
import img3 from './3.webp'
import img4 from './4.webp'
import img5 from './5.webp'
import img6 from './6.webp'
import img7 from './7.webp'
import img8 from './8.webp'
import img9 from './9.webp'
import img10 from './10.webp'

const topRow = [img1, img2, img3, img4, img5]
const bottomRow = [img6, img7, img8, img9, img10]

const BottomImageScrool = () => {
  const topDoubled = [...topRow, ...topRow]
  const bottomDoubled = [...bottomRow, ...bottomRow]

  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={`${styles.track} ${styles.trackRight}`}>
          {topDoubled.map((img, i) => (
            <div key={i} className={styles.imageWrap}>
              <img src={img.src} alt="Signage project" className={styles.image} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.track} ${styles.trackLeft}`}>
          {bottomDoubled.map((img, i) => (
            <div key={i} className={styles.imageWrap}>
              <img src={img.src} alt="Signage project" className={styles.image} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomImageScrool
