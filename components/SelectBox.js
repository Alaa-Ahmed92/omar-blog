import React from 'react'
import { Select } from 'antd';

const SelectBox = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <Select
            defaultValue="draft"
            style={{
                width: 120,
            }}
            onChange={handleChange}
            options={[
                {
                    value: 'publish',
                    label: 'Publish',
                },
                {
                    value: 'draft',
                    label: 'Draft',
                },
            ]}
        />
    )
}

export default SelectBox