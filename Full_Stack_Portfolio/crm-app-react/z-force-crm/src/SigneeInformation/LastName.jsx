import React from 'react'

const LastName = () => {
    return (
        <input
            type="text"
            name="LastName"
            placeholder="LastName"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default LastName
