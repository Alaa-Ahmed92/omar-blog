
import React from 'react'
import styles from './../styles/layout/Header.module.css'
import Navbar from './Navbar'

const Header = ({ handleSearchClick, openSearch }) => {
    return (
        <div className={styles.header}>
            <Navbar handleSearchClick={handleSearchClick} openSearch={openSearch} />
        </div>
    )
}

export default Header