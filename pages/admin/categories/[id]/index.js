import React from 'react'

import AdminHead from '../../../../components/AdminHead';
import PostsTable from '../../../../components/Tables/PostsTable';
import CategoryForm from '../../../../components/Forms/CategoryForm';
import GalleriesTable from '../../../../components/Tables/GalleriesTable';
import styles from './../../../../styles/pages/categories/EditPage.module.css';
import BreadCrumbs from '../../../../components/BreadCrumbs';

const CategoryPage = ({ category }) => {

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

    return (
        <div className={`${styles.wrapper} pb-50`}>
            <div className='container'>
                <AdminHead title={categoryForm.name} />
                <BreadCrumbs links={links} />
                <CategoryForm formId='edit-category-form' categoryInput={categoryForm} forNewCategory={false} />
                {categoryForm.posts.length > 0 && <PostsTable posts={categoryForm.posts} />}
                {categoryForm.galleries.length > 0 && <GalleriesTable galleries={categoryForm.galleries} />}
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

    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permenant: false
            }
        }
    }

    // Pass data to the page via props
    return { props: { category } }
}

export default CategoryPage