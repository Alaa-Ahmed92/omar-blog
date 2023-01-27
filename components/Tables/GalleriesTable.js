import React, { useRef, useState } from 'react'
import { Button, Input, Space, Table } from 'antd';
import { BiSearchAlt2 } from 'react-icons/bi'
import Highlighter from 'react-highlight-words';
import Link from 'next/link';

const GalleriesTable = ({ galleries }) => {

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
                className='blue-filter-form'
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    {/* <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<BiSearchAlt2 />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => {
                            clearFilters && handleReset(clearFilters);
                            setSearchedColumn(dataIndex);
                        }}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button> */}
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <BiSearchAlt2
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Gallery Name',
            dataIndex: 'title',
            key: 'title',
            render: (title) => <p style={{ fontFamily: 'Arvo, serif', width: `450px`, margin: 0, letterSpacing: '.3px', fontSize: '15px' }} title={title} className={`d-block text-truncate`}>{title}</p>,
            width: 450,
            sorter: (a, b) => a.title.localeCompare(b.title),
            ...getColumnSearchProps('title')
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => <div className={`${status} status-box`} style={{ textTransform: 'capitalize' }}>{status}</div>,
            width: 100,
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
            render: (views) => <div style={{ letterSpacing: '.7px', fontFamily: 'Bebas Neue' }}>{views}</div>,
            sorter: (a, b) => a.views - b.views,
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: 250,
            render: (createdAt) => <div>{new Date(createdAt).toLocaleString()}</div>,
            sorter: (a, b) => a.createdAt.localeCompare(b.createdAt)
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