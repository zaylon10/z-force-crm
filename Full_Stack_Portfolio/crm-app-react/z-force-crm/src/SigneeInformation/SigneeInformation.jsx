import React from 'react';
import FirstName from "./FirstName.jsx";
import LastName from "./LastName.jsx";
import Establishment from "./Establishment.jsx";
import Phone from "./Phone.jsx";
import Email from "./Email.jsx";
import State from "./State.jsx";
import Zipcode from "./Zipcode.jsx";
import CustomerType from "./CustomerType.jsx";
import City from "./City.jsx";


const SigneeInformation = () => {
    return (
        <div className="content-wrapper">
            <div className="company-info">
                <section className="company-integrity">
                    <h2>Z-Force</h2>
                    <div>
                        <img src="./b2b.svg" alt="business-img" />
                        <h4>Every lead and interaction,
                            clearly organized and easily traceable
                            — enabling teams to operate with precision
                            and confidence.</h4>
                    </div>
                    <div>
                        <img src="./connect.svg" alt="connection-img" />
                        <h4>Empower businesses to communicate directly
                            and build stronger partnerships
                            through seamless engagement.</h4>
                    </div>
                    <div>
                        <img src="./documentation.svg" alt="business-img" />
                        <h4>Track every action with precision.
                            Maintain a verified record of interactions
                            that builds trust and reliability.</h4>
                    </div>

                </section>
            </div>
            <div className="signee-container">
                <h2>Join Z-Force —
                    Simplify Business Communication</h2>
                <section >
                    <FirstName />
                    <LastName />
                    <Establishment />
                    <CustomerType />
                    <Phone />
                    <Email />
                    <City />
                    <State />
                    <Zipcode />
                </section>
            </div>
        </div>
    );
};

export default SigneeInformation;
