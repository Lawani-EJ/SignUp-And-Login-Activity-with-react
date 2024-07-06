import React, { useState } from 'react';
import "../App.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        console.warn(email, password);
        let item = { email, password };
        let result = await fetch("http://ecommerce.reworkstaging.name.ng/v2/merchants/login", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
    }

    return (
        <div className='col-sm-6'>
            <h1 className='display-1'>Login Page</h1>
            <input placeholder='email' onChange={(e) => setEmail(e.target.value)} type='text' className='form-control'></input>
            <input placeholder='password' onChange={(e) => setPassword(e.target.value)} type='password' className='form-control'></input>
            <button type="button" onClick={login} className="btn btn-secondary">Login</button>
        </div>
    );
}

export default Login;
