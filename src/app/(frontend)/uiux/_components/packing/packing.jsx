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
                            <h1 className={styles.heading}>Your interface is working 24/7<span className={styles.italicText}>Is it working hard enough?</span>
                            </h1>
                            <p className={styles.para1}>
                               A cluttered layout, a slow-loading page, a call-to-action buried below the fold, each one quietly costs you customers, every single day. Exceptional UI/UX does more than look good. It builds instant credibility, removes friction, and turns first-time visitors into long-term customers.
                            </p>
                        </div>
                        <div className={styles.topbottom}>
                            <button type="button" className={styles.cta} onClick={() => setIsOpen(true)}>
                                <span className={styles.ctaText}>Request a Quote</span>
                                <span className={styles.ctaArrow}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h1 className={styles.Choose} style={{ fontFamily: "var(--font-awesome-serif)", fontSize: "28px", color: "black" }}>Why UAE businesses choose us ?</h1>
                        <h1 className={styles.ul}>Designed to convert. Built to last.</h1>
                        <div className={styles.uls}>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#EFE5C3" />
                                    <circle cx="8" cy="8" r="4" fill="#C99A2A" />
                                </svg>
                                <h1>Strategy-led design, not just visual polish</h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#EFE5C3" />
                                    <circle cx="8" cy="8" r="4" fill="#C99A2A" />
                                </svg>
                                <h1>Remote-first collaboration, aligned with GCC working hours</h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#EFE5C3" />
                                    <circle cx="8" cy="8" r="4" fill="#C99A2A" />
                                </svg>
                                <h1>Development-ready files, every time</h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#EFE5C3" />
                                    <circle cx="8" cy="8" r="4" fill="#C99A2A" />
                                </svg>
                                <h1>One team. One process. </h1>
                            </div>
                            <div className={styles.ul}>
                                <svg className={styles.dot} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#EFE5C3" />
                                    <circle cx="8" cy="8" r="4" fill="#C99A2A" />
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