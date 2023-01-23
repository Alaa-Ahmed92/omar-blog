import React from 'react'

import styles from './../styles/components/SubHeader.module.css';

const SubHeader = ({ children }) => {
    return (
        <div className={styles.subHeader}>
            <div className='container'>
                <div className={styles.subHeaderContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SubHeader;