import React from 'react'
import { Form } from 'react-bootstrap'
import { BiCategory } from 'react-icons/bi'

import styles from './../styles/components/CategoriesBox.module.css'

const CategoriesBox = ({ categories }) => {
    return (
        <div className={`${styles.categoriesBox} blogBox`}>
            <h5><BiCategory /> Categories</h5>
            <div className={styles.boxContent}>
                <div className='row'>
                    {categories.map(item => (
                        <div key={item._id} className='col-md-6'>
                            <Form.Group className={`${styles.checkbox}`} controlId={`checkbox_` + item._id}>
                                <Form.Check className={styles.formCheck} type="checkbox" title={item.name} label={item.name} />
                            </Form.Group>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesBox