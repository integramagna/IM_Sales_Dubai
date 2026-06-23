"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "./black.module.css"
// import bottle from "./bottle.png"
// import surgeCup from "./surgeCup.png"
// import gridHead from "./gridHead.png"
// import plainProducts from "./plainProducts.png"



export default function Black() {
    // const buttons = ["Pouches", "Bottles", "Boxes", "Tin", "3d Mockups", "Sachets"]
    // const [activeIndex, setActiveIndex] = useState(0)
    return (
        <>
            <div className={styles.Parent}>
                <div className={styles.main}>
                    <div className={styles.mainContainer}>
                        <div className={styles.top}>
                            <h1 className={styles.heading}>
                                What we design for </h1>
                            <h2 className={styles.headingNorm}>We design for every shelf, every category.</h2>
                        </div>
                        <div className={styles.grid}>
                            {/* <div className={styles.gridHead1}>
                                <h1 className={styles.gridText}>Food & Beverages</h1>
                                <Image src={gridHead} alt="gridhead" />
                            </div> */}
                            <div className={`${styles.cell} ${styles.green}`}>
                                <h1 className={styles.gridText}>Landing Pages</h1>
                                <h3>Built to convert clicks into customers, not just look good.</h3>
                                {/* <Image src={coffee} alt="gridhead" /> */}
                            </div>
                            <div className={`${styles.cell} ${styles.blue}`}>
                                <h1 className={styles.gridText}>Mobile Apps </h1>
                                <h3>Interfaces people actually want to open again.</h3>
                                {/* <Image src={shampoo} alt="gridhead" /> */}
                            </div>
                            <div className={`${styles.cell} ${styles.grey}`}>
                                <h1 className={styles.gridText}>SaaS Dashboards</h1>
                                 <h3>Complex data, made instantly readable.</h3>

                                {/* <Image src={grassTop} alt="gridhead" /> */}
                            </div>
                            <div className={`${styles.cell} ${styles.yellow}`}>
                                <h1 className={styles.gridText}>E-commerce UX </h1>
                                <h3>Fewer drop-offs, more completed checkouts.</h3>
                                {/* <Image src={iceCream} alt="gridhead" /> */}
                            </div>
                            <div className={`${styles.cell} ${styles.green}`}>
                                <h1 className={styles.gridText}>Brand Websites</h1>
                                <h3>Your brand's first impression, designed to land.</h3>
                                {/* <Image src={spiceTop} alt="gridhead" /> */}
                            </div>
                            <div className={`${styles.cell} ${styles.purple}`}>
                                <h1 className={styles.gridText}>Corporate Portals </h1>
                                <h3>Internal tools your teams won't fight to use.</h3>
                                {/* <Image src={oilTop} alt="gridhead" /> */}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}