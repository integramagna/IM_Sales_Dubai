'use client'
import { useEffect, useState } from 'react'
import styles from './StickyCta.module.css'
import ContactPopupCopy from '../ContactCopy/ContactPopupCopy'

export default function StickyCta() {
    const [visible, setVisible] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const footer = document.getElementById('footer-sentinel')
        if (!footer) return
        const obs = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0, rootMargin: '0px' }
        )
        obs.observe(footer)
        return () => obs.disconnect()
    }, [])

    return (
        <>
        <div className={`${styles.stickyOuter}${!visible ? ` ${styles.hidden}` : ''}`}>
            <div className={styles.glassBorder}>
                <div className={styles.ctaWrapper} onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
                    <span className={styles.ctaText}>Request a Quote</span>
                    <div className={styles.ctaCircle}>
                        <svg
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.ctaArrow}
                        >
                            <rect x="2" y="2" width="24" height="24" rx="12" fill="white" />
                            <path
                                d="M10.4913 9.83685L18.4462 9.83685L18.4462 17.7918M17.8938 10.3893L9.82836 18.4547"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}