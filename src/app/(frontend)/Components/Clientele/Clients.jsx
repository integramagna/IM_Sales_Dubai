'use client';

import React from 'react';
import styles from './Clients.module.css';
import ClientLogo from './ClientLogo';
import { clients } from './clientsData';

const firstRow  = clients.slice(0, 8);
const secondRow = clients.slice(8, 16);

const Clients = () => {
    return (
        <section className={styles.main}>

            <div className={styles.heading_container}>
                <h2 className={styles.heading}>
                    Brands <span className={styles.heading_italic}>we've helped scale</span>
                </h2>
            </div>


            <div className={styles.logo_grid_desktop}>

                <div className={styles.logo_row}>
                    {firstRow.map((client) => (
                        <div key={client.id} className={styles.logo_cell}>
                            <ClientLogo src={client.logo} alt={`${client.name} Logo`} />
                        </div>
                    ))}
                </div>

                <div className={styles.divider} />

                <div className={styles.logo_row}>
                    {secondRow.map((client) => (
                        <div key={client.id} className={styles.logo_cell}>
                            <ClientLogo src={client.logo} alt={`${client.name} Logo`} />
                        </div>
                    ))}
                </div>

            </div>


            <div className={styles.clientele_mobile}>
                <div className={styles.marquee_row}>
                    <div className={styles.marquee_track}>
                        {[...firstRow, ...firstRow].map((client, i) => (
                            <div key={i} className={styles.marquee_logo}>
                                <ClientLogo src={client.logo} alt={`${client.name} Logo`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.marquee_row}>
                    <div className={`${styles.marquee_track} ${styles.marquee_reverse}`}>
                        {[...secondRow, ...secondRow].map((client, i) => (
                            <div key={i} className={styles.marquee_logo}>
                                <ClientLogo src={client.logo} alt={`${client.name} Logo`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Clients;