import React from 'react'
import { Parallax } from "react-parallax";

import styles from './../styles/components/Tweets.module.css'
import FollowBox from './FollowBox';

const Tweets = () => {

    const followLinks = [
        {
            title: 'twitter',
            link: 'https://twitter.com/mistspark'
        },
        {
            title: 'github',
            link: 'https://github.com/mistspark'
        },
        {
            title: 'linkedin',
            link: 'https://www.linkedin.com/in/omarsalama/'
        }
    ]

    return (
        <Parallax bgImage={'/images/hack.jpg'} strength={100}>
            <div className={`${styles.tweets} pdd70`}>
                <div className='d-overlay'></div>
                <div className='container'>
                    <div className={styles.secTitle}>
                        <h1>Follow Me</h1>
                    </div>
                    <div className='row'>
                        {followLinks.map((item, index) => (
                            <div key={index} className='col-md-4'>
                                <FollowBox item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Parallax>

    )
}

export default Tweets