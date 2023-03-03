import React from 'react'
import { useRouter } from 'next/router';

import AdminHead from '../../../../components/AdminHead';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import PostsTable from '../../../../components/Tables/PostsTable';
import CategoryForm from '../../../../components/Forms/CategoryForm';
import GalleriesTable from '../../../../components/Tables/GalleriesTable';
import styles from './../../../../styles/pages/categories/EditPage.module.css';
import Category from '../../../../models/Category';

const CategoryPage = ({ category, catPosts, catGalleries }) => {

    const router = useRouter();

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Categories', path: '/admin/categories' },
        { name: category.data.name, path: `/admin/categories/${category._id}` }
    ];

    const categoryForm = {
        name: category.data.name,
        posts: category.data.posts,
        galleries: category.data.galleries
    }

    const handleDelete = async () => {
        const { id } = router.query

        try {
            await fetch(`/api/categories/${id}`, {
                method: 'Delete',
            })
            router.push('/admin/categories')
        } catch (error) {
            setMessage('Failed to delete the category.')
        }
    }

    return (
        <div className={`${styles.wrapper} pb-50`}>
            <div className='container'>
                <AdminHead className='green-admin-head' handleDelete={handleDelete} title={categoryForm.name} />
                <BreadCrumbs links={links} />
                <CategoryForm className='green-category-form' formId='edit-category-form' categoryInput={categoryForm} forNewCategory={false} />
                {catPosts.posts.length > 0 && <PostsTable posts={catPosts.posts} />}
                {catGalleries.galleries.length > 0 && <GalleriesTable galleries={catGalleries.galleries} />}
            </div>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(ctx) {

    const myCookie = ctx.req?.cookies || "";
    const { id } = ctx.query;
    const res = await fetch(`http://localhost:3000/api/categories/${id}`);
    const category = await res.json();

    const catPosts = await Category.findById(id).populate('posts');

    const catGalleries = await Category.findById(id).populate('galleries');

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
            category,
            catPosts: JSON.parse(JSON.stringify(catPosts)),
            catGalleries: JSON.parse(JSON.stringify(catGalleries))
        }
    }
}

export default CategoryPage