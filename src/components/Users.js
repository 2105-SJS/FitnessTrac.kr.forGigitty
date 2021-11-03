import React from 'react';
import { Login } from './Login';

const Users = (props) => 
{
    const setToken=props.setToken;
    const currentUser=props.currentUser;
    const setCurrentUser=props.setCurrentUser;

    

    return currentUser&&currentUser.id ? 
    <>
        <h2>Logged in as {currentUser.name}</h2>
        <button onClick={(event)=>
        {
            event.preventDefault();
            localStorage.setToken("");
            localStorage.setCurrentUser({});
            localStorage.removeItem("id")
            localStorage.removeItem("username");
            localStorage.removeItem("token");
        }

        }>Logout</button>
    </>:<UserForm setToken={setToken} setCurrentUser={setCurrentUser}></UserForm>
}

export default Users;