import React from 'react'

const Phone = () => {
    return (
        <input
            type="text"
            name="Phone"
            placeholder="Phone"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default Phone
