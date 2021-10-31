import React, { useState, useContext } from "react";
import { callApi } from '../util';
import { useHistory, Link } from "react-router-dom";

const LoginRegister = () => {
    const { setToken, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const loginUser = async () => {
        try {

            const response = await callApi({
                url: "/users/loginregister",
                method: "POST",
                body: {
                    username,
                    password
                }
            })
            console.log(response);
            if (response) {
                setUser(username);
                setToken(response.token)
                if (response.token) {
                    history.push("/users/me");
                }
            }

        }
        catch (error) {
            console.log(error);
        }
    }

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        loginUser();

        setUsername("");
        setPassword("");
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>

                <h1>Login/Register</h1>

                <div>
                    <TextField
                        label="username"
                        id="outlined-basic"
                        variant="outlined"
                        value={username}
                        onChange={usernameHandler}
                        type="text"
                    />
                </div>

                <div>
                    <TextField
                        label="password"
                        id="outlined-basic"
                        variant="outlined"
                        value={password}
                        onChange={passwordHandler}
                        type="password"
                    />
                </div>

                <div>
                    <Button color="primary" variant="contained" type="submit">Submit</Button>
                </div>

                <div>
                    <h3>Dont have an account? Register down below</h3>
                    <Button 
                    component={Link} to="/users/register" 
                    color="primary" 
                    variant="contained" 
                    type="submit">Register</Button>
                </div>

            </form>
        </>
    )
}

export default LoginRegister;


// import React, {useState} from 'react';
// import {Link} from 'react-router-dom'
// import {useParams, useHistory} from 'react-router';
// import {callApi} from '../util';

// const LoginRegister = ({fetchUserRoutines, setToken, setUserName, setUserId}) => {
//     const [ username, setUsername ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ passwordMatch, setPasswordMatch ] = useState('');
//     const [ error, setError] = useState('');
//     const params = useParams();
//     const history = useHistory();

//     return <> 
//         <div className='form-container'>
//             <div className='login-header'>            
//                 {
//                 params.method === 'register' 
//                     ? <h3 className='header'>Register A New Account</h3> 
//                     : <h3 className='header'>Login To Your Account</h3>
//                 }           
//             </div>
//             <form className='login-form' onSubmit={async (ev) =>{
//                 ev.preventDefault();
//                 try{ 
//                     const response = await callApi ({
//                         url: `/users/${params.method}`,
//                         method: 'POST',
//                         body: {username, password}                        
//                     });
//                     if (response.error) {
//                         setError(response.error);
//                     }
//                     if (response.token) {
//                         const {token} = response;
//                         setToken(token);
//                         localStorage.setItem('token', token);
//                         const user = await callApi({url: '/users/me', token})
//                         if (user) {
//                             setUserName(user.username);
//                             localStorage.setItem('username', user.username);
//                             setUserId(user.id)
//                             localStorage.setItem('userId', user.id)
//                             await fetchUserRoutines();
//                             setUsername('');
//                             setPassword('');
//                             history.push('/user/routines');
//                         }
//                     }
//                 } catch(error) {
//                     console.error(error);
//                 };                
//             }}>
//                 <fieldset className='input-fieldset'>
//                     <label>User Name</label>
//                     <input 
//                         className='input-field' 
//                         type='text'
//                         name='Login Name'
//                         placeholder='Please Enter User Name: ' 
//                         onChange={(ev) => setUsername(ev.target.value)}
//                     />
//                 </fieldset>

//                 <fieldset className='input-fieldset'>
//                     <label>Password</label>
//                     <input 
//                         className='input-field' 
//                         type='password' 
//                         name='Password'
//                         placeholder='password (min length 8 chars)' 
//                         onChange={(ev) => setPassword(ev.target.value)}
//                     />
//                 </fieldset>

//                 {
//                 params.method === 'register' 
//                     ? <fieldset className='input-fieldset'>
//                         <label>Verify Password</label>
//                             <input 
//                                 className='input-field' 
//                                 type='password' 
//                                 name='Verify Password'
//                                 placeholder='Re-Enter User Password: ' 
//                                 onChange={(ev) => setPasswordMatch(ev.target.value)}
//                             />
//                     </fieldset>
//                     : ''
//                 }
                
//                 {
//                 params.method === 'register' 
//                     ? <button className='login-button' type="submit" disabled={!password || !username || password.length < 8 || password !== passwordMatch }>
//                         Register
//                     </button> 
//                     : <button className='login-button' type="submit" disabled={!password || !username || password.length < 8 }>
//                         Login
//                     </button>
//                 }
//                 { params.method === 'register' && password !== passwordMatch && <span className='password-alert'>Passwords must match!</span> }

//                 { params.method === 'register' && password.length < 8 && <span className='password-alert'>Passwords must contain at least 8 characters!</span> }

//                 { error
//                     ? <span>{error}</span>
//                     : null
//                 }

//                 {
//                 params.method === 'register' 
//                 ? <>
//                     <span>Already Have An Account? </span>
//                     <Link to="/users/login" className='login-link'>
//                         Click Here To Log In!
//                     </Link>
//                 </> 
//                 : <>
//                     <span>No Account Yet? </span>
//                     <Link to="/account/register" className='login-link'>
//                         Click Here To Register!
//                     </Link>
//                 </>
//                 }
//             </form>            
//     </div>
// </>
// };

// export default LoginRegister;