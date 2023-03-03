import React from 'react';
import Link from 'next/link';
import { VscArrowSmallRight } from 'react-icons/vsc'

import styles from './../styles/components/BreadCrumbs.module.css'

const BreadCrumbs = ({ links }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
                {links.map((link, index) => {
                    return (
                        <li key={index} className={styles.breadcrumbItem}>
                            <VscArrowSmallRight />
                            {index === links.length - 1 ? <span>{link.name}</span> : <Link href={link.path}>{link.name}</Link>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    )
}

export default BreadCrumbs