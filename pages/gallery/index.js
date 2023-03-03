import React from 'react'
import Link from 'next/link'

import Footer from '../../layout/Footer';
import Gallery from '../../models/Gallery';
import Tweets from '../../components/Tweets';
import Category from '../../models/Category';
import dbConnect from '../../utils/dbConnect';
import SubHeader from '../../components/SubHeader'
import { GalleryBox } from '../../components/GalleryBox'
import BreadCrumbBlock from '../../components/BreadCrumbBlock'

const GalleryData = ({ categories, galleries }) => {
    return (
        <div>
            <SubHeader>
                <div className='container'>
                    <h1>Infographics</h1>
                    <BreadCrumbBlock>
                        <li className='breadcrumb-item'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='breadcrumb-item active'>Gallery</li>
                    </BreadCrumbBlock>
                </div>
            </SubHeader>
            <div className='galleryWrapper'>
                <div className='container pdd70'>
                    <GalleryBox galleries={galleries} categories={categories} />
                </div>
            </div>
            <Tweets />
            <Footer />
        </div>
    )
}

export const getServerSideProps = async () => {
    await dbConnect();

    const galleries = await (await Gallery.find({})).filter(item => item.status !== 'draft');

    const result = await Category.find({}).populate('galleries');
    const categories = result.map(item => {
        const category = item.toObject();
        category._id = category._id.toString()

        return category
    });

    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories)),
            galleries: JSON.parse(JSON.stringify(galleries))
        }
    }

}

export default GalleryData