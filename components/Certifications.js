import React from 'react'
import styles from './../styles/components/Certifications.module.css'

export const Certifications = () => {
    return (
        <div className={styles.certContent}>
            <div className={styles.certInner}>
                <div className={styles.certTitle}>
                    <h4>WebInspect
                        <div className={styles.certInfo}>
                            <div className={styles.certCompany}>MicroFocus</div>
                            <div className={styles.certDate}>2022</div>
                        </div></h4>
                    <p>WebInspect AppSec Tester Certified Professional</p>
                </div>
                <div className={styles.certImg}>
                    <img src='/images/logos/microFocus.png' />
                </div>
            </div>
            <div className={styles.certInner}>
                <div className={styles.certTitle}>
                    <h4>eWPTX
                        <div className={styles.certInfo}>
                            <div className={styles.certCompany}>eLearnSecurity</div>
                            <div className={styles.certDate}>2017</div>
                        </div></h4>
                    <p>eLearnSecurity Web application Penetration Tester eXtreme</p>
                </div>
                <div className={styles.certImg}>
                    <img src='/images/logos/eLearnSecurity.png' />
                </div>
            </div>
            <div className={styles.certInner}>
                <div className={styles.certTitle}>
                    <h4>OSCE
                        <div className={styles.certInfo}>
                            <div className={styles.certCompany}>Offensive Security</div>
                            <div className={styles.certDate}>2016</div>
                        </div>
                    </h4>
                    <p>Offensive Security Certified Expert</p>
                </div>
                <div className={styles.certImg}>
                    <img src='/images/logos/offensiveSecurity.png' />
                </div>
            </div>
            <div className={styles.certInner}>
                <div className={styles.certTitle}>
                    <h4>OSCP
                        <div className={styles.certInfo}>
                            <div className={styles.certCompany}>Offensive Security</div>
                            <div className={styles.certDate}>2015</div>
                        </div></h4>
                    <p>Offensive Security Certified Professional</p>
                </div>
                <div className={styles.certImg}>
                    <img src='/images/logos/offensiveSecurity.png' />
                </div>
            </div>
            <div className={styles.certInner}>
                <div className={styles.certTitle}>
                    <h4>eCCPT
                        <div className={styles.certInfo}>
                            <div className={styles.certCompany}>eLearnSecurity</div>
                            <div className={styles.certDate}>2015</div>
                        </div></h4>
                    <p>eLearnSecurity Certified Professional Penetration Tester</p>
                </div>
                <div className={styles.certImg}>
                    <img src='/images/logos/eLearnSecurity.png' />
                </div>
            </div>
        </div>
    )
}

