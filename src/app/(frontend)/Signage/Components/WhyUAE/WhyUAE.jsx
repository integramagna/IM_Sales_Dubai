import React from 'react'
import styles from './WhyUAE.module.css'

const steps = [
  {
    title: 'Permits Handled',
    description:
      'Municipality approvals and NOC paperwork across the UAE, so your sign goes up without delays or fines.',
  },
  {
    title: 'Built for the UAE Climate',
    description:
      'UV-stable acrylics, marine-grade fixings, and sealed LED units engineered for 45°C summers and coastal humidity.',
  },
  {
    title: 'In-House Fabrication',
    description:
      'Design, production, and installation under one roof. No subcontractor delays, no quality surprises.',
  },
]

const WhyUAE = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.top}>
          <h4>Why UAE businesses choose us ?</h4>
        </div>
        <div className={styles.timelineRow}>
          {steps.map((step, i) => (
            <div className={styles.step} key={i}>
              <div className={styles.dotRow}>
                <div className={styles.dotOuter}>
                  <div className={styles.dotInner} />
                </div>
              </div>
              {i !== steps.length - 1 && <div className={styles.mobileLine} />}
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUAE
