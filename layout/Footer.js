
import React from 'react'
import Link from 'next/link';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

import styles from './../styles/layout/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <img className={styles.footerElipse} src='/images/top-elipse.svg' />
            <div className={`${styles.bannerContent}`}>
                <div className={styles.lineWrapper}>
                    {/* <div className={`${styles.bannerImageWrapper} ${styles.circleBanner}`}>
                        <img src='/images/omar-photo.jpg' />
                    </div> */}
                    <div className={`${styles.bannerWrapper} ${styles.greyColor}`}>
                        <h1>have projects</h1>
                    </div>
                </div>
                <div className={styles.lineWrapper}>
                    <div className={styles.bannerWrapper}>
                        <h1>In mind?</h1>
                    </div>
                    <div className={styles.bannerButtonWrapper}>
                        <a href='https://www.linkedin.com/in/omarsalama/' target={'_blank'} className={styles.bannerButton}>Get in Touch</a>
                    </div>
                </div>
                <div className={styles.lineWrapper}>
                    <div className={styles.bannerWrapper}>
                        <h1>Let's Work</h1>
                    </div>
                    <div className={`${styles.bannerWrapper} ${styles.greyColor} ${styles.margin}`}>
                        <h1>Together</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.footerContent}>
                    <div className={styles.footerLinks}>
                        <Link href={'/'} data-text="HOME">Home</Link>
                        <Link href={'/about'} data-text="ABOUT">About</Link>
                        <Link href={'/blog'} data-text="BLOG">Blog</Link>
                        <Link href={'/gallery'} data-text="GALLERY">Gallery</Link>
                    </div>
                    <div className={styles.footerSocial}>
                        <a href='https://twitter.com/mistspark' target={'_blank'}><BsTwitter /></a>
                        <a href='https://www.linkedin.com/in/omarsalama/' target={'_blank'}><BsLinkedin /></a>
                        <a href='https://github.com/mistspark' target={'_blank'}><BsGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer