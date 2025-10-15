import React from 'react'

const State = () => {
    return (
        <input
            type="text"
            name="State"
            placeholder="State"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default State
