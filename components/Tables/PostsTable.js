import React from 'react'
import { Space, Table } from 'antd';
import TableHeader from './TableHeader';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri'
import Link from 'next/link';

const PostsTable = ({ posts }) => {

    const columns = [
        {
            title: 'Post Name',
            dataIndex: 'title',
            key: 'title',
            render: (title) => <p style={{ fontFamily: 'Arvo, serif', width: `450px`, margin: 0, letterSpacing: '.3px', fontSize: '15px' }} title={title} className={`d-block text-truncate`}>{title}</p>,
            width: 450
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => <div style={{textTransform: 'capitalize'}}>{status}</div>
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
            render: (_, post) => (
                <Space size="middle">
                    <Link
                        href={`/admin/posts/${post._id}`}
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
        <div style={{ marginBottom: '5rem' }}>
            <Table
                columns={columns}
                pagination={true}
                dataSource={posts}
                rowKey={post => post._id}
                className='table-view'
            />
        </div>
    )
}

export default PostsTable