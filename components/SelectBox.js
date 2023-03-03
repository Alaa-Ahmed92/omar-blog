import React from 'react'
import { Select } from 'antd';

const SelectBox = ({ status, handleSelectChanges }) => {

    return (
        <Select
            defaultValue="draft"
            style={{
                width: 120,
            }}
            onChange={handleSelectChanges}
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
            value={status}
        />
    )
}

export default SelectBox