import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { ImImages } from 'react-icons/im'
import { BsTextLeft } from 'react-icons/bs'
import { RiImageAddLine } from 'react-icons/ri'
import { BiCategory, BiPlusCircle } from 'react-icons/bi'
import { MdPostAdd, MdOutlineManageAccounts } from 'react-icons/md'

import Post from '../../models/Post';
import Gallery from '../../models/Gallery';
import Category from '../../models/Category';
import dbConnect from "../../utils/dbConnect";
import AdminHead from '../../components/AdminHead'
import styles from './../../styles/pages/Admin.module.css'

const AdminPanel = ({ posts, galleries, categories }) => {

    const [draftPosts, setDraftPosts] = useState([]);
    const [publishPosts, setPublishPosts] = useState([]);

    const [draftGalleries, setDraftGalleries] = useState([]);
    const [publishGalleries, setPublishGalleries] = useState([]);

    useEffect(() => {
        const draftPostsArr = posts.filter(post => post.status === "Draft");
        const publishPostsArr = posts.filter(post => post.status === "publish");

        const draftGalleriesArr = galleries.filter(gallery => gallery.status === "Draft");
        const publishGalleriesArr = galleries.filter(gallery => gallery.status === "publish");

        setDraftPosts(draftPostsArr);
        setPublishPosts(publishPostsArr);

        setDraftGalleries(draftGalleriesArr);
        setPublishGalleries(publishGalleriesArr);
    }, [])


    return (
        <div className={styles.adminPanel}>
            <div className='container'>
                <AdminHead title={'Admin Panel'} />
                <div className={styles.tablesWrapper}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={`${styles.statisticBox} green-statis-box`}>
                                <div className={styles.statisticBoxHeader}>
                                    <h5 className='statis-title'><BiCategory /> Categories</h5>
                                    <div className={styles.headActions}>
                                        <Link href={'/admin/categories'}><MdOutlineManageAccounts /></Link>
                                        <Link href={'/admin/categories/new'}><BiPlusCircle /></Link>
                                    </div>
                                </div>
                                <div className={styles.statisticBoxContent}>
                                    <h4>Categories: {categories.length}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={`${styles.statisticBox} orange-statis-box`}>
                                <div className={styles.statisticBoxHeader}>
                                    <h5 className='statis-title'><BsTextLeft /> Posts</h5>
                                    <div className={styles.headActions}>
                                        <Link href={'/admin/posts'}><MdOutlineManageAccounts /></Link>
                                        <Link href={'/admin/posts/new'}><MdPostAdd /></Link>
                                    </div>
                                </div>
                                <div className={styles.statisticBoxContent}>
                                    <h4>Posts: {posts.length}</h4>
                                    <div className={styles.statisticBoxStatus}>
                                        <h5>
                                            <span>Publish: </span>
                                            {publishPosts.length}
                                        </h5>
                                        <h5>
                                            <span>Draft: </span>
                                            {draftPosts.length}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={`${styles.statisticBox} blue-statis-box`}>
                                <div className={styles.statisticBoxHeader}>
                                    <h5 className='statis-title'><ImImages /> Galleries</h5>
                                    <div className={styles.headActions}>
                                        <Link href={'/admin/galleries'}><MdOutlineManageAccounts /></Link>
                                        <Link href={'/admin/galleries/new'}><RiImageAddLine /></Link>
                                    </div>
                                </div>
                                <div className={styles.statisticBoxContent}>
                                    <h4>Galleries: {galleries.length}</h4>
                                    <div className={styles.statisticBoxStatus}>
                                        <h5>
                                            <span>Publish: </span>
                                            {publishGalleries.length}
                                        </h5>
                                        <h5>
                                            <span>Draft: </span>
                                            {draftGalleries.length}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {

    const myCookie = ctx.req?.cookies || "";
    await dbConnect();

    // Categoires
    const result = await Category.find({})
    const categories = result.map((item) => {
        const category = item.toObject()
        category._id = category._id.toString()
        return category
    })

    // Galleries
    const galleries_result = await Gallery.find({})
    const galleries = galleries_result.map((item) => {
        const gallery = item.toObject()
        gallery._id = gallery._id.toString()

        return gallery
    })

    // Posts
    const posts_result = await Post.find({})
    const posts = posts_result.map((item) => {
        const post = item.toObject()
        post._id = post._id.toString()

        return post
    })

    // Token
    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permenant: false
            }
        }
    }

    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories)),
            galleries: JSON.parse(JSON.stringify(galleries)),
            posts: JSON.parse(JSON.stringify(posts)),
        }
    }
}

export default AdminPanel;