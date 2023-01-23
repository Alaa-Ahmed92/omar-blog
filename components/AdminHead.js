import React from 'react'
import Link from 'next/link'

import styles from './../styles/components/AdminHead.module.css'

const AdminHead = ({ title, link, label, headStyle }) => {


    return (
        <div className={`${styles.adminWrapperHead} ${headStyle}`}>
            <h1 className={styles.adminHeading}>{title}</h1>
            {link && (
                <div className={styles.adminActions}>
                    <Link href={link}>Add {label}</Link>
                </div>
            )}
        </div>
    )
}

export default AdminHead