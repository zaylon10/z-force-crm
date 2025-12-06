import React from 'react'
import NavBar from "../Components/Header.jsx"
// import SigneeInformation from "./SigneeInformation.jsx" // only keep if you plan to use it

const Homepage = () => {
    return (
        <>
            <div className="mainpage-handshake">
                <NavBar className="navigation-bar"/>
                <img className="handshake" src="/Handshake.jpg" alt="handshake" />
                <h1 className="handshake-title"> Empowering you to win</h1>
                    <div className="features-section">
                        <div className="feature-card">
                            <img src="/artificial-intelligence.png" alt="brain.ai" />
                            <span>AI-powered insights that elevate every decision.</span>
                        </div>

                        <div className="feature-card">
                            <img src="/portfolio.png" alt="business" />
                            <span>An integrated ticketing system that keeps customers and teams perfectly aligned, ensuring complete visibility.</span>
                        </div>

                        <div className="feature-card">
                            <img src="/document-processing.png" alt="document" />
                            <span>Streamline daily operations with a unified system built for clarity and control.</span>
                        </div>

                        <div className="feature-card">
                            <img src="/cyber-security.png" alt="security" />
                            <span>Protect your data with enterprise-level security built on modern compliance standards.</span>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default Homepage
