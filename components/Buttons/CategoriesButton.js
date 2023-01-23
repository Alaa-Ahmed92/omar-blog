import React from 'react'
import { Button, Dropdown } from 'antd';
import Link from 'next/link';

const CategoriesButton = () => {

    const items = [
        {
            key: '1',
            label: (
                <Link href={`/admin/categories/addCategory`}>Add Category</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={`/admin/categories`}>All Categories</Link>
            ),
        },
    ];

    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
            placement="top"
        >
            <Button>Categories</Button>
        </Dropdown>
    )
}

export default CategoriesButton