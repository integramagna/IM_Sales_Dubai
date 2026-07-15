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
                        <h1 className={styles.heading01}>How it works ? </h1>
                        <h2 className={styles.heading02}>3 simple steps.</h2>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.row}>
                            <div className={styles.num}>1</div>
                            <div className={styles.text}>
                                Free call. <br />
                                 Tell us about your product, your users, and where you're losing them. We'll tell you exactly what needs to change.
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.num}>2</div>
                            <div className={styles.text}>
                                Design & review. <br />
                                We design. You see wireframes, then high-fidelity screens. We revise until every screen feels right.
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.num}>3</div>
                            <div className={styles.text}>
                                Files delivered. <br />
                                Dev-ready Figma files with components, specs, and a clickable prototype - in your inbox.
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.top}>
                    <div className={styles.toptop}>
                        <h1 className={styles.heading}>You've seen how it works. Now <span className={styles.italicText}>let's make it work for you.</span></h1>
                        <p className={styles.para1}>One free call is all it takes. Tell us about your product and we'll show you exactly where your UX is costing you customers.</p>
                    </div>
                    <div className={styles.topbottom}>
                        <div className={styles.Quote} onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
                            <div className={styles.txt0}>
                                Request a Quote                             </div>
                            <div className={styles.circle}>
                                <svg className={styles.iconAlign} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="24" height="24" rx="12" fill="black" />
                                    <path d="M10.4913 9.83685L18.4462 9.83685L18.4462 17.7918M17.8938 10.3893L9.82836 18.4547" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}