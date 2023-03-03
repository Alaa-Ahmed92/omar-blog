import { useRouter } from 'next/router';
import { mutate } from 'swr';
import { Form } from 'react-bootstrap'
import PublishBox from '../PublishBox';
import React, { useState } from 'react'
import CategoriesBox from '../CategoriesBox';

const GalleryForm = ({ className, formId, categories, galleryInput, forNewGallery = true }) => {
    const router = useRouter();
    const contentType = 'application/json';
    const [errors, setErrors] = useState();
    const [message, setMessage] = useState('');

    const [form, setForm] = useState({
        title: galleryInput.title,
        status: galleryInput.status,
        image: galleryInput.image,
        categories: galleryInput.categories,
        views: galleryInput.views
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

    const updateGallery = async (form) => {
        const { id } = router.query;
        try {
            const res = await fetch(`/api/galleries/${id}`, {
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

            mutate(`/api/galleries/${id}`, data, false);
            router.push('/admin/galleries');

        } catch (error) {
            console.log(error);
            setMessage('Failed to update gallery!')
        }
    }

    const addNewGallery = async (form) => {
        try {
            const res = await fetch(`/api/galleries`, {
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

            router.push('/admin/galleries');

        } catch (error) {
            setMessage('Failed to add gallery!')
        }
    }

    const handleDelete = async () => {
        const { id } = router.query;
        try {
            await fetch(`/api/galleries/${id}`, {
                method: 'DELETE'
            });

            router.push('/admin/galleries');
        } catch (error) {
            setMessage('Failed to delete gallery!')
        }
    }

    const formValidate = () => {
        let err = {};
        if (!form.title) err.title = 'Title is required!';
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
            forNewGallery ? addNewGallery(form) : updateGallery(form)
        } else {
            setErrors({ errs })
        }
    }

    return (
        <div>
            <Form id={formId} onSubmit={handleSubmit} className={className}>
                <div className='row'>
                    <div className='col-md-7 col-lg-7 col-xl-8'>
                        <Form.Group className="mb-3">
                            <Form.Control name='title' onChange={handleFormChanges} value={form.title} className='input-control bg-darker' type="text" placeholder="Enter gallery title..." />
                            {errors && <p className='color-red'>{errors.errs.title}</p>}
                        </Form.Group>
                        {form.image && <div><img className='img-fluid' src={form.image} alt={form.title} /></div>}
                    </div>
                    <div className='col-md-5 col-lg-5 col-xl-4'>
                        <PublishBox
                            form={form}
                            errors={errors}
                            handleImages={handleImages}
                            handleDelete={handleDelete}
                            handleSelectChanges={handleSelectChanges}
                            status={form.status}
                            visibilty={galleryInput.status}
                        />
                        <CategoriesBox
                            form={form}
                            errors={errors}
                            categories={categories}
                            handleCategoriesChanges={handleCategoriesChanges}
                        />
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default GalleryForm