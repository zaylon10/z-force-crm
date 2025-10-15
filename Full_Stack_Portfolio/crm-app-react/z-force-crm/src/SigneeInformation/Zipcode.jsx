import React from 'react'

const Zipcode = () => {
    return (
        <input
            type="text"
            name="Zipcode"
            placeholder="Zipcode"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default Zipcode
