
import Link from 'next/link'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.homeWrapper}>
        <div className={styles.videoWrapper}>
          <div className={styles.bgStrip}></div>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.glitch} data-text="Omar Salama">Omar Salama</h1>
          <p>Senior Penetration Tester</p>
          <Link className={styles.glassAnimate} href="/about">Who I AM</Link>
        </div>
        <div className={styles.lines}>
          <div className={styles.content}>
            <div className={styles.lineCol}></div>
            <div className={styles.lineCol}></div>
            <div className={styles.lineCol}></div>
            <div className={styles.lineCol}></div>
            <div className={styles.lineCol}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
