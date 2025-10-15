import React from 'react'

const City = () => {
    return (
        <input
            type="text"
            name="City"
            placeholder="City"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default City
