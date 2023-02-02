import React from 'react'
import Link from 'next/link';
import Masonry from 'react-masonry-css'

import styles from './../styles/components/Posts.module.css';

export const VerticalPostCard = ({ article }) => {
    return (
        <div className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
            <Link href={`/blog/${article._id}`}>
                <div className={styles.imgPlace}>
                    <img src={article.image} className='img-fluid' />
                    <div className={styles.glitchLayers}>
                        <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article.image})` }}></div>
                        <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article.image})` }}></div>
                        <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article.image})` }}></div>
                    </div>
                </div>
                <div className={styles.postCardContent}>
                    {article.categories.map((item, index) => (<span key={index} className={styles.tag}>{item}</span>))}
                    <h4>{article.title}</h4>
                    <div className={styles.postCardFooter}>
                        <span className={styles.author}>Omar Salama</span>
                        <span className={styles.date}>{new Date(article.updatedAt).toDateString()}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export const HorizontalPostCard = ({ article }) => {
    return (
        <div className={`${styles.postCard} ${styles.HorPostCard}`}>
            <Link href={`/blog/${article?._id}`}>
                <div className='row align-items-center'>
                    <div className='col-md-5'>
                        <div className={styles.imgPlace}>
                            <img src={article?.image} className='img-fluid' />
                            <div className={styles.glitchLayers}>
                                <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article?.image})` }}></div>
                                <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article?.image})` }}></div>
                                <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article?.image})` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={styles.postCardContent}>
                            {article?.categories.map((item, index) => (<span key={index} className={styles.tag}>{item}</span>))}
                            <h4>{article?.title}</h4>
                            <div className={styles.postCardFooter}>
                                <span className={styles.author}>Omar Salama</span>
                                <span className={styles.date}>{new Date(article?.updatedAt).toDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export const Posts = ({ posts, featuredPosts, latestPosts, moreStories }) => {

    return (
        <div>
            {(featuredPosts.length && latestPosts.length && moreStories.length) === 0 && <h3>No posts are published yet.</h3>}
            {featuredPosts?.length === 4 && (
                <div className={styles.featuredBlog}>
                    <h3 className={styles.blogSecTitle}>Featured</h3>
                    <div className='row'>
                        <div className='col-md-6'>
                            <VerticalPostCard article={featuredPosts[0]} />
                        </div>
                        <div className='col-md-6'>
                            {featuredPosts.slice(1).map(article => (
                                <HorizontalPostCard key={article._id} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {latestPosts.length > 0 && (
                <div className={styles.latestStories}>
                    <h3 className={styles.blogSecTitle}>Latest stories</h3>
                    <Masonry
                        breakpointCols={4}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {latestPosts?.map(article => (
                            <div key={article._id} className={`${styles.postCard} ${styles.VerPostCard} postCardStyle`}>
                                <Link href={`/blog/${article?._id}`}>
                                    <div className={styles.imgPlace}>
                                        <img src={article.image} className='img-fluid' />
                                        <div className={styles.glitchLayers}>
                                            <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article?.image})` }}></div>
                                            <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article?.image})` }}></div>
                                            <div className={styles.glitchLayer} style={{ backgroundImage: `url(${article?.image})` }}></div>
                                        </div>
                                    </div>
                                    <div className={styles.postCardContent}>
                                        {article.categories.map((category, index) => (
                                            <span key={index} className={styles.tag}>{category}</span>
                                        ))}
                                        <h4>{article.title}</h4>
                                        <div className={styles.postCardFooter}>
                                            <span className={styles.author}>Omar Salama</span>
                                            <span className={styles.date}>{new Date(article?.updatedAt).toDateString()}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Masonry>
                </div>
            )}
            {moreStories.length > 0 && (
                <div className={styles.moreStories}>
                    <h3 className={styles.blogSecTitle}>More Stories</h3>
                    <div className={styles.secContent}>
                        {moreStories.map(article => (
                            <HorizontalPostCard article={article} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}