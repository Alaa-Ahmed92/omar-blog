import React from 'react'
import { Space, Table } from 'antd';
import Link from 'next/link';

const GalleriesTable = ({ galleries }) => {

    const columns = [
        {
            title: 'Gallery Name',
            dataIndex: 'title',
            key: 'title',
            render: (title) => <p style={{ fontFamily: 'Arvo, serif', width: `450px`, margin: 0, letterSpacing: '.3px', fontSize: '15px' }} title={title} className={`d-block text-truncate`}>{title}</p>,
            width: 450
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => <div className={`${status} status-box`} style={{ textTransform: 'capitalize' }}>{status}</div>,
            width: 100
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
            render: (views) => <div style={{ letterSpacing: '.7px', fontFamily: 'Bebas Neue' }}>{views}</div>
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: 250,
            render: (createdAt) => <div>{new Date(createdAt).toLocaleString()}</div>
        },
        {
            title: 'Categories',
            dataIndex: 'categories',
            key: 'categories',
            render: (categories) => <div>{categories.map((item, index) => <span key={index} title={item} className='category-item'>{item}</span>)}</div>
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, gallery) => (
                <Space size="middle">
                    <Link
                        href={`/admin/galleries/${gallery._id}`}
                        style={{ letterSpacing: '.7px', fontFamily: 'Bebas Neue', background: '#edeff5', color: '#474d66', height: '28px', display: 'inline-block', lineHeight: '28px', padding: '0 10px', fontWeight: 500 }}
                    >
                        Edit
                    </Link>
                </Space>
            ),
            width: 90
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                pagination={true}
                dataSource={galleries}
                rowKey={gallery => gallery._id}
                className='table-view blue-table'
            />
        </>
    )
}

export default GalleriesTable