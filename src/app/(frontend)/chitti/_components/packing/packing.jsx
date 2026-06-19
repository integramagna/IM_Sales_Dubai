'use client'
import { useState } from "react"
import Image from "next/image"
import styles from "./packing.module.css"
import ContactPopupCopy from "../ContactCopy/ContactPopupCopy"

export default function Packaging() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <div className={styles.top}>
                        <div className={styles.toptop}>
                            <h1 className={styles.heading}>
                                Your packaging is working 24/7. competitors
                                <span className={styles.italicText}>
                                    Is it working hard enough?
                                </span>
                            </h1>
                            <p className={styles.para1}>
                                Great packaging doesn't just look good. It creates instant trust, commands a higher price, and turns first-time buyers into loyal customers.
                            </p>
                        </div>
                        <div className={styles.topbottom}>
                            <div className={styles.Quote} onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
                                <div className={styles.txt0}>
                                    Request a Quote
                                </div>
                                <div className={styles.circle}>
                                    <svg className={styles.iconAlign} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="24" height="24" rx="12" fill="black" />
                                        <path d="M10.4913 9.83685L18.4462 9.83685L18.4462 17.7918M17.8938 10.3893L9.82836 18.4547" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h1 className={styles.Choose} style={{ fontFamily: "var(--font-awesome-serif)", fontSize: "28px" }}>Why choose us ? </h1>
                        <div className={styles.uls}>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#FFD4DF" />
                                    <circle cx="8" cy="8" r="4" fill="#FA7598" />
                                </svg>
                                <h1>Launch-ready in 7-14 days </h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#FFD4DF" />
                                    <circle cx="8" cy="8" r="4" fill="#FA7598" />
                                </svg>
                                <h1>Production-ready files, every time</h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#FFD4DF" />
                                    <circle cx="8" cy="8" r="4" fill="#FA7598" />
                                </svg>
                                <h1>Packaging designed to sell</h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#FFD4DF" />
                                    <circle cx="8" cy="8" r="4" fill="#FA7598" />
                                </svg>
                                <h1>Built for Indian shelves</h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#FFD4DF" />
                                    <circle cx="8" cy="8" r="4" fill="#FA7598" />
                                </svg>
                                <h1>One team, one process - no handoff chaos</h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#FFD4DF" />
                                    <circle cx="8" cy="8" r="4" fill="#FA7598" />
                                </svg>
                                <h1>Honest advice, better outcomes</h1>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}