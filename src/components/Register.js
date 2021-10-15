import React, { useState } from 'react';
const { REACT_APP_BASE_URL = 'http://localhost:3000/api' } = process.env;


const Register = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (ev) => {
        try {
            ev.preventDefault();
            const resp = await fetch(`${REACT_APP_BASE_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/JSON'
                },
                body: JSON.stringify({
                    username,
                    password,
                })
            })
            const data = await resp.json();
            const { token } = data;
            if (token) {
                // setting something on localstorage
                localStorage.setItem('token', token);
                setToken(token);
                setUsername('');
                setPassword('');
            }
        } catch (error) {
            console.error(error)
        }

    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" onChange={(ev) => setUsername(ev.target.value)} value={username}></input>
            <input type="password" placeholder="password" onChange={(ev) => setPassword(ev.target.value)} value={password}></input>
        
            {
                params.method === 'login' ? <Link to='/users/register' className="registerhere" >Click here to register</Link> : <Link to='/account/login'>Click here to login</Link>
            }
        </form>
    </div>
}

export default Register;