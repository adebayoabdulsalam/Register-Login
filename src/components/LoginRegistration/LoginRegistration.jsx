import React, { useState } from "react"
import './LoginRegistration.css'
import { FaUserEdit, FaLock, FaEnvelope } from "react-icons/fa";



const LoginRegistration = () => {
    const[action, setAction] = useState("");

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };


    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder="Username" required />
                        <FaUserEdit className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Password" required/>
                        <FaLock  className="icon"/>
                    </div>
                    <div className="remenber-forgot">
                        <label> <input type="checkbox" /> Remenger me </label>
                        <a href="#">Forget password?</a>
                    </div>
                    <button type="submit">Login</button> 

                    <div className="register-link">
                        <p>Don`t have an account? <a 
                        href="#" onClick={registerLink}>Register</a> </p>
                    </div>
                </form>
            </div>
            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder="Username" required />
                        <FaUserEdit className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="Emali" 
                        placeholder="Emali" required />
                        <FaEnvelope className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Password" required/>
                        <FaLock  className="icon"/>
                    </div>
                    <div className="remenber-forgot">
                        <label> <input type="checkbox" /> I agree to the terms & conditions </label>
                        <a href="#">Forget password?</a>
                    </div>
                    <button type="submit">Register</button> 

                    <div className="register-link">
                        <p>Already have an account? <a 
                        href="#" onClick={loginLink}>login</a> </p>
                    </div>
                </form>
            </div>

        </div>
    );
};
export default LoginRegistration
