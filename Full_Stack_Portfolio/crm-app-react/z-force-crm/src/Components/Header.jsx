import React from 'react'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-left">
                <img className="logo" src="/Zforcelogo.jpg" alt="Logo" />
                <h1>Force</h1>
            </div>
            <div className="nav-right">
                <img className="nav-icon" src="/Person.svg" alt="Person" />
                <h2 className="nav-icon">Log in</h2>
                <img className="nav-menu-icon" src="/Menu.svg" alt="Menu" />
            </div>
        </div>
    )
}

export default NavBar