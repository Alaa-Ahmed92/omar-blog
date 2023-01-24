import React from 'react'
import Link from 'next/link';
import Masonry from 'react-masonry-css'

import styles from './../styles/components/Posts.module.css';

export const VerticalPostCard = ({ article }) => {
    return (
        <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
            <Link href={`/blog/1`}>
                <div className={styles.imgPlace}>
                    <img src={'/images/blog/1.jpg'} className='img-fluid' />
                    <div className={styles.glitchLayers}>
                        <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/1.jpg)` }}></div>
                        <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/1.jpg)` }}></div>
                        <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/1.jpg)` }}></div>
                    </div>
                </div>
                <div className={styles.postCardContent}>
                    <span className={styles.tag}>AWS Security</span>
                    <h4>Vulnerability management with Wazuh open source XDR</h4>
                    <p className={styles.shortBody}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
                    <div className={styles.postCardFooter}>
                        <span className={styles.author}>Omar Salama</span>
                        <span className={styles.date}>Dec 22, 2022</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export const HorizontalPostCard = ({ article }) => {
    return (
        <div className={`${styles.postCard} ${styles.HorPostCard}`}>
            <Link href={`/blog/1`}>
                <div className='row align-items-center'>
                    <div className='col-md-5'>
                        <div className={styles.imgPlace}>
                            <img src={'/images/blog/2.jpg'} className='img-fluid' />
                            <div className={styles.glitchLayers}>
                                <div className={styles.glitchLayer} style={{ backgroundImage: `url('/images/blog/2.jpg')` }}></div>
                                <div className={styles.glitchLayer} style={{ backgroundImage: `url('/images/blog/2.jpg')` }}></div>
                                <div className={styles.glitchLayer} style={{ backgroundImage: `url('/images/blog/2.jpg')` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={styles.postCardContent}>
                            <span className={styles.tag}>Blockchain Hacking</span>
                            <h4>7 Tips to Build A Banking Application That Will Be User-Friendly</h4>
                            <div className={styles.postCardFooter}>
                                <span className={styles.author}>Omar Salama</span>
                                <span className={styles.date}>Dec 22, 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export const Posts = () => {

    return (
        <div>
            <div className={styles.featuredBlog}>
                <h3 className={styles.blogSecTitle}>Featured</h3>
                <div className='row'>
                    <div className='col-md-6'>
                        <VerticalPostCard />
                    </div>
                    <div className='col-md-6'>
                        <HorizontalPostCard />
                        <HorizontalPostCard />
                        <HorizontalPostCard />
                    </div>
                </div>
            </div>
            <div className={styles.latestStories}>
                <h3 className={styles.blogSecTitle}>Latest stories</h3>
                <Masonry
                    breakpointCols={4}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/1.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/1.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/1.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/1.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/2.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/2.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/2.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/2.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/3.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/3.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/3.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/3.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/4.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/4.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/4.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/4.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/5.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/5.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/5.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/5.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/6.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/6.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/6.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/6.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/7.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/7.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/7.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/7.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                        <Link href={`/blog/1`}>
                            <div className={styles.imgPlace}>
                                <img src={'/images/blog/8.jpg'} className='img-fluid' />
                                <div className={styles.glitchLayers}>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/8.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/8.jpg)` }}></div>
                                    <div className={styles.glitchLayer} style={{ backgroundImage: `url(/images/blog/8.jpg)` }}></div>
                                </div>
                            </div>
                            <div className={styles.postCardContent}>
                                <span className={styles.tag}>AWS Security</span>
                                <h4>Vulnerability management with Wazuh open source XDR</h4>
                                <div className={styles.postCardFooter}>
                                    <span className={styles.author}>Omar Salama</span>
                                    <span className={styles.date}>Dec 22, 2022</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                </Masonry>
            </div>
            <div className={styles.moreStories}>
                <h3 className={styles.blogSecTitle}>More Stories</h3>
                <div className={styles.secContent}>
                    <HorizontalPostCard />
                    <HorizontalPostCard />
                    <HorizontalPostCard />
                    <HorizontalPostCard />
                </div>
            </div>
        </div>
    )
}