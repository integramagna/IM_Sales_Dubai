import React from 'react'
import styles from './OurProcess.module.css'

const steps = [
  {
    number: '1',
    title: 'Consultation & Site Survey',
    description:
      'Understand your branding requirements and inspect the installation location to determine size, materials, and lighting needs.',
  },
  {
    number: '2',
    title: 'Design & Mockup',
    description:
      'Create customized signage designs and realistic mockups to visualize the final output before production.',
  },
  {
    number: '3',
    title: 'Manufacturing',
    description:
      'Use high-quality materials and advanced fabrication techniques to produce durable and premium-finish sign boards.',
  },
  {
    number: '4',
    title: 'Installation & Quality Check',
    description:
      'Professionally install the signage and conduct final quality checks to ensure safety, durability, and perfect finishing.',
  },
]

const OurProcess = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.Mainconatiner}>
          <div className={styles.top}>
            <h4>Our Process</h4>
          </div>
          <div className={styles.bottom}>
            {steps.map((step) => (
              <div className={styles.card} key={step.number}>
                <div className={styles.num}>
                  <h2>{step.number}</h2>
                </div>
                <div className={styles.content}>
                  <h3>{step.title}</h3>
                  <h4>{step.description}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProcess
