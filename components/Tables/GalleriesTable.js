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
            render: (status) => <div style={{ textTransform: 'capitalize' }}>{status}</div>
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
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
            render: (categories) => <div>{categories.map((item, index) => <span key={index} className='category-item'>{item}</span>)}</div>
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, gallery) => (
                <Space size="middle">
                    <Link
                        href={`/admin/galleries/${gallery._id}`}
                        style={{ background: '#edeff5', color: '#474d66', height: '28px', display: 'inline-block', lineHeight: '28px', padding: '0 10px', fontWeight: 500 }}
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
                className='table-view'
            />
        </>
    )
}

export default GalleriesTable