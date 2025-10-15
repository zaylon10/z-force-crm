import React from 'react'

export const Address = () => {
    return (
        <input
            type="text"
            name="Address"
            placeholder="Address"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
