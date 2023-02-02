import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { Button, Input, Space, Table } from 'antd';
import { BiSearchAlt2 } from 'react-icons/bi'
import Highlighter from 'react-highlight-words';

const CategoriesTable = ({ categories, colWidth }) => {

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
                className='green-filter-form'
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
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p style={{ fontFamily: 'Arvo, serif', width: `${colWidth}px`, margin: 0, fontSize: '15px' }} title={text} className={`d-block text-truncate`}>{text}</p>,
            width: colWidth,
            sorter: (a, b) => a.name.localeCompare(b.name),
            ...getColumnSearchProps('name')
        },
        {
            title: 'Posts',
            dataIndex: 'posts',
            key: 'posts',
            responsive: ['md'],
            render: (posts) => <div style={{ letterSpacing: '.7px', fontFamily: 'Bebas Neue' }}>{posts.length}</div>,
        },
        {
            title: 'Galleries',
            dataIndex: 'galleries',
            key: 'galleries',
            responsive: ['md'],
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
                className='table-view green-table'
            />
        </>
    )
}

export default CategoriesTable