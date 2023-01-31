import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { RiSearchLine } from 'react-icons/ri'
import { FaAngleRight } from 'react-icons/fa'
import ModalImage from "react-modal-image";

import styles from './../styles/layout/Navbar.module.css'

const Navbar = ({ handleSearchClick, openSearch }) => {
    const router = useRouter();
    const { id } = router.query;
    const [openNav, setOpenNav] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState({ posts: [], galleries: [] });
    const [openGallery, setOpenGallery] = useState(false);

    useEffect(() => {
        if (searchValue.length > 0 && searchValue !== " ") {
            fetch(`http://localhost:3000/api/search?query=${searchValue.trim()}`)
                .then((res) => res.json())
                .then((data) => setResults(data))
        } else {
            setResults({ posts: [], galleries: [] });
        }
    }, [searchValue])

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleCloseSearchAndResetValue = () => {
        handleSearchClick();
        setSearchValue('');
    }

    const handleClick = (e) => {
        e.preventDefault();
        setOpenNav(openNav => !openNav);
        setSearchValue('');
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
                            <div className={styles.navigationActions}>
                                <div onClick={handleSearchClick} className={styles.searchBtn}>
                                    <div className={styles.searchBox}>
                                        <RiSearchLine />
                                        <h6>Search...</h6>
                                    </div>
                                </div>
                                <button onClick={handleClick} className={`${styles.menuBtn} ${openNav && styles.activeBtn}`}>
                                    <div className={styles.menuBox}>
                                        <div className={styles.menuInner}></div>
                                    </div>
                                </button>
                            </div>
                            {/* Search Content */}
                            <div className={`${styles.searchWrapper} ${openSearch && styles.open}`}>
                                <div className={styles.searchContent}>
                                    <div className={styles.searchContentBox}>
                                        <div className={styles.searchLeftSide}>
                                            <RiSearchLine />
                                            <input value={searchValue} onChange={handleSearchChange} type='text' placeholder='Search...' />
                                        </div>
                                        <div className={styles.closeBtn}><span onClick={handleSearchClick}>ESC</span></div>
                                    </div>
                                    <div className={styles.searchInner}>
                                        {results.posts.length > 0 && (
                                            <ul className={styles.searchInnerList}>
                                                <h6>Posts</h6>
                                                {results.posts.map(post => (
                                                    <li onClick={handleCloseSearchAndResetValue} className={styles.searchInnerBox} key={post._id}>
                                                        <Link href={`/blog/${post._id}`}><div>{post.title}</div><FaAngleRight /></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {results.galleries.length > 0 && (
                                            <ul className={`${styles.searchInnerList} ${styles.searchInfoList}`}>
                                                <h6>Infographics</h6>
                                                <div className={`row`}>
                                                    {results.galleries.map(gallery => (
                                                        <div className='col-md-4'>
                                                            <li className={`${styles.searchInnerBox} ${styles.searchGallery}`} key={gallery._id}>
                                                                <ModalImage small={gallery.image} large={gallery.image} alt={gallery.title} />
                                                            </li>
                                                        </div>
                                                    ))}
                                                </div>
                                            </ul>
                                        )}
                                        {results.posts.length === 0 && results.galleries.length === 0 && (<div className={styles.recentSearches}>No results yet</div>)}
                                    </div>
                                </div>
                            </div>

                            {/* Menu Content */}
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