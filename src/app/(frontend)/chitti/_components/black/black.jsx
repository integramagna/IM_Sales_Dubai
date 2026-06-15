"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "./black.module.css"
import bottle from "./bottle.png"
import surgeCup from "./surgeCup.png"
import gridHead from "./gridHead.png"
import plainProducts from "./plainProducts.png"
export default function Black() {
    const buttons = ["Pouches", "Bottles", "Boxes", "Tin", "3d Mockups", "Sachets"]
    const [activeIndex, setActiveIndex] = useState(0)
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
                            <div className={styles.gridHead1}>
                                <h1 className={styles.gridText}>Food & Beverages</h1>
                                <Image src={gridHead} alt="gridhead" />
                            </div>
                            <div className={`${styles.cell} ${styles.green}`}>
                                <h1 className={styles.gridText}>Beauty & Skincare</h1>
                                <Image src={bottle} alt="gridhead" />
                            </div>
                            <div className={`${styles.cell} ${styles.blue}`}>
                                <h1 className={styles.gridText}>Baby & Wellness</h1>
                                <Image src={surgeCup} alt="gridhead" />
                            </div>
                            <div className={`${styles.cell} ${styles.grey}`}>
                                <h1 className={styles.gridText}>Spices & Staples</h1>
                                <Image src={surgeCup} alt="gridhead" />
                            </div>
                            <div className={`${styles.cell} ${styles.yellow}`}>
                                <h1 className={styles.gridText}>D2C & Gifting</h1>
                                <Image src={surgeCup} alt="gridhead" />
                            </div>
                            <div className={`${styles.cell} ${styles.green}`}>
                                <h1 className={styles.gridText}>Snacks & Namkeen</h1>
                                <Image src={surgeCup} alt="gridhead" />
                            </div>
                            <div className={`${styles.cell} ${styles.purple}`}>
                                <h1 className={styles.gridText}>Supplements Dairy & Frozen</h1>
                                <Image src={surgeCup} alt="gridhead" />
                            </div>
                        </div>
                        <div className={styles.Bottom}>
                            <div className={styles.line}>
                                <svg width="342" height="1" viewBox="0 0 342 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="342" y2="0.5" stroke="url(#paint0_linear_3741_25936)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3741_25936" x1="0" y1="1.5" x2="342" y2="1.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#050001" />
                                            <stop offset="0.524038" stop-color="#D0D0D0" />
                                            <stop offset="1" stop-color="#050001" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            <div className={styles.blankDiv}>
                                <div className={styles.blankImg}>
                                    <Image
                                        src={plainProducts}
                                        alt="plainProduct"
                                    />
                                </div>
                                <div className={styles.multiButtons}>
                                    {buttons.map((button, index) => (
                                        <button
                                            key={button} // Better to use the string value than array index if unique
                                            onClick={() => setActiveIndex(index)}
                                            className={`${styles.filterBtn} ${activeIndex === index ? styles.active : ""}`}
                                        >
                                            {button}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}