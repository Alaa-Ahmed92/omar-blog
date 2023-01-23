import React from 'react'
import { Button, Upload } from 'antd';
import { AiOutlineUpload } from 'react-icons/ai'

const fileList = [
    {
        uid: '0',
        name: 'xxx.png',
        status: 'uploading',
        percent: 33,
    },
    {
        uid: '-1',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'zzz.png',
        status: 'error',
    },
];

const UploadImage = () => {
    return (
        <>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
            >
                <Button icon={<AiOutlineUpload />}>Upload</Button>
            </Upload>
        </>
    )
}

export default UploadImage