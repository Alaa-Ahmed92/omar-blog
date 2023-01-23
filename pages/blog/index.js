import React from 'react'
import Link from 'next/link'

import BreadCrumbBlock from '../../components/BreadCrumbBlock'
import SubHeader from '../../components/SubHeader'
import Footer from '../../layout/Footer';
import { Posts } from '../../components/Posts'
import Tweets from '../../components/Tweets';

const Blog = () => {
    return (
        <div>
            <SubHeader>
                <div className='container'>
                    <h1>Articles & Resources</h1>
                    <BreadCrumbBlock>
                        <li className='breadcrumb-item'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='breadcrumb-item active'>Blog</li>
                    </BreadCrumbBlock>
                </div>
            </SubHeader>
            <div className='container pdd70'>
                <Posts />
            </div>
            <Tweets />
            <Footer />
        </div>
    )
}

export default Blog