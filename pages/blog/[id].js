import React from 'react'
import Link from 'next/link'
import parse from 'html-react-parser';
import { FiEye } from 'react-icons/fi'
import { BsCalendarWeek } from 'react-icons/bs'

import Footer from '../../layout/Footer';
import Tweets from '../../components/Tweets';
import SubHeader from '../../components/SubHeader'
import { TagsBlock } from '../../components/TagsBlock'
import styles from './../../styles/pages/Blog.module.css'
import BreadCrumbBlock from '../../components/BreadCrumbBlock'

const SinglePost = ({ post }) => {

    return (
        <div className={styles.singlePostBlock}>
            <SubHeader>
                <div className='container'>
                    <h1>Articles & Resources</h1>
                    <BreadCrumbBlock>
                        <li className='breadcrumb-item'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='breadcrumb-item'>
                            <Link href={'/blog'}>Blog</Link>
                        </li>
                        <li className='breadcrumb-item active'>{post.title}</li>
                    </BreadCrumbBlock>
                    <div className={styles.postInfo}>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className={styles.postInfoBlock}>
                                    <img src='/images/omar-photo.jpg' alt='Omar Salama' />
                                    <Link href='/about'><h5>Omar Salama</h5></Link>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={styles.postInfoBlock}>
                                    <BsCalendarWeek />
                                    <span>{new Date(post.updatedAt).toDateString()}</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={styles.postInfoBlock}>
                                    <FiEye />
                                    <span>{post.views} Views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubHeader>
            <div className={styles.postWrapperBlock}>
                <div className='container'>
                    <div className={styles.postImg}>
                        <img className='img-fluid' src={post.image} alt={post.title} />
                    </div>
                    <div className={styles.postContent}>
                        {parse(post.body)}
                        <TagsBlock tags={post.categories} />
                    </div>
                </div>
            </div>
            <Tweets />
            <Footer />
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const post = await res.json();

    return {
        props: { post: JSON.parse(JSON.stringify(post.data)) }
    }
}

export default SinglePost;