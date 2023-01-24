import React from 'react'
import Link from 'next/link'

import Footer from '../../layout/Footer';
import Tweets from '../../components/Tweets';
import { Posts } from '../../components/Posts'
import SubHeader from '../../components/SubHeader'
import BreadCrumbBlock from '../../components/BreadCrumbBlock'

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