import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        login(username, password)
    }

    const login = async (username, password) => {
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        const data = await response.json()
        window.localStorage.setItem('token', data.token)
    };

    return (
        <>
            <form onSubmit={onSubmit}>

                <h1>LOGIN</h1>
                <div>
                    <input type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />

                    <input type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />

                    <button>Submit</button>
                </div>
            </form>
        </>
    )
};



export default Login;