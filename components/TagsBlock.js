import React from 'react'
import Link from 'next/link'

import styles from './../styles/components/TagsBlock.module.css'

export const TagBlock = ({ children }) => {
    return (
        <Link href={'/blog'} className={styles.tag}>{children}</Link>
    )
}

export const TagsBlock = ({ tags }) => {
    return (
        <div className={styles.tagsBlock}>
            <h3>Tags: </h3>
            {tags?.map((item, index) => (
                <TagBlock key={index}>{item}</TagBlock>
            ))}
        </div>
    )
}