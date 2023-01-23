import React from 'react'
import Link from 'next/link'

import BreadCrumbBlock from '../../components/BreadCrumbBlock'
import SubHeader from '../../components/SubHeader'
import Tweets from '../../components/Tweets';
import Footer from '../../layout/Footer';
import { GalleryBox } from '../../components/GalleryBox'
import dbConnect from '../../utils/dbConnect';
import Category from '../../models/Category';

const Gallery = ({ categories }) => {
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
            <div className='container pdd70'>
                <GalleryBox categories={categories} />
            </div>
            <Tweets />
            <Footer />
        </div>
    )
}

export const getServerSideProps = async () => {
    await dbConnect();

    const result = await Category.find({});
    const categories = result.map(item => {
        const category = item.toObject();
        category._id = category._id.toString()

        return category
    });

    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories))
        }
    }

}

export default Gallery