import React, { useEffect, useState } from 'react'
import Header from './Header'
import styles from './../styles/layout/Layout.module.css'

const Layout = ({ children }) => {

    const [openSearch, setOpenSearch] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // if (event.key === 'k' && event.ctrlKey) {
            //     setOpenSearch(openSearch => !openSearch);
            // }
            if (event.keyCode === 27) {
                setOpenSearch(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleSearchClick = () => {
        setOpenSearch(openSearch => !openSearch);
    }


    return (
        <div className={styles.layout}>
            <Header handleSearchClick={handleSearchClick} openSearch={openSearch} />
            {children}
        </div>
    )
}

export default Layout