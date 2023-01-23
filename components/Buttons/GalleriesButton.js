import React from 'react'
import { Button, Dropdown } from 'antd';
import Link from 'next/link';

const GalleriesButton = () => {

    const items = [
        {
            key: '1',
            label: (
                <Link href={`/admin/galleries/addGallery`}>Add Gallery</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={`/admin/galleries`}>All Galleries</Link>
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
            <Button>Galleries</Button>
        </Dropdown>
    )
}

export default GalleriesButton