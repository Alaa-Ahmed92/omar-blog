import React from 'react'
import AdminHead from '../../../components/AdminHead'
import BreadCrumbs from '../../../components/BreadCrumbs'
import GalleryForm from '../../../components/Forms/GalleryForm';
import Category from '../../../models/Category';
import dbConnect from '../../../utils/dbConnect';

const AddGallery = ({ categories }) => {

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Galleries', path: '/admin/galleries' },
        { name: 'New Gallery', path: '/admin/galleries/new' }
    ];

    const galleryForm = {
        title: '',
        status: 'Draft',
        image: '',
        categories: [],
        views: 0
    }


    return (
        <div className={`pb-50`}>
            <div className='container'>
                <AdminHead className='blue-admin-head' title='Add Gallery' />
                <BreadCrumbs links={links} />
                <GalleryForm className='blue-category-form' categories={categories} formId="add-gallery-form" galleryInput={galleryForm} />
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


export default AddGallery