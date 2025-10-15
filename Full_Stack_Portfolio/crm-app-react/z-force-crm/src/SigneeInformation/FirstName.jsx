import React from 'react'

const FirstName = () => {
    return (
        <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default FirstName
