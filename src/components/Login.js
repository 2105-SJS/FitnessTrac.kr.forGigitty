import React, { useState,useEffect } from 'react';
import {callApi} from '../util'

const Login = (props) => 
{
    const setToken=props.setToken;
    const setCurrentUser=props.setCurrentUser;


    const [register,setRegister]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");

    const [message,setMessage]=useState("");
    const [hidden,setHidden]=useState(true);
    const [remember,setRemember]=useState(true);
    
    //message manager
    useEffect(()=>
    {
        if(confirmPassword&&register)
        {
            if(confirmPassword!==password)
            {
                let output="Password match o=matching character, x=wrong character, _=missing character, *=extra character:";
                for(let i=0;i<password.length||i<confirmPassword.length;i++)
                {
                    if(i<password.length)
                    {
                        if(i<confirmPassword.length)
                        {
                            if(password.charAt(i)===confirmPassword.charAt(i))
                            {
                                output+="o";
                            }
                            else
                            {
                                output+="x";
                            }
                        }
                        else
                        {
                            output+="_";
                        }
                    }
                    else
                    {
                        output+="*";
                    }
                }
                setMessage(output);
            }
            else
            {
                setMessage("Passwords match!")
            }
        }
        else
        {
            setMessage("Enter all active fields to "+(register?"register":"login")+".");
        }
    },[password,confirmPassword,register])

    return <form onSubmit={async(event)=>
    {
            event.preventDefault();
            callApi(
            {
                url:`users/${register?"register":"login"}`,
                method:"POST",
                body:
                {
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    username:username,
                    password:password
                }
            }
            ).then((response)=>
            {
                console.log(response);
                if(response)
                {
                    if(response.token)
                    {
                        setToken(response.token);
                        setMessage("You are logged in.");
                        setCurrentUser(
                        {
                            id:response.id,
                            name:response.username
                        });
                        if(remember)
                        {
                            localStorage.setItem("token",response.token);
                            localStorage.setItem("username",response.username);
                            localStorage.setItem("id",response.id);
                        }
                    }
                    else
                    {
                        setMessage(response.message);
                    }
                }
                else
                {
                    setMessage("error "+(register?"registering":"logging in")+".");
                }
            })

    }}>
        <div>
            <input type="checkbox" checked={register} value={register}  onChange={()=>
            {
                setRegister(!register);
            }}/>
            <label htmlFor="Register">Register</label>
        </div>
        <input required type="text" placeholder="Username" value={username} onChange={(event)=>
        {
            setUsername(event.target.value);
        }}/>

        <input required type={hidden ? "password": "text"} placeholder="Password" value={password} onChange={(event)=>
        {
            setPassword(event.target.value);
        }}/>

        <input required type="password" disabled={!register} placeholder="Confirm Password" value={confirmPassword} onChange={(event)=>
        {
            setConfirmPassword(event.target.value);
        }}/>

        <div>
            <input type="checkbox" checked={hidden} value={hidden}  onChange={()=>
            {
                setHidden(!hidden);
            }}/>
            <label htmlFor="Hide Password">Hide Password</label>
        </div>
        <input required type="text" disabled={!register} placeholder="First Name" value={firstName} onChange={(event)=>
        {
            setFirstName(event.target.value);
        }}/>

        <input required type="text" disabled={!register} placeholder="Last Name" value={lastName} onChange={(event)=>
        {
            setLastName(event.target.value);
        }}/>

        <input required type="email" pattern=".+@.+" disabled={!register} placeholder="Email" value={email} title="Please provide a valid email address like: someName@someSite" onChange={(event)=>
        {
            setEmail(event.target.value);
        }}/>

        
        <div>
            <input type="checkbox" checked={remember} value={remember}  onChange={()=>
            {
                setRemember(!remember);
            }}/>
            <label htmlFor="Remember Me">Remember Me</label>
        </div>

        <p>{message}</p>

        <button type="submit" disabled={!username||!password||(register&&(password!==confirmPassword||!firstName||!lastName||!email))}>{register?"Register":"Login"}</button>
    </form>
}

export default Login;

// import React, { useState } from 'react';
// import { useParams, useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
// import  Register from './Register';
// import Users from './'
// const {REACT_APP_BASE_URL = 'http://localhost:3000/api'} = process.env;


// const Login = ({setToken, setUser}) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordMatch, setPasswordMatch] = useState('');
//   const params = useParams();
//   const history = useHistory();
  
//   return <div>
//         <form onSubmit={async (event) => {
//             event.preventDefault();
//             try {

//                 const fetchUrl = `${REACT_APP_BASE_URL}/users/${params.method}`
//                 console.log('fetchUrl: ', fetchUrl);

//                 const loginResponse = await callApi({
//                     url: `/users/${params.method}`,
//                     method: 'POST',
//                     body: {
//                         user: {
//                             username,
//                             password
//                         }
//                     }
//                 });
                
//                 if (loginResponse.data) {

//                     const userResponse = await callApi({ url: '/users/me', token: loginResponse.data.token });
//                     setToken(loginResponse.data.token);
//                     setUser(userResponse.data.username);
//                     setUserId(userResponse.data._id);
//                     if (loginResponse.data.token) {
//                         history.push('/');
//                     }
//                 }
//             } catch (error) {
//                 console.error(error)
//                 alert("Invalid Username or Password. The information you've entered doesn't match any account. Please use the link below to register for an account.")
//                 setUsername('')
//                 setPassword('')
//             }
//         }}>
//             <div className="container">
//                 <h1 className='loginheader'><div>{params.method}</div></h1>
//                 <br />
//                 <input type="text" placeholder=" username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
//                 <br />

//                 <input type="password" placeholder=" password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
//                 <br />

//                 {
//                     params.method === 'register' ? <input type="password" placeholder="retype your password" value={passwordMatch} onChange={(event) => setPasswordMatch(event.target.value)}></input>
//                         : ''
//                 }

//                 {

//                     params.method === 'register' ? <button type="submit" disabled={!password || !username || password !== passwordMatch} >Submit</button> : <button type="submit" disabled={!password || !username}>Submit</button>

//                 }
//             <div>
//                 {
//                     params.method === 'login' ? <Link to='/login' className="loginhere" >Click here to register</Link> : <Link to='/login'>Click here to login</Link>
//                 }
//             </div>
//             </div>
//         </form>
//     </div>
// }

// export default Login;