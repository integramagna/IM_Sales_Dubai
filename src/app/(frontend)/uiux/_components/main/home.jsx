
'use client'
import { useEffect, useState } from "react"
import styles from "./home.module.css"
import ContactPopupCopy from "../ContactCopy/ContactPopupCopy"
import Image from "next/image"
import besanFinal from "./finalthird.webp"
import iceCreamFinal from "./finaltwo.webp"
import oilMobile from "./finalfist.webp"


import everything from "./everything.webp"
export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (window.innerWidth > 768) return

        const targets = document.querySelectorAll(
            `.${styles.txt1} h1, .${styles.txt1} h2, .${styles.center} h1, .${styles.center} h2`
        )

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.3 }
        )

        targets.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <div className={styles.top}>
                        <h3 className={styles.headingTop}>THE UAE'S TRUSTED PARTNER FOR UI/UX DESIGN</h3>
                        <h1 className={styles.headingMain}>More Clicks.<br /> More Signups.<br /> Stronger conversion <span className={styles.headingMainItalic}>Guaranteed</span></h1>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.all}>
                        <Image
                            src={everything}
                            alt="all"
                        />
                    </div>

                    {/* <div className={styles.cell1}>
                        <div className={styles.imgWrapper}>
                            <Image src={oil} alt="oilbag" />
                           

                        </div>
                        <div className={styles.txt}>
                            <h1 className={styles.txtHeading}>68%</h1>
                            <h2 className={styles.txtpara}>More consumers tried the product off retail shelves.</h2>
                        </div>
                    </div> */}
                    <div className={styles.mobCell1}
                        style={{ marginLeft: "20px" }} >
                        <Image
                            src={oilMobile}
                            alt="oil"
                        />
                    </div>

                    {/* <div className={styles.cell2}>
                        <div className={styles.txt1}>
                            <h1 className={styles.txtHeading}>40%</h1>
                            <h2 className={styles.txtpara}>More customers chose Zuno over competitors on the same shelf.</h2>
                        </div>
                        <div className={styles.imgWrapper}>
                            <Image src={icecream1} alt="icecream" />
                            
                        </div>
                    </div> */}
                    <div className={`${styles.mobCell1} ${styles.right}`}
                        style={{ marginRight: "20px" }} >
                        <Image
                            src={iceCreamFinal}
                            alt="oil"
                        />
                    </div>

                    {/* <div className={`${styles.cell1} ${styles.left}`}>
                        <div className={styles.imgWrapper}>
                            <Image className={styles.desktopOnly} src={besan} alt="besan" />
                            
                        </div>
                        <div className={`${styles.txt} ${styles.center}`}>
                            <h1 className={styles.txtHeading}>22%</h1>
                            <h2 className={styles.txtpara}>Higher price point. Same product.</h2>
                        </div>
                    </div> */}
                    <div className={`${styles.mobCell1} ${styles.left}`}
                        style={{ marginLeft: "20px" }} >
                        <Image
                            src={besanFinal}
                            alt="oil"
                        />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.para}>
                        We design interfaces that make customers click, sign up, and buy on your website, your app, and everywhere your users encounter your brand.
                    </p>
                    <button type="button" className={styles.cta} onClick={() => setIsOpen(true)}>
                        <span className={styles.ctaText}>Request a Quote</span>
                        <span className={styles.ctaArrow}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>
            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
