import Image from "next/image";
import styles from "./brands.module.css"
import tata from "./tata.png"
import alhuzifa from "./alhuzifa.png"
import titan from "./titan.png"
import marriot from "./marriot.png"
import marq1 from "./marq1.png"
import marq2 from "./marq2.png"
import marq3 from "./marq3.png"
import marq4 from "./marq4.png"
import marq5 from "./marq5.png"

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
                        <Image src={tata} alt="tata" />
                        <span className={styles.divider} />
                        <Image src={alhuzifa} alt="alhuzifa" />
                        <span className={styles.divider} />
                        <Image src={titan} alt="titan" />
                        <span className={styles.divider} />
                        <Image src={marriot} alt="marriot" />
                    </div>
                </div>
                <div className={styles.mid}>
                    <div className={styles.Heading}>
                        <h1 className={styles.heroHeading}>
                            Work that&nbsp;<span className={styles.italicText}>sold products</span>
                        </h1>
                    </div>
                    {/* Mobile: marquee */}
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
                    </div>
                    {/* Desktop: static grid 4+4 */}
                    <div className={styles.DesktopGrid}>
                        <div className={styles.GridRow}>
                            <Image src={marq1} alt="marq1" />
                            <Image src={marq2} alt="marq2" />
                            <Image src={marq3} alt="marq3" />
                            <Image src={marq4} alt="marq4" />
                        </div>
                        <div className={styles.GridRow}>
                            <Image src={marq2} alt="marq2" />
                            <Image src={marq3} alt="marq3" />
                            <Image src={marq4} alt="marq4" />
                            <Image src={marq5} alt="marq5" />
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}




