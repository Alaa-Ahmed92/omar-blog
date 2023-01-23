import React from 'react'
import { Button, Dropdown, Space } from 'antd';

import styles from './../styles/components/BottomNavbar.module.css'
import Link from 'next/link';
import PostsButton from './Buttons/PostsButton';
import GalleriesButton from './Buttons/GalleriesButton';
import CategoriesButton from './Buttons/CategoriesButton';

const BottomNavbar = () => {

    const items = [
        {
            key: '1',
            label: (
                <Link href={`/admin/addPost`}>Add Post</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={`/admin/allPosts`}>All Posts</Link>
            ),
        },
    ];

    return (
        <div className={styles.bottomNavbar}>
            <ul className={styles.navMenu}>
                <li className={styles.navItem}>
                    <PostsButton />
                </li>
                <li className={styles.navItem}>
                    <GalleriesButton />
                </li>
                <li className={styles.navItem}>
                    <CategoriesButton />
                </li>
            </ul>
        </div>
    )
}

export default BottomNavbar