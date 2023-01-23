import React from 'react'
import { Breadcrumb } from 'react-bootstrap';

import styles from './../styles/components/BreadCrumbBlock.module.css';

const BreadCrumbBlock = ({ children }) => {
    return (
        <Breadcrumb className={styles.breadCrumb}>
            {children}
        </Breadcrumb>
    )
}

export default BreadCrumbBlock