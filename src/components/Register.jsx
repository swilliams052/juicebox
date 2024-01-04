import React, { useState } from "react";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        register(username, password, name, location)
    };

    const register = async (username, password, name, location) => {
        const response = await fetch ('http://localhost:3000/api/users/register',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, name, location })
            },
        );
    };
return (
        <>
            <form onSubmit={onSubmit}>
            <h1>REGISTER</h1>
                <div>
                    <input type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />

                    <input type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />

                    <input type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input type='text'
                        placeholder='Location'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <br />

                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Register;
