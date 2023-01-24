import React from 'react'
import Link from 'next/link'

import CountUpBlock from './CountUpBlock'
import styles from './../styles/components/AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={`${styles.aboutMeContainer} pdd70`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <p className={styles.paragraph}>
                            <Link href={'/about'}>
                                Omar
                                <svg viewBox="0 0 70 36">
                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                                </svg>
                            </Link> specializes in application and network penetration testing. He has served as a developer Beta It's Ethical
                            Hacking Methodology and has performed dozens of ethical hacking engagements for clients in a wide variety of
                            industries including government, financial, retail, manufacturing, and others.
                            <Link href={'/about'}>
                                Omar
                                <svg viewBox="0 0 70 36">
                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                                </svg>
                            </Link> has had unique opportunities
                            to assess the security of new applications and technologies ranging from web-enabled e-business applications to
                            proprietary applications.</p>
                        <p className={styles.paragraph}>His security career started in 2012, concentrating on network and application security.
                            <Link href={'/about'}>
                                Omar
                                <svg viewBox="0 0 70 36">
                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                                </svg>
                            </Link> has excelled in the
                            following areas: penetration testing, application assessments, social engineering (both physical and virtual),
                            vulnerability assessments and log analysis. </p>
                    </div>
                    <div className='col-md-3 offset-md-1'>
                        <div className={styles.statistics}>
                            <div className={styles.statisticsInner}>
                                <span className={styles.counter}><CountUpBlock end={10} /> </span>
                                <span className={styles.counterText}>Years of <br />experience</span>
                            </div>
                            <div className={styles.statisticsInner}>
                                <span className={styles.counter}><CountUpBlock end={1500} />+ </span>
                                <span className={styles.counterText}>Exploitable <br />culnerabilities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe