import React from 'react'

const lastName = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="last_name"
            placeholder=" Last name"
            value={value}
            onChange={onChange}
            className="form-input"
        />
    )
}
export default lastName
