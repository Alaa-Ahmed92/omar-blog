import React from 'react'

import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import styles from './../styles/pages/About.module.css'
import Info from '../components/Info'
import MyExperience from '../components/MyExperience'
import Footer from '../layout/Footer'


const About = () => {

    return (
        <div>
            <Banner>
                <div className={styles.bannerContent}>
                    <div className={styles.lineWrapper}>
                        <div className={`${styles.bannerWrapper} ${styles.greyColor}`}>
                            <h1>i'm omar</h1>
                            <div className={styles.sub}>©</div>
                        </div>
                        <div className={`${styles.bannerImageWrapper} ${styles.circleBanner}`}>
                            <img src='/images/omar-photo.jpg' />
                        </div>
                        <div className={styles.bannerWrapper}>
                            <h1>salama,</h1>
                        </div>
                    </div>
                    <div className={styles.lineWrapper}>
                        <div className={styles.bannerWrapper}>
                            <h1>a penetration</h1>
                        </div>
                        <div className={`${styles.bannerWrapper} ${styles.greyColor} ${styles.margin}`}>
                            <h1>tester</h1>
                        </div>
                    </div>
                </div>
                <img className={styles.elipseDivider} src='/images/elipse-divider.svg' />
            </Banner>
            <AboutMe />
            <Info />
            <MyExperience />
            <Footer />
        </div>
    )
}

export default About