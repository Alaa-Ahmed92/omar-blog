import React from 'react'
import { Space, Table } from 'antd';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri'

import TableHeader from './TableHeader';

const GalleriesTable = ({ galleries }) => {

    const columns = [
        {
            title: 'Gallery',
            dataIndex: 'gallery',
            key: 'gallery',
            render: (text) => <a style={{ width: '250px' }} className={`d-block text-truncate`}>{text}</a>,
            width: 250
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a><FiEdit /></a>
                    <a><RiDeleteBinLine /></a>
                </Space>
            ),
            width: 90
        },
    ];
    // const data = [
    //     {
    //         key: '1',
    //         gallery: 'John Brown John Brown John Brown John Brown John Brown John Brown John Brown',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         gallery: 'Jim Green',
    //         views: 42,
    //         date: '27 Nov 2022',
    //         category: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '4',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '5',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '6',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '7',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '8',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '9',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '10',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    //     {
    //         key: '11',
    //         gallery: 'Joe Black',
    //         views: 32,
    //         date: '27 Nov 2022',
    //         category: ['cool', 'teacher'],
    //     },
    // ];

    return (
        <>
            <Table
                columns={columns}
                pagination={true}
                dataSource={galleries}
            />
        </>
    )
}

export default GalleriesTable