import React from 'react'

import Category from '../../../models/Category';
import dbConnect from "../../../utils/dbConnect";
import AdminHead from '../../../components/AdminHead'
import PostForm from '../../../components/Forms/PostForm';
import BreadCrumbs from '../../../components/BreadCrumbs';


const AddPost = ({ categories }) => {

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Posts', path: '/admin/posts' },
        { name: 'New Post', path: '/admin/posts/new' }
    ];

    const postForm = {
        title: '',
        body: '',
        status: 'Draft',
        image: '',
        categories: [],
        views: 0
    }

    return (
        <div className={`pb-50`}>
            <div className='container'>
                <AdminHead className='orange-admin-head' title='Add Post' />
                <BreadCrumbs links={links} />
                <PostForm className='orange-category-form' categories={categories} formId="add-post-form" postInput={postForm} />
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {

    const myCookie = ctx.req?.cookies || "";
    await dbConnect();

    /* find all the data in our database */
    const result = await Category.find({});

    const categories = result.map((item) => {
        const category = item.toObject()
        category._id = category._id.toString()
        category.label = category.name;
        category.value = category.name;
        return category
    })

    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permenant: false
            }
        }
    }

    return {
        props: { categories: JSON.parse(JSON.stringify(categories)) }
    }
}

export default AddPost