import Link from 'next/link'
import React from 'react'

import styles from './../../styles/components/Tables/TableHeader.module.css'
import stylesButton from './../../styles/components/GlitchButton.module.css'

const TableHeader = ({ title, type, link }) => {
    return (
        <div className={styles.tableHeader}>
            <h3 className={styles.tableHeaderTitle}>{title}</h3>
            <Link className={`${styles.tableHeaderLink} ${stylesButton.glitchButton} ${type === 'Post' ? stylesButton.postGlitchButton : type === 'Category' ? stylesButton.categoryGlitchButton : stylesButton.galleryGlitchButton}`} href={link}>Add {type}</Link>
        </div>
    )
}

export default TableHeader