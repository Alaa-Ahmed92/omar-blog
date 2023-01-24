import React from 'react'
import { BiSpreadsheet } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import styles from './../styles/components/MyExperience.module.css'

const MyExperience = () => {
    return (
        <div className={`${styles.expContainer} pdd70`}>
            <div className='container'>
                <div className={styles.secTitle}>
                    <h1>My <br /> Experience</h1>
                </div>
                <div className={styles.expCardsContent}>
                    <div className={styles.expCard}>
                        <div className={styles.expCardTitle}>
                            <span className={styles.expDate}>Feb 2021 - Present</span>
                            <h3>STC</h3>
                            <h5>Senior Penetration Tester</h5>
                        </div>
                        <div className={styles.expCardInner}>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <div className={styles.expCardTxt}>
                                        <p>Responsible for performing a Penetration Testing and Vulnerability Assessment on our assets.</p>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className={styles.expCardDetails}>
                                        <span><BiSpreadsheet /> Full-Time</span>
                                        <span><HiOutlineLocationMarker /> Saudi Arabia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.expCard}>
                        <div className={styles.expCardTitle}>
                            <span className={styles.expDate}>Oct 2017 - Dec 2020</span>
                            <h3>BetaIT</h3>
                            <h5>Security Consultant - Team Leader</h5>
                        </div>
                        <div className={styles.expCardInner}>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <div className={styles.expCardTxt}>
                                        <p>Responsible for providing Penetration Testing and Vulnerability Assessment services to our clients.</p>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className={styles.expCardDetails}>
                                        <span><BiSpreadsheet /> Full-Time</span>
                                        <span><HiOutlineLocationMarker /> Saudi Arabia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.expCard}>
                        <div className={styles.expCardTitle}>
                            <span className={styles.expDate}>March 2017 - May 2017</span>
                            <h3>RootGate</h3>
                            <h5>Security Consultant</h5>
                        </div>
                        <div className={styles.expCardInner}>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <div className={styles.expCardTxt}>
                                        <p>3 Month Contract to Perform Penetration Tested on RootGate Applications, External and Internal Systems.</p>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className={styles.expCardDetails}>
                                        <span><BiSpreadsheet /> Full-Time</span>
                                        <span><HiOutlineLocationMarker /> Egypt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.expCard}>
                        <div className={styles.expCardTitle}>
                            <span className={styles.expDate}>Sep 2016 - Nov 2016</span>
                            <h3>ISNSC</h3>
                            <h5>Penetration Tester</h5>
                        </div>
                        <div className={styles.expCardInner}>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <div className={styles.expCardTxt}>
                                        <p>3 Month Contract to Perform Penetration Tested on Abu Dhabi Islamic Bank (ADIB) Mobile Applications and Internal Web Applications.</p>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className={styles.expCardDetails}>
                                        <span><BiSpreadsheet /> Full-Time</span>
                                        <span><HiOutlineLocationMarker /> UAE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.expCard}>
                        <div className={styles.expCardTitle}>
                            <span className={styles.expDate}>2012 - 2016</span>
                            <h3>iSecur1ty</h3>
                            <h5>Penetration Testing Instructor</h5>
                        </div>
                        <div className={styles.expCardInner}>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <div className={styles.expCardTxt}>
                                        <ul>
                                            <li>Co-Founder of iSecur1ty Company.</li>
                                            <li>Manager at iSecur1ty Community.</li>
                                            <li>Managed a lot of Penetration Testing and Vulnerability Assessment.</li>
                                            <li>Trained almost 4000 people across the Middle East in iSecur1ty Training Center.</li>
                                            <li>Developed a Curriculum for Teaching Techniques of Penetration Testing to Newcomers of Information Security and that is in the Form of a Whole course Named "Skills of Ethical Hacker".</li>
                                            <li>Developed a Curriculum for Teaching Techniques of Android Penetration Testing to Penetration Testers and that is in the Form of a Whole Course Named "Android Penetration Testing".</li>
                                            <li>Responsible for security researches and articles on iSecur1ty.org Community.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className={styles.expCardDetails}>
                                        <span><BiSpreadsheet /> Full-Time</span>
                                        <span><HiOutlineLocationMarker /> UAE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyExperience