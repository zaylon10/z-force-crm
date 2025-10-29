import React from 'react'

const FirstName = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={value}
            onChange={onChange}
            className="form-input"
        />
    )
}
export default FirstName
