import React from 'react'

const Password = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="password"
            placeholder="Password"
            value={value}
            onChange={onChange}
            className="form-input"
        />
    )
}
export default Password
