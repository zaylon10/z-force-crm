import React from 'react'

const CustomerType = () => {
    return (
        <input
            type="text"
            name="CustomerType"
            placeholder="CustomerType"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default CustomerType
