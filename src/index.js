import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { App } from './components/';
// // import Activities from './Activities';


// const { REACT_APP_BASE_URL } = process.env;

// const App = () => {
//     const [routines, setRoutines] = useState([]);
//     const [token, setToken] = useState([]);

//     const fetchRoutines = async () => {
//         const resp = await fetch(`${REACT_APP_BASE_URL}/Routines`);
//         const data = await resp.json();
//         if (data) {
//             setRoutines(data);
//         }
//     }

//     useEffect(() => {
//         fetchRoutines();
//     }, [token])
//     return <div>
//         Hello World
//         <Route exact path="/activities">
//             <div>Activities</div>
//         </Route>
//             <Route exact path="/">
//                 <Home />
//             </Route>
//             <Route exact path="/routines">
//                 <Routines />
//         </Route>
//         <Route exact path="/users/login">
//             <Login />
//         </Route>
//         <Route exact path="/users/register">
//             <Register />
//         </Route>
//     </div>
// }

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('App'),
);