import React from 'react'
import { useRouter } from 'next/router'

import Category from '../../../../models/Category';
import dbConnect from '../../../../utils/dbConnect';
import AdminHead from '../../../../components/AdminHead';
import BreadCrumbs from '../../../../components/BreadCrumbs';
import GalleryForm from '../../../../components/Forms/GalleryForm';

const GalleryPage = ({ categories, gallery }) => {
    const router = useRouter();

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Galleries', path: '/admin/galleries' },
        { name: gallery.data.title, path: `/admin/galleries/${gallery._id}` }
    ];

    const galleryForm = {
        title: gallery.data.title,
        status: gallery.data.status,
        image: gallery.data.image,
        categories: gallery.data.categories,
        views: gallery.data.views
    }
    const handleDelete = async () => {
        const { id } = router.query

        try {
            await fetch(`/api/galleries/${id}`, {
                method: 'Delete',
            })
            router.push('/admin/galleries')
        } catch (error) {
            setMessage('Failed to delete the gallery.')
        }
    }

    return (
        <div className={`pb-50`}>
            <div className='container'>
                <AdminHead className='blue-admin-head' handleDelete={handleDelete} title={galleryForm.title} headStyle={'post-head-style'} />
                <BreadCrumbs links={links} />
                <GalleryForm className='blue-category-form' categories={categories} formId='edit-gallery-form' galleryInput={galleryForm} forNewGallery={false} />
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
    const res = await fetch(`http://localhost:3000/api/galleries/${id}`);
    const gallery = await res.json();

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
            gallery,
            categories: JSON.parse(JSON.stringify(categories))
        }
    }
}

export default GalleryPage