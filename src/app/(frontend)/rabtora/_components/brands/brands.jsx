import Image from "next/image";
import styles from "./brands.module.css"
import tata from "./tata.png"
import alhuzifa from "./alhuzifa.png"
import titan from "./titan.png"
// import marriot from "./marriot.png"
import marq1 from "./marqq1.png"
import marq2 from "./marqq2.png"
import marq3 from "./marqq3.png"
import marq4 from "./marqq4.png"
import marq5 from "./marqq5.png"
import marq6 from "./marqq6.png"
import marq7 from "./marqq7.png"
import marq8 from "./marqq8.png"
import marq9 from "./marqq9.png"
import marq10 from "./marqq10.png"


import titan1 from "./titan1.png"
import tata2 from "./tata2.png"
import marriot from "./marriot.png"
import prestige from "./prestige.png"
import silverCoin from "./silverCoin.png"
import swiggy from "./swiggy.png"
import keshari from "./keshari.png"

export default function Brand() {
    return (
        <>
            <div className={styles.main}>
                {/* <div className={styles.mainContainer}> */}
                <div className={styles.top}>
                    <h1 className={styles.Trust}>
                        Trusted by 250+ brands
                    </h1>
                    <div className={styles.Logos}>
                        {/* <Image src={titan1} alt="tata" />
                        <span className={styles.divider} />
                        <Image src={tata2} alt="alhuzifa" />
                        <span className={styles.divider} /> */}
                        <Image src={marriot} alt="titan" />
                        <span className={styles.divider} />
                        <Image src={prestige} alt="marriot" />
                        <span className={styles.divider} />
                        <Image src={silverCoin} alt="marriot" />
                        <span className={styles.divider} />
                        {/* <Image src={swiggy} alt="marriot" />
                        <span className={styles.divider} /> */}
                         <Image src={keshari} alt="marriot" />
                        {/* <span className={styles.divider} /> */}
                    </div>
                    <div className={styles.LogoMarquee}>
                        <div className={styles.LogoMarqueeTrack}>
                            <Image src={titan1} alt="titan" />
                            <Image src={tata2} alt="tata" />
                            <Image src={marriot} alt="marriot" />
                            <Image src={prestige} alt="prestige" />
                            <Image src={silverCoin} alt="silverCoin" />
                            <Image src={swiggy} alt="swiggy" />
                            <Image src={keshari} alt="keshari" />
                            <Image src={titan1} alt="titan" />
                            <Image src={tata2} alt="tata" />
                            <Image src={marriot} alt="marriot" />
                            <Image src={prestige} alt="prestige" />
                            <Image src={silverCoin} alt="silverCoin" />
                            <Image src={swiggy} alt="swiggy" />
                            <Image src={keshari} alt="keshari" />
                        </div>
                    </div>
                </div>
                {/* <div className={styles.mid}>
                    <div className={styles.Heading}>
                        <h1 className={styles.heroHeading}>
                            Work that&nbsp;<span className={styles.italicText}>sold products</span>
                        </h1>
                    </div>
                    
                    <div className={styles.Marquee}>
                        <div className={styles.MarqueeTrack}>
                            <Image src={marq1} alt="marq1" />
                            <Image src={marq2} alt="marq2" />
                            <Image src={marq3} alt="marq3" />
                            <Image src={marq4} alt="marq4" />
                            <Image src={marq5} alt="marq5" />
                            <Image src={marq1} alt="marq1" />
                            <Image src={marq2} alt="marq2" />
                            <Image src={marq3} alt="marq3" />
                            <Image src={marq4} alt="marq4" />
                            <Image src={marq5} alt="marq5" />
                        </div>
                        <div className={styles.MarqueeTrackAnti}>
                            <Image src={marq6} alt="marq6" />
                            <Image src={marq7} alt="marq7" />
                            <Image src={marq8} alt="marq8" />
                            <Image src={marq9} alt="marq9" />
                            <Image src={marq10} alt="marq10" />
                            <Image src={marq6} alt="marq6" />
                            <Image src={marq7} alt="marq7" />
                            <Image src={marq8} alt="marq8" />
                            <Image src={marq9} alt="marq9" />
                            <Image src={marq10} alt="marq10" />
                        </div>
                    </div>
                    <div className={styles.mainContainer}>
                        <Image src={marq1} alt="marq1" />
                        <Image src={marq2} alt="marq2" />
                        <Image src={marq3} alt="marq3" />
                        <Image src={marq4} alt="marq4" />
                        <Image src={marq5} alt="marq2" />
                        <Image src={marq6} alt="marq3" />
                        <Image src={marq7} alt="marq4" />
                        <Image src={marq8} alt="marq5" />
                    </div>
                </div> */}
                
            </div>
        </>
    )
}




