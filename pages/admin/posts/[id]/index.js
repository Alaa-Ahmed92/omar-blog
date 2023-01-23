import React from 'react'
import AdminHead from '../../../../components/AdminHead';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import PostForm from '../../../../components/Forms/PostForm';
import Category from '../../../../models/Category';
import dbConnect from '../../../../utils/dbConnect';

const PostPage = ({ categories, post }) => {

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Posts', path: '/admin/posts' },
        { name: post.data.title, path: `/admin/posts/${post._id}` }
    ];

    const postForm = {
        title: post.data.title,
        body: post.data.body,
        status: post.data.status,
        image: post.data.image,
        categories: post.data.categories,
        views: post.data.views
    }

    return (
        <div className={`pb-50`}>
            <div className='container'>
                <AdminHead title={postForm.title} headStyle={'post-head-style'} />
                <BreadCrumbs links={links} />
                <PostForm categories={categories} formId='edit-post-form' postInput={postForm} forNewPost={false} />
            </div>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(ctx) {

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

    const { id } = ctx.query;
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const post = await res.json();

    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permenant: false
            }
        }
    }

    // Pass data to the page via props
    return {
        props: {
            post,
            categories: JSON.parse(JSON.stringify(categories))
        }
    }
}

export default PostPage