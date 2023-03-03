import React from 'react'
import { ImTwitter, ImGithub, ImLinkedin } from 'react-icons/im'

import styles from './../styles/components/FollowBox.module.css'

const FollowBox = ({ item }) => {
    return (
        <a href={item.link} className={`${styles.followLink} followBox ${item.title}`} target='_blank'>
            <div className={`${styles.followBox} followLink`}>
                <div className={styles.followIcon}>
                    {item.title == 'twitter' && <ImTwitter />}
                    {item.title == 'github' && <ImGithub />}
                    {item.title == 'linkedin' && <ImLinkedin />}
                </div>
                <h4>{item.title}</h4>
            </div>
        </a>
    )
}

export default FollowBox