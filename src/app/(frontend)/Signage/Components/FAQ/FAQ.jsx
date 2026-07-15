'use client'
import React, { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'How long does a typical signage project take to complete?',
    answer: 'Most standard shop boards and 3D letter signs are designed, approved, and installed within 2–3 weeks from design sign-off. Larger or custom projects -building facades, multi-location rollouts - typically run 4–6 weeks. Municipality approval timelines vary by emirate, which is why we start the permit process in parallel with fabrication rather than after it. You\'ll get a fixed timeline in your proposal before any work begins.',
  },
  {
    question: 'Do you handle municipality approvals and permits?',
    answer: 'Yes - end to end. We prepare compliant drawings, submit the application, coordinate with the municipality, and secure the permit before installation. This covers signage permits and NOCs across Dubai, Sharjah, Abu Dhabi, and the other emirates. You don\'t visit a single government counter. If a design element risks rejection, we flag it at the mockup stage - before it costs you time or money.',
  },
  {
    question: 'Can you maintain and repair signage you didn\'t originally install?',
    answer: 'Yes. We repair and service third-party signage - LED module replacement, transformer and wiring faults, acrylic cracks, faded flex faces, and re-installation after storefront renovations. We start with a free inspection to assess whether repair or replacement is the better investment, and we\'ll tell you honestly if a repair isn\'t worth it.',
  },
  {
    question: 'What is the typical investment for a business sign?',
    answer: 'It depends on size, materials, and lighting. Every project includes a free site survey, so the quote you receive is exact - no surprise costs at installation.',
  },
]

const CloseIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8748 22.1248L22.1244 13.8752M13.8748 13.8752L22.1244 22.1248" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PlusIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1641 17.9974H23.8307M17.9974 12.1641V23.8307" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

const FAQ = () => {
  return (
    <div className={styles.main}>
      <div className={styles.MainContainer}>
        <div className={styles.left}>
          <h4>Frequently Asked Questions</h4>
          <p>Can't find the answer you're looking for? Our team is always happy to help with any questions about your signage project.</p>
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

export default FAQ
