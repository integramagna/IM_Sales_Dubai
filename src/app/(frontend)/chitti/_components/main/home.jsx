
'use client'
import { useEffect, useState } from "react"
import styles from "./home.module.css"
import ContactPopupCopy from "../ContactCopy/ContactPopupCopy"
import Image from "next/image"
import oil from "./oil.png"
import icecream1 from "./icecream1.png"
import besanFinal from "./besanFinal.png"
import iceCreamFinal from "./iceCreamFinal.png"
import oilMobile from "./oilMobile.png"
import besan from "./besan.png"
import besanArrow from "./besanArrow.png"
import icecreamArrow from "./icecreamArrow.png"
import everything from "./everything.png"
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
                        <h3 className={styles.headingTop}>LEADING PRODUCT PACKAGING DESIGN COMPANY IN INDIA </h3>
                        <h1 className={styles.headingMain}>Packaging Design That Gets Picked Off the Shelf.</h1>
                        <h1 className={styles.headingMainItalic}>Guaranteed.</h1>
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
                    <div className={styles.mobCell1}>
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
                    <div className={`${styles.mobCell1} ${styles.right}`}>
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
                    <div className={`${styles.mobCell1} ${styles.left}`}>
                        <Image
                            src={besanFinal}
                            alt="oil"
                        />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.para}>
                        We design packaging that makes customers pick your product, on shelves, on Blinkit, on Amazon, and everywhere in between.
                    </p>
                    <div className={styles.Quote} onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
                        <div className={styles.txt0}>
                            Request a Quote
                        </div>
                        <div className={styles.circle}>
                            <svg
                                style={{ position: 'relative', top: '3px', paddingRight: '5px' }}
                                className={styles.arrowIcon}
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="2" y="2" width="24" height="24" rx="12" fill="white" />
                                <path d="M10.4913 9.83685L18.4462 9.83685L18.4462 17.7918M17.8938 10.3893L9.82836 18.4547" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                        </div>
                    </div>
                </div>

            </div>
            <ContactPopupCopy isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
