import React from 'react'

const Establishment = () => {
    return (
        <input
            type="text"
            name="Establishment"
            placeholder="Establishment"
            onChange={(e) => {
                e.target.value = e.target.value
            }}/>
    )
}
export default Establishment;