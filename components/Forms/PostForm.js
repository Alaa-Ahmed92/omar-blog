import React, { useState } from 'react'
import { mutate } from 'swr';
import { Form } from 'react-bootstrap';
import PublishBox from '../PublishBox';
import { useRouter } from 'next/router';
import 'react-quill/dist/quill.snow.css';
import QuillNoSSRWrapper from '../Editor';
import CategoriesBox from '../CategoriesBox';

const PostForm = ({ className, categories, formId, postInput, forNewPost = true }) => {
    const router = useRouter();
    const contentType = 'application/json';
    const [errors, setErrors] = useState();
    const [message, setMessage] = useState('');

    const [form, setForm] = useState({
        title: postInput.title,
        body: postInput.body,
        status: postInput.status,
        image: postInput.image,
        categories: postInput.categories,
        views: postInput.views
    });

    const handleImages = async (e) => {
        let file = e.target.files[0];
        const data = new FormData();

        data.append('file', file);
        data.append('upload_preset', 'uploads');

        try {
            await fetch(
                "https://api.cloudinary.com/v1_1/df0sbl5pw/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            ).then(response => response.json())
                .then(data => {
                    setForm({
                        ...form,
                        image: data.url
                    })
                })
        } catch (error) {
            setMessage('Failed to upload image to the post!')
        }

    }

    const updatePost = async (form) => {
        const { id } = router.query;
        try {
            const res = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType
                },
                body: JSON.stringify(form)
            });

            if (!res.ok) {
                throw new Error(res.status);
            }

            const { data } = await res.json();

            mutate(`/api/posts/${id}`, data, false);
            router.push('/admin/posts');

        } catch (error) {
            setMessage('Failed to add post!')
        }
    }

    const addNewPost = async (form) => {
        try {
            const res = await fetch(`/api/posts`, {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType
                },
                body: JSON.stringify(form)
            });

            if (!res.ok) {
                throw new Error(res.status);
            }

            router.push('/admin/posts');

        } catch (error) {
            setMessage('Failed to add post!')
        }
    }

    // const handleDelete = async () => {
    //     const postId = router.query.id;
    //     try {
    //         await fetch(`/api/posts/${postId}`, {
    //             method: 'DELETE'
    //         });

    //         router.push('/admin/posts');
    //     } catch (error) {
    //         setMessage('Failed to delete post!')
    //     }
    // }

    const formValidate = () => {
        let err = {};
        if (!form.title) err.title = 'Title is required!';
        if (!form.body) err.body = 'Body is required!';
        if (!form.image) err.image = 'Image is required!';
        if (!form.categories.length > 0) err.categories = 'Categories is required!';

        return err;
    };

    const handleCategoriesChanges = (checkedValues) => {
        setForm({
            ...form,
            categories: checkedValues
        })
    };

    const handleBodyChanges = (e) => {
        setForm({
            ...form,
            body: e,
        })
    };

    const handleFormChanges = (e) => {
        const target = e.target;
        const value = target.value;
        const name = e.target.name;
        setForm({
            ...form,
            [name]: value,
        })
    };

    const handleSelectChanges = (e) => {
        setForm({
            ...form,
            status: e
        })
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = formValidate();
        if (Object.keys(errs).length === 0) {
            forNewPost ? addNewPost(form) : updatePost(form)
        } else {
            setErrors({ errs })
        }
    }


    return (
        <div>
            <Form id={formId} onSubmit={handleSubmit} className={className}>
                <div className='row'>
                    <div className='col-md-8'>
                        <Form.Group className="mb-3">
                            <Form.Control onChange={handleFormChanges} name='title' value={form.title} className='input-control bg-darker' type="text" placeholder="Enter post title..." />
                            {errors && <p className='color-red'>{errors.errs.title}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <QuillNoSSRWrapper placeholder='Enter your content...' value={form.body} onChange={handleBodyChanges} />
                            {errors && <p className='color-red'>{errors.errs.body}</p>}
                        </Form.Group>
                    </div>
                    <div className='col-md-4'>
                        <PublishBox
                            form={form}
                            errors={errors}
                            handleImages={handleImages}
                            forNewPost={forNewPost}
                            handleSelectChanges={handleSelectChanges}
                            status={form.status}
                            visibilty={postInput.status}
                        />
                        <CategoriesBox
                            form={form}
                            errors={errors}
                            categories={categories}
                            handleCategoriesChanges={handleCategoriesChanges}
                        />
                    </div>
                </div>
            </Form >
        </div >
    )
}

export default PostForm