import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import {
    Login,
    Register,
    Activities,
    Home,
    Routines,
   
} from './index';
const { REACT_APP_BASE_URL } = "https://fitnesstrac-kr.herokuapp.com/api";



import { callApi } from '../util';



const App = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [userId, setUserId] = useState('');

    const props = {
        Activities,
        setActivities,
        Routines,
        setRoutines,
        token,
        setToken
    };
 

    const fetchRoutines = async () => {
        try {
            const resp = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines`);
            const results = await resp.json();
            if (results) {
                setRoutines(results);
            };
            console.log("RESULTS", results)
        } catch (error) {
            throw error;
        };
    };

    const fetchActivities = async () => {
        try {
            const resp = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities`);
            const results = await resp.json();
            if (results) {
                setActivities(results);
            };
            console.log("ACTIVITIES", results)
        } catch (error) {
            throw error;
        };
    };

    useEffect( async () => {
        try {
            await fetchRoutines();
            await fetchActivities();
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
                <Link to="/routines" className="nav-link">Routines</Link>
                {
                    token ? <Link to='/activities' className="nav-link">Activities</Link> : ''
                }
                {
                    token ? <Link to='/users/login' className='nav-link' onClick={() => setToken('')}>Log Out</Link> : <Link to='/users/login' className='nav-link'>Login</Link>
                }
            </div>
        </header>
        {/*ROUTES*/}
        <main id ='content'>
            <Route exact path='/'>
                <Home {...props} />
            </Route>
            <Route exact path='/routines'>
                <Routines {...props} />
            </Route>
            <Route exact path='/activities'>
                <Activities {...props} />
            </Route>
            <Route exact path='/users/login'>
                <Login {...props} />
            </Route>
            <Route exact path='/users/register'>
                <Register {...props} />
            </Route>
        </main>
        <footer />
    </div>
}

export default App;