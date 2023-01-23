import React from 'react'
import styles from './../styles/components/Banner.module.css';

const Banner = ({children}) => {
  return (
    <div className={styles.banner}>{children}</div>
  )
}

export default Banner