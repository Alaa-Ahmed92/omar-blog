import React, { useState } from 'react'
import Link from 'next/link'

import styles from './../styles/layout/Navbar.module.css'

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        setOpenNav(openNav => !openNav);
    }

    return (
        <div className={styles.navbar}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className={styles.logo}>
                            <Link href={'/'}><span>Omar</span></Link>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className={styles.navigation}>
                            <button onClick={handleClick} className={`${styles.menuBtn} ${openNav && styles.activeBtn}`}>
                                <div className={styles.menuBox}>
                                    <div className={styles.menuInner}></div>
                                </div>
                            </button>
                            <div className={`${styles.navWrapper} ${styles.navDoor} ${openNav && styles.open}`}>
                                <ul className='list-unstyled'>
                                    <li onClick={handleClick}>
                                        <Link href='/'>
                                            <span className={styles.name}>Home</span>
                                            <span className={`alaa ${styles.label}`}>Explore my latest tweets</span>
                                        </Link>
                                    </li>
                                    <li onClick={handleClick}>
                                        <Link href='/about'>
                                            <span className={styles.name}>About</span>
                                            <span className={styles.label}>Explore my resume</span>
                                        </Link>
                                    </li>
                                    <li onClick={handleClick}>
                                        <Link href='/blog'>
                                            <span className={styles.name}>Blog</span>
                                            <span className={styles.label}>Read my posts</span>
                                        </Link>
                                    </li>
                                    <li onClick={handleClick}>
                                        <Link href='/gallery'>
                                            <span className={styles.name}>Gallery</span>
                                            <span className={styles.label}>Explore my infographics</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar