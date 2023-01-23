import React from 'react'

import AdminHead from '../../../components/AdminHead'
import BreadCrumbs from '../../../components/BreadCrumbs';

import CategoryForm from '../../../components/Forms/CategoryForm'

const NewCategoryPage = () => {

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Categories', path: '/admin/categories' },
        { name: 'New Category', path: '/admin/categories/new' }
    ];

    const categoryForm = {
        name: '',
        posts: [],
        galleries: []
    }

    return (
        <div className={`pb-50`}>
            <div className='container'>
                <AdminHead title='Add Category' />
                <BreadCrumbs links={links} />
                <CategoryForm formId="add-category-form" categoryInput={categoryForm} />
            </div>
        </div>

    )
}

export const getServerSideProps = async (ctx) => {

    const myCookie = ctx.req?.cookies || "";

    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permenant: false
            }
        }
    }

    return {
        props: {  }
    }
}

export default NewCategoryPage