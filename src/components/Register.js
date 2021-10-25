import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router';

const {REACT_APP_BASE_URL} = process.env;

const Register = ({setLoggedIn, setToken}) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ verPass, setVerPass ] = useState('');
    const history = useHistory();
    
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const response = await fetch(`${REACT_APP_BASE_URL}/users/register`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username, password}),
            })
            const data = await response.json();
            const {token, user} = data;
            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('username', user.username);
                setToken(token);
                setLoggedIn(true);
                setUsername('');
                setPassword('');
                history.push('/')
            };
        } catch (error) {
            console.error(error);
        };
    };

    return <>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className='login'>
            <input type='text' placeholder='enter username' onChange={(ev) => setUsername(ev.target.value)} value={username}></input>

            <input type="password" placeholder="enter password" onChange={(ev) => setPassword(ev.target.value)} value={password}></input>

            <input type="password" placeholder="verify password" onChange={(ev) => setVerPass(ev.target.value)} value={verPass}></input>

            <button type="submit" disabled={ !password || !username || password.length < 8 || password !== verPass }>Register</button>
        </form>
        <span>Already Have An Account? Click <Link to='/users/login'>Here</Link> to Log In!</span>

        { password !== verPass && <span className='non-matching-data'>Passwords must match!</span> }

        { password.length < 8 && <span className='non-matching-data'>Passwords must contain at least 8 characters!</span> }
    </>;
};

export default Register;