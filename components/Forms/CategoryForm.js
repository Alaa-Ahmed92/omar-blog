import React, { useState } from 'react';
import { mutate } from 'swr';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/router';

import styles from './../../styles/components/Forms/Forms.module.css'

const CategoryForm = ({ className, formId, categoryInput, forNewCategory = true }) => {

    const router = useRouter();
    const contentType = 'application/json';
    const [errors, setErrors] = useState();
    const [message, setMessage] = useState('');

    const [form, setForm] = useState({
        name: categoryInput.name,
        posts: categoryInput.posts,
        galleries: categoryInput.galleries,
    });

    const updateCategoryName = async (form) => {
        const { id } = router.query;

        try {
            const res = await fetch(`/api/categories/${id}`, {
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

            mutate(`/api/categories/${id}`, data, false);
            router.push('/admin/categories');

        } catch (error) {
            setMessage('Failed to update category!')
        }

    }

    const AddNewCategory = async (form) => {

        try {
            const res = await fetch(`/api/categories`, {
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

            router.push('/admin/categories');

        } catch (error) {
            setMessage('Failed to add category!')
        }

    }

    const handleChange = (e) => {
        const value = e.target.value;

        setForm({
            ...form,
            'name': value,
        });

    }

    const formValidate = () => {
        let err = {};
        if (!form.name) err.name = 'Category name is required!';

        return err
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = formValidate();

        if (Object.keys(errs).length === 0) {
            forNewCategory ? AddNewCategory(form) : updateCategoryName(form)
        } else {
            setErrors({ errs })
        }
    }

    return (
        <div>
            <Form id={formId} onSubmit={handleSubmit} className={`${className} form-wrapper`}>
                <Form.Group className={styles.categoryFormGroup}>
                    <Form.Control
                        onChange={handleChange}
                        className='input-control'
                        type="text"
                        value={form.name}
                        placeholder="Category Name..."
                    />
                    <div className={styles.actions}>
                        <button className={`${forNewCategory ? 'green-btn' : 'blue-btn'}`} type='submit'>{`${forNewCategory ? 'Add' : 'Update'} Category`}</button>
                    </div>
                </Form.Group>
                {errors && <p className='color-red'>{errors?.errs?.name}</p>}
            </Form>
        </div>
    )
}

export default CategoryForm