import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router';
const {REACT_APP_BASE_URL = 'http://localhost:3000/api'} = process.env;


const Login = ({setToken, setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const params = useParams();
  const history = useHistory();
  
  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const resp = await fetch(`${REACT_APP_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify({
            user: {
                username,
                password,

            }
         
        })
      })
      const data = await resp.json();
      const {token} = data;
      if(token) {
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
      <button type="submit">Login</button>
    </form>
  </div>
}

export default Login;