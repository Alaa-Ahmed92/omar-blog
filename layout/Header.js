
import React from 'react'
import styles from './../styles/layout/Header.module.css'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className={styles.header}>
            <Navbar />
        </div>
    )
}

export default Header