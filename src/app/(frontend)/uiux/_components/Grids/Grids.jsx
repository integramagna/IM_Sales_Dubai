'use client'
import { useState } from "react"
import Image from "next/image";
import styles from "./Grids.module.css"
import ContactPopupCopy from "../ContactCopy/ContactPopupCopy"
import longImg from "./long.webp"
import img1 from "./Frame 1984079042.webp"
import img2 from "./Frame 1984079045 (1).webp"
import img3 from "./Frame 1984079046.webp"
import img4 from "./Frame 1984079720.webp"
import img5 from "./Frame 1984079721 (1).webp"
import img6 from "./Group 1597885696.webp"
import img7 from "./Rectangle 161125236 (3).webp"
import img8 from "./Rectangle 161125244.webp"
import img9 from "./Rectangle 161125245 (3).webp"
import img10 from "./Rectangle 161125246 (1).webp"
import img11 from "./Frame 1984079270.webp"
import img12 from "./Frame 1984079722.webp"
import img13 from "./Frame 1984079726.webp"
import img14 from "./Group 15978895713.webp"

export default function Grid() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.mainContainer}>
                        {/* mobile row 1: long.png full width, hidden on desktop */}
                        <Image src={longImg} alt="grid-long" className={styles.mobileLong} />
                        {/* desktop: 8 images (2 rows × 4 cols); mobile: rows 2–5 */}
                        <Image src={img1} alt="grid1" />
                        <Image src={img2} alt="grid2" />
                        <Image src={img3} alt="grid3" />
                        <Image src={img4} alt="grid4" />
                        <Image src={img5} alt="grid5" />
                        <Image src={img6} alt="grid6" />
                        <Image src={img7} alt="grid7" />
                        <Image src={img8} alt="grid8" />
                        {/* mobile only: rows 6–8 */}
                        <Image src={img9} alt="grid9" className={styles.mobileOnly} />
                        <Image src={img10} alt="grid10" className={styles.mobileOnly} />
                        <Image src={img11} alt="grid11" className={styles.mobileOnly} />
                        <Image src={img12} alt="grid12" className={styles.mobileOnly} />
                        <Image src={img13} alt="grid13" className={styles.mobileOnly} />
                        <Image src={img14} alt="grid14" className={styles.mobileOnly} />
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


            </div>
            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
