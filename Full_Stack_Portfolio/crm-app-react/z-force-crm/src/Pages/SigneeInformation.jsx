import React, { useState } from 'react';
import FirstName from "../SigneeInformation/FirstName.jsx";
import LastName from "../SigneeInformation/LastName.jsx";
import Email from "../SigneeInformation/Email.jsx";
import Establishment from "../SigneeInformation/Establishment.jsx";
import Password from "../SigneeInformation/Password.jsx";

const SigneeInformation = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        establishment: "",
        password: "",
    });

    // Handles input changes
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handles form submission
    const submitForm = async (e) => {
        e.preventDefault(); // Prevent page reload
        const url = "http://localhost:49989/users";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.log("Server error:", response.status, response.statusText, errorText);
            } else {
                const result = await response.json();
                console.log("Success:", result);
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    establishment: "",
                    password: "",
                });
            }
        } catch (error) {
            console.log("Network or other error:", error);
        }
    };

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="content-visual">
                    <div className="visual">
                        <img src="./videoframe_784.jpeg" alt="business" />
                    </div>
                </div>
                <div className="customer-info">
                    <div className="customer-info-header">
                        <h1>Create New Account</h1>
                        <p>Already have an account? Log in</p>
                    </div>
                    <div className="customer-signup">
                        <form onSubmit={submitForm} className="form-info">
                                <FirstName value={formData.first_name} onChange={onChange} />
                                <LastName value={formData.last_name} onChange={onChange} />
                                <Email value={formData.email} onChange={onChange} />
                                <Establishment value={formData.establishment} onChange={onChange} />
                                <Password value={formData.password} onChange={onChange} />
                            <div className="customer-signup-submission">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigneeInformation;
