import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { Checkbox, Col, Row } from 'antd';

import styles from './../styles/components/CategoriesBox.module.css'

const CategoriesBox = ({ handleCategoriesChanges, errors, form, categories }) => {
    return (
        <div className={`${styles.categoriesBox} blogBox`}>
            <h5><BiCategory /> Categories</h5>
            {errors && <p className='color-red'>{errors.errs.categories}</p>}
            <div className={styles.boxContent}>
                <Checkbox.Group
                    style={{
                        width: '100%',
                    }}
                    onChange={handleCategoriesChanges}
                    value={form.categories}
                >
                    <Row>
                        {categories?.map((item, index) => (
                            <Col key={index} span={12}>
                                <Checkbox className={styles.checkbox} value={item.value}>{item.label}</Checkbox>
                            </Col>
                        ))}
                    </Row>
                </Checkbox.Group>
            </div>
        </div>
    )
}

export default CategoriesBox