'use client'
import { useState } from "react"
import Image from "next/image";
import styles from "./Grids.module.css"
import ContactPopupCopy from "../ContactCopy/ContactPopupCopy"
import marq1 from "./grid1.png"
import marq2 from "./grid2.png"
import marq3 from "./grid3.png"
import marq4 from "./grid4.png"
import marq5 from "./grid5.png"
import marq6 from "./grid6.png"
import marq7 from "./grid7.png"
import marq8 from "./grid8.png"

export default function Grid() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.mainContainer}>
                        <Image
                            src={marq1}
                            alt="marq1"
                        />
                        <Image
                            src={marq2}
                            alt="marq1"
                        />
                        <Image
                            src={marq3}
                            alt="marq1"
                        />
                        <Image
                            src={marq4}
                            alt="marq1"
                        />
                        <Image
                            src={marq5}
                            alt="marq1"
                        />
                        <Image
                            src={marq6}
                            alt="marq1"
                        />
                        <Image
                            src={marq7}
                            alt="marq1"
                        />
                        <Image
                            src={marq8}
                            alt="marq1"
                        />
                    </div>
                    <div className={styles.top}>
                        <div className={styles.toptop}>
                            <h1 className={styles.heading}>
                                Ready to start a project ?

                            </h1>
                            <p className={styles.para1}>
                                Book a free consultation to get clarity, direction, and expert advice you can implement right away.
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
                </div>


            </div>
            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}