import React from 'react'
import { MdOutlinePublish } from 'react-icons/md'

import styles from './../styles/components/PublishBox.module.css'
import SelectBox from './SelectBox'

const PublishBox = ({ form, errors, forNewPost, handleImages, visibilty, status, handleSelectChanges }) => {

    return (
        <div className={`${styles.publishBox} blogBox`}>
            <h5><MdOutlinePublish /> Publish</h5>
            <div className={styles.boxContent}>
                <div className={styles.boxSubmit}>
                    <ul className='list-unstyled'>
                        <li><strong>Status:</strong> <SelectBox status={status} handleSelectChanges={handleSelectChanges} /></li>
                        <li><strong>Visibilty:</strong> <span style={{ textTransform: 'capitalize' }}>{visibilty}</span></li>
                    </ul>
                    <div className={styles.boxActions}>
                        <button className='green-btn-sm'>Update!</button>
                    </div>
                </div>
                <div className={styles.boxImages}>
                    <input onChange={handleImages} type='file' accept="image/*" />
                    {errors && <p className='color-red'>{errors.errs.image}</p>}
                    {form.image && <div className={styles.previewImg}><img className='img-fluid' src={form.image} alt={form.title} /></div>}
                </div>
            </div>
        </div>
    )
}

export default PublishBox