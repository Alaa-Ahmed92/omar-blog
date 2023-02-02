import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Footer from '../../layout/Footer';
import Tweets from '../../components/Tweets';
import { Posts } from '../../components/Posts'
import dbConnect from './../../utils/dbConnect'
import SubHeader from '../../components/SubHeader'
import BreadCrumbBlock from '../../components/BreadCrumbBlock'
import Post from '../../models/Post';

const Blog = ({ posts, featuredPosts, latestPosts, moreStories }) => {

    return (
        <div>
            <SubHeader>
                <div className='container'>
                    <h1>Articles & Resources</h1>
                    <BreadCrumbBlock>
                        <li className='breadcrumb-item'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='breadcrumb-item active'>Blog</li>
                    </BreadCrumbBlock>
                </div>
            </SubHeader>
            <div className='postsWrapper'>
                <div className='container pdd70'>
                    <Posts posts={posts} featuredPosts={featuredPosts} latestPosts={latestPosts} moreStories={moreStories} />
                </div>
            </div>
            <Tweets />
            <Footer />
        </div>
    )
}

export const getServerSideProps = async () => {

    await dbConnect();

    const featuredPosts = await (await Post.find({}).limit(4).sort([['views', -1]])).filter(item => item.status !== 'Draft');
    const posts_result = await (await Post.find({})).filter(item => item.status !== 'Draft');
    const latestPosts = await (await Post.find({}).sort([['views', -1]]).skip(4).limit(8).sort([['createdAt', -1]])).filter(item => item.status !== 'Draft');
    const moreStories = await (await Post.find({}).sort([['views', -1]]).skip(10).sort([['createdAt', -1]])).filter(item => item.status !== 'Draft');

    const posts = posts_result.map(item => {
        const post = item.toObject();
        post._id = post._id.toString();

        return post;
    });


    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
            featuredPosts: JSON.parse(JSON.stringify(featuredPosts)),
            latestPosts: JSON.parse(JSON.stringify(latestPosts)),
            moreStories: JSON.parse(JSON.stringify(moreStories)),
        }
    }

};

export default Blog