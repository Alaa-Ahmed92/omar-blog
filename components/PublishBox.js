import React from 'react'
import { MdOutlinePublish } from 'react-icons/md'

import styles from './../styles/components/PublishBox.module.css'
import SelectBox from './SelectBox'
import UploadImage from './UploadImage'

const PublishBox = () => {
    return (
        <div className={`${styles.publishBox} blogBox`}>
            <h5><MdOutlinePublish /> Publish</h5>
            <div className={styles.boxContent}>
                <ul className='list-unstyled'>
                    <li><strong>Status:</strong> <SelectBox /></li>
                    <li><strong>Visibilty:</strong> <span>Publish</span></li>
                </ul>
                <div>
                    <UploadImage />
                </div>
                <div className={styles.boxActions}>
                    <button className='blue-btn-sm'>Save as draft</button>
                    <button className='green-btn-sm'>Update!</button>
                </div>
            </div>
        </div>
    )
}

export default PublishBox