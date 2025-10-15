import React from 'react'

const Email = () => {
    return (
        <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default Email
