import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiCategory, BiPlusCircle } from 'react-icons/bi'
import { MdPostAdd, MdOutlineManageAccounts } from 'react-icons/md'
import { RiImageAddLine } from 'react-icons/ri'
import { ImImages } from 'react-icons/im'
import { BsTextLeft } from 'react-icons/bs'


import Category from '../../models/Category';
import dbConnect from "../../utils/dbConnect";
import AdminHead from '../../components/AdminHead'
import styles from './../../styles/pages/Admin.module.css'
import PostsTable from '../../components/Tables/PostsTable'
import GalleriesTable from '../../components/Tables/GalleriesTable'
import CategoriesTable from '../../components/Tables/CategoriesTable'

const AdminPanel = ({ categories }) => {
    return (
        <div className={styles.adminPanel}>
            <div className='container'>
                <AdminHead title={'Admin Panel'} />
                <div className={styles.tablesWrapper}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={styles.statisticBox}>
                                <div className={styles.statisticBoxHeader}>
                                    <h5><BiCategory /> Categories</h5>
                                    <div className={styles.headActions}>
                                        <Link href={'/admin/categories'}><MdOutlineManageAccounts /></Link>
                                        <Link href={'/admin/categories/new'}><BiPlusCircle /></Link>
                                    </div>
                                </div>
                                <div className={styles.statisticBoxContent}>
                                    <h3>{categories.length}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={styles.statisticBox}>
                                <div className={styles.statisticBoxHeader}>
                                    <h5><BsTextLeft /> Posts</h5>
                                    <div className={styles.headActions}>
                                        <Link href={'/admin/posts'}><MdOutlineManageAccounts /></Link>
                                        <Link href={'/admin/posts/new'}><MdPostAdd /></Link>
                                    </div>
                                </div>
                                <div className={styles.statisticBoxContent}>
                                    <h3>25</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className={styles.statisticBox}>
                                <div className={styles.statisticBoxHeader}>
                                    <h5><ImImages /> Galleries</h5>
                                    <div className={styles.headActions}>
                                        <Link href={'/admin/galleries'}><MdOutlineManageAccounts /></Link>
                                        <Link href={'/admin/galleries/new'}><RiImageAddLine /></Link>
                                    </div>
                                </div>
                                <div className={styles.statisticBoxContent}>
                                    <h3>25</h3>
                                </div>
                            </div>
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

export default AdminPanel;