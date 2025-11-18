import React from 'react'
import NavBar from "../Components/Header.jsx"
// import SigneeInformation from "./SigneeInformation.jsx" // only keep if you plan to use it

const Homepage = () => {
    return (
        <>
            <NavBar />
            <div className="mainpage-handshake">
                <img src="/Handshake.jpg" alt="handshake" />
                <h1> Empowering you to win</h1>
            </div>
        </>
    )
}

export default Homepage
