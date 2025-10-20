import React from 'react'
import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import Email from "./Email.jsx";
import Establishment from "./Establishment.jsx";
import PassWord from "./PassWord.jsx";

const SigneeInformation = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="content">
                    <div className="content-visual">
                        <div className="visual">
                            <img src="./videoframe_784.jpeg" alt="business"/>
                        </div>
                    </div>
                    <div className="customer-info">
                        <div className="customer-info-header">
                            <h1>Create New Account</h1>
                            <p>Already have an account? log in</p>
                        </div>
                        <div className="customer-signup">
                            <div className="name">
                                <FirstName/>
                                <LastName/>
                            </div>
                            <Email/>
                            <Establishment/>
                            <PassWord/>
                        </div>
                        <div className="customer-signup-submission">
                            <button>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SigneeInformation
