'use client'
import React, { useState } from 'react'
import styles from './FAQCopy.module.css'

const faqs = [
  {
    question: 'What does a UI/UX project cost?',
    answer: 'Every engagement is scoped around your specific needs we don\'t believe in one-size-fits-all pricing. Book a free brand audit call and receive a clear, transparent quote within 24 hours. No vague estimates, no hidden additions.',
  },
  {
    question: 'What if I already have a design and just need it improved?',
    answer: 'We also conduct UX audits reviewing your current product, identifying friction points, and providing a prioritized roadmap of changes that move the needle on conversions.',
  },
  {
    question: 'What if I\'m not happy with the direction?',
    answer: 'You review wireframes before we move to high-fidelity screens, so any misalignment is caught early not after final files are delivered. If something\'s off, we adjust before proceeding.',
  },
  {
    question: 'Do I need to know exactly what I want before booking the call?',
    answer: 'No, most clients don\'t. Share your product, your users, and where you\'re losing them, and we\'ll tell you exactly what needs to change. That\'s precisely what the free consultation is for.',
  },
]

const CloseIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8748 22.1248L22.1244 13.8752M13.8748 13.8752L22.1244 22.1248" stroke="#101820" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PlusIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1641 17.9974H23.8307M17.9974 12.1641V23.8307" stroke="#101820" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={styles.faqQuestionText}>{question}</span>
        <span className={styles.faqIcon}>
          {open ? <CloseIcon /> : <PlusIcon />}
        </span>
      </button>
      <div className={styles.faqAnswerWrapper}>
        <div className={styles.faqAnswer}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

const FAQS = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.left}>
          <h4>
            Everything you want to know <br />
            before saying <span className={styles.lets}>yes.</span>
          </h4>
          <p>If anything's still unclear, book a free 30-minute call we'll answer your questions directly, no sales pitch involved</p>
        </div>
        <div className={styles.right}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQS
