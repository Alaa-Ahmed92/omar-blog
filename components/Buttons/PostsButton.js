import React from 'react'
import { Button, Dropdown } from 'antd';
import Link from 'next/link';

const PostsButton = () => {

    const items = [
        {
            key: '1',
            label: (
                <Link href={`/admin/posts/addPost`}>Add Post</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={`/admin/posts`}>All Posts</Link>
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
            <Button>Posts</Button>
        </Dropdown>
    )
}

export default PostsButton