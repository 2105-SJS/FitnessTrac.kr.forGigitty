// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'

// import { App } from './components';

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.querySelector('app')
// );

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components';


const { REACT_APP_BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api' } = process.env;

const App = () => {
    const [routines, setRoutines] = useState([]);
    const [token, setToken] = useState([]);

    const fetchRoutines = async () => {
        const resp = await fetch(`${REACT_APP_BASE_URL}/routines`);
        const data = await resp.json();
        if (data) {
            setRoutines(data);
            setToken(token);
        }
    }

    useEffect(() => {
        fetchRoutines();
    }, [token])
    return <div>
        Hello World
        <Route exact path="/home">
            <h1>Home</h1>
            <Home />
        </Route>
        <Route exact path="/activities">
            <div>Activities</div>
        </Route>
        <Route exact path="/routines">
            <h1>Routines</h1>
            {
                routines.map((routine) => <div>{routine.name}</div>)
            }
        </Route>
    </div>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.querySelector('app'),
);