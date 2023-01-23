import React from 'react'
import { Parallax } from "react-parallax";

import styles from './../styles/components/Tweets.module.css'

const Tweets = () => {
    return (
        <Parallax bgImage={'/images/hack.jpg'} strength={500}>
            <div className={`${styles.tweets} pdd70`}>
                <div className='d-overlay'></div>
                <div className='container'>
                    <div className={styles.secTitle}>
                        <h1>Follow Me</h1>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6990628979682492416" height="438" width="504" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>

                        </div>
                        <div className='col-md-4'>
                            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6990208854831579136" height="512" width="504" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>

                        </div>
                        <div className='col-md-4'>
                            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6971044619602006016" height="333" width="504" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    )
}

export default Tweets