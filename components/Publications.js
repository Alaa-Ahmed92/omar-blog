import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

import styles from './../styles/components/Publications.module.css'

const Publications = () => {
    return (
        <div className={styles.publicContent}>
            <span className={styles.publicIcon}>
                <HiOutlineExternalLink />
            </span>
            <div className={`row ${styles.row}`}>
                <div className={`col-xl-6 ${styles.column}`}>
                    <div className={styles.publicBox}>
                        <a target='_blank' href='https://www.packtpub.com/product/python-ethical-hacking-from-scratch/9781838829506'>
                            <div className={styles.publicDetails}>
                                <span>PacktPub / Book Reviewer / June 2021</span>
                                <h4>Python Ethical Hacking from Scratch</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={`col-xl-6 ${styles.column}`}>
                    <div className={styles.publicBox}>
                        <a target='_blank' href='https://hakin9.org/product/wireless-hacking/'>
                            <div className={styles.publicDetails}>
                                <span>Hakin9 Magazine / Author / March 2017</span>
                                <h4>Wireless Hacking</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={`col-xl-6 ${styles.column}`}>
                    <div className={styles.publicBox}>
                        <a target='_blank' href='https://hakin9.org/product/the-power-of-scapy/'>
                            <div className={styles.publicDetails}>
                                <span>Hakin9 Magazine / Author / Sep 2016</span>
                                <h4>Power of Scapy</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={`col-xl-6 ${styles.column}`}>
                    <div className={styles.publicBox}>
                        <a target='_blank' href='https://www.youtube.com/watch?v=jmwiO5a_qbg'>
                            <div className={styles.publicDetails}>
                                <span>The Greek Campus / Lecturer / May 2015</span>
                                <h4>Information Security Workshop</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publications;