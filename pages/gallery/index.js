import React from 'react'
import Link from 'next/link'

import Footer from '../../layout/Footer';
import Tweets from '../../components/Tweets';
import Category from '../../models/Category';
import dbConnect from '../../utils/dbConnect';
import SubHeader from '../../components/SubHeader'
import { GalleryBox } from '../../components/GalleryBox'
import BreadCrumbBlock from '../../components/BreadCrumbBlock'

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