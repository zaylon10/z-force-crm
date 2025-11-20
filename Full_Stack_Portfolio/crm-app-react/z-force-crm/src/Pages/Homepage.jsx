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
                <div className="mainpages-attributes">
                    <img src="/Person.svg" alt="brainimage" />
                    <img src="/Ticket.svg" alt="ticketimage" />
                    <img src="/Business.svg" alt="businessimage" />
                    <img src="/Lock.svg" alt="lockimage" />
                </div>
                <div className="mainpages-attributes-desc">
                    <span>AI-powered insights that elevate every decision.</span>
                    <span>An integrated ticketing system that keeps customers and teams perfectly aligned, ensuring complete visibility</span>
                    <span>Streamline daily operations with a unified system built for clarity and control.</span>
                    <span>Protect your data with enterprise-level security built on modern compliance standards.</span>
                </div>
            </div>
        </>
    )
}

export default Homepage
