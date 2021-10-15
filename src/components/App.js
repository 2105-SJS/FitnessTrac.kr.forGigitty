import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import {
    AccountForm,
    Activities,
    Home,
    Routines
   
} from './index';
const { REACT_APP_BASE_URL } = "https://fitnesstrac-kr.herokuapp.com/api";

import { callApi } from '../util';




const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [userId, setUserId] = useState('');


    // const fetchRoutines = async () => {
    //     try {
    //         const resp = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines`);
    //         const results = await resp.json();
    //         if (results) {
    //             setRoutines(results);
    //         };
    //         console.log("RESULTS", results)
    //     } catch (error) {
    //         throw error;
    //     };
    // };

    useEffect( async () => {
        try {
            // await fetchRoutines();
            console.log("ROUTINES", routines);
        } catch (error) {
            console.error(error);
        }
    }, [token]);

    return <div>
        <header className="site-banner">
            <Link to='/' className='emblem'><h1></h1></Link>
            <div className='nav-bar'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Routines" className="nav-link">Routines</Link>
                {
                    token ? <Link to='/profile' className="nav-link">Profile</Link> : ''
                }
                {
                    token ? <Link to='/account/login' className='nav-link' onClick={() => setToken('')}>Log Out</Link> : <Link to='/account/login' className='nav-link'>Login</Link>
                }
            </div>
        </header>
        <main>
            <Route exact path="/">
                <Home user={user} token={token} messages={messages} userId={userId} />
            </Route>

            <Route exact path="/profile">
                <Profile posts={posts} token={token} setPosts={setPosts} setMessages={setMessages} messages={messages} user={user} userId={userId} />
            </Route>

            <Route exact path="/posts">
                {token ? <NewPost token={token} setPosts={setPosts} /> : null}
                <Search posts={posts} setPosts={setPosts} />
                <div className="postdisplay">
                    <Posts posts={posts} token={token} fetchPosts={fetchPosts} setPosts={setPosts} />
                </div>
            </Route>

            <Route exact path="/posts/:postId">
                <div className="postdisplay">
                    <SinglePost posts={posts} token={token} />
                </div>
            </Route>

            <Route exact path="/posts/edit/:postId">
                <div className="postdisplay">
                    <EditPost posts={posts} token={token} setPosts={setPosts} />
                </div>
            </Route>

            <Route exact path="/account/:method">
                <AccountForm setToken={setToken} setUser={setUser}
                    setMessages={setMessages} setUserId={setUserId} />
            </Route>
        </main>
        <footer />
    </div>
}

export default App;