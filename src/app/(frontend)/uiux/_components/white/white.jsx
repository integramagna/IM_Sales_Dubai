'use client'
import { useState } from "react"
import styles from "./white.module.css"
import ContactPopupCopy from "../ContactCopy/ContactPopupCopy"

export default function White() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.top1}>
                        <h1 className={styles.heading01}>How we work? </h1>
                        <h2 className={styles.heading02}>Three simple steps.</h2>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.row}>
                            <div className={styles.num}>1</div>
                            <div className={styles.text}>
                                Free Consultation. <br />
                                 Share your product, your users, and where you're losing them we'll tell you exactly what needs to change.
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.num}>2</div>
                            <div className={styles.text}>
                               Design & Review.<br />
                                We design, you review starting with wireframes, then high-fidelity screens. We refine until every screen is right.
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.num}>3</div>
                            <div className={styles.text}>
                                Files Delivered.<br />
                                  Development-ready Figma files, complete with components, specifications, and a clickable prototype delivered straight to your inbox.
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.top}>
                    <div className={styles.toptop}>
                        <h1 className={styles.heading}>You've seen how it works. Now <span className={styles.italicText}>let's make it work for you.</span></h1>
                        <p className={styles.para1}>One free consultation is all it takes. Tell us about your product, and we'll show you precisely where your UX is costing you customers.</p>
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
            </div>
            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}