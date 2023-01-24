import React from 'react'
import Link from 'next/link'

import styles from './../styles/components/AdminHead.module.css'

const AdminHead = ({ handleDelete, title, link, label, headStyle }) => {


    return (
        <div className={`${styles.adminWrapperHead} ${headStyle}`}>
            <h1 className={styles.adminHeading}>{title}</h1>
            <div className={styles.adminActions}>
                {handleDelete && <button className='red-btn-sm' onClick={handleDelete}>Delete!</button>}
                {link && <Link className='green-btn-sm' href={link}>Add {label}</Link>}
            </div>
        </div>
    )
}

export default AdminHead