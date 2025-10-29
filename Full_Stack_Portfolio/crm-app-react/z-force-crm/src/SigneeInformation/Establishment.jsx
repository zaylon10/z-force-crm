import React from 'react'

const establishment = ({value, onChange}) => {
    return (
        <input
            type="text"
            name="establishment"
            placeholder="Establishment"
            value={value}
            onChange={onChange}
            className="form-input"
        />
    )
}
export default establishment
