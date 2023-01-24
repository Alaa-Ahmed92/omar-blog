import React from 'react'
import Link from 'next/link';
import { Space, Table } from 'antd';


const CategoriesTable = ({ categories, colWidth }) => {

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p style={{ fontFamily: 'Arvo, serif', width: `${colWidth}px`, margin: 0, letterSpacing: '.3px', fontSize: '15px' }} title={text} className={`d-block text-truncate`}>{text}</p>,
            width: colWidth
        },
        {
            title: 'Posts',
            dataIndex: 'posts',
            key: 'posts',
            render: (posts) => <div style={{ letterSpacing: '.7px', fontFamily: 'Bebas Neue' }}>{posts.length}</div>,
        },
        {
            title: 'Galleries',
            dataIndex: 'galleries',
            key: 'galleries',
            render: (galleries) => <div style={{ letterSpacing: '.7px', fontFamily: 'Bebas Neue' }}>{galleries.length}</div>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, category) => (
                <Space size="middle">
                    <Link
                        href={`/admin/categories/${category._id}`}
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
                dataSource={categories}
                rowKey={category => category._id}
                className='green-table'
            />
        </>
    )
}

export default CategoriesTable