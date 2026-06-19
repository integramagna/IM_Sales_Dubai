'use client'
import React, { useState } from 'react'
import styles from './FAQCopy.module.css'

const faqs = [
  {
    question: 'How much does packaging design cost?',
    answer: 'Every project is scoped based on what you actually need we don\'t believe in one-size-fits-all pricing. Book a free call and we\'ll give you a clear, honest quote within 24 hours. No vague estimates, no surprise additions.',
  },
  {
    question: 'How long does the process take?',
    answer: 'Most packaging projects are launch-ready in 7–14 days from your first call to print- ready files, depending on complexity and number of SKUs.',
  },
{
  question: 'Can you work with my existing manufacturer or printer?',
    answer: 'Yes, we deliver production-ready files built to your printer\'s specs, so there\'s no back-and-forth or compatibility issues at the press.',
  },
{
  question: 'Do you design for quick-commerce and D2C platforms too, not just retail shelves?',
    answer: 'Yes, every design is built to perform on physical shelves and on platforms like Blinkit and Amazon, where the packaging has to work as a thumbnail too.',
  },
// {
//   question: 'Do you work with early-stage startups or only established businesses?',
//     answer: 'Both. We\'ve built brands for first-time founders who are pre-launch and for enterprise marketing teams at TATA-backed companies. What matters isn\'t your stage, it\'s that you\'re serious about your brand being a growth asset, not an afterthought.',
//   },
// {
//   question: 'What do I need to prepare before we start?',
//     answer: 'Not much. Before the kickoff call, it helps to have a rough idea of your target audience, 2–3 brands you admire (doesn\'t have to be your industry), and any existing brand assets if you have them. We\'ll handle the strategy and direction  you don\'t need to come in with a brief.',
//   },
// {
//   question: 'Will I own the final files and designs?',
//     answer: '100%. Once the project is complete and signed off, all final files including source files in AI, EPS, SVG, and PNG are yours. No licensing fees, no lock-in, no hidden terms.',
//   },
// {
//   question: 'What if I\'m not happy with the direction?',
//     answer: 'We build in structured revision rounds so you\'re never stuck with something that doesn\'t feel right. More importantly, because we align on strategy before design begins, misaligned directions are rare. Most clients sign off within the first two rounds.',
//   },

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
            before saying <span className={styles.lets}>let's go.</span>
          </h4>
          <p>If something's still unclear after reading, just book a free call we'll answer anything in 30 minutes, no pitch involved.</p>
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