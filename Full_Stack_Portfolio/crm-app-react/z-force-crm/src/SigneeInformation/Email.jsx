import React from 'react'

const email = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="email"
            placeholder=" Email Address"
            value={value}
            onChange={onChange}
            className="form-input"
        />
    )
}
export default email
