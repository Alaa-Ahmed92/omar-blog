import React from 'react'

import Category from '../../../models/Category'
import dbConnect from '../../../utils/dbConnect'
import AdminHead from '../../../components/AdminHead'
import CategoriesTable from '../../../components/Tables/CategoriesTable'
import BreadCrumbs from '../../../components/BreadCrumbs'

const Categories = ({ categories }) => {

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Categories', path: '/admin/categories' }
    ];

    return (
        <div className='pb-50'>
            <div className='container'>
                <AdminHead
                    link='/admin/categories/new'
                    title='Categories'
                    label='Category'
                />
                <BreadCrumbs links={links} />
                <div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <CategoriesTable colWidth={500} categories={categories} />
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

    /* find all the data in our database */
    const result = await Category.find({})
    const categories = result.map((item) => {
        const category = item.toObject()
        category._id = category._id.toString()
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

export default Categories