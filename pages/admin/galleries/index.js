import React from 'react'

import Gallery from '../../../models/Gallery';
import dbConnect from '../../../utils/dbConnect';
import AdminHead from '../../../components/AdminHead';
import BreadCrumbs from '../../../components/BreadCrumbs';
import GalleriesTable from '../../../components/Tables/GalleriesTable';

const GalleriesPage = ({ galleries }) => {

    const links = [
        { name: 'Admin', path: '/admin' },
        { name: 'Galleries', path: '/admin/galleries' }
    ];

    return (
        <div className='pb-50'>
            <div className='container'>
                <AdminHead
                    className='blue-admin-head'
                    link='/admin/galleries/new'
                    title='Galleries'
                    label='Gallery'
                />
                <BreadCrumbs links={links} />
                <div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <GalleriesTable galleries={galleries} />
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
    const result = await Gallery.find({})
    const galleries = result.map((item) => {
        const gallery = item.toObject()
        gallery._id = gallery._id.toString()

        return gallery;
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
        props: { galleries: JSON.parse(JSON.stringify(galleries)) }
    }
}

export default GalleriesPage