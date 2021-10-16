import React from 'react';
import { Link } from 'react-router-dom';

const Logout = ({ token, setToken }) => {
    const handleLogout = (ev) => {
        ev.preventDefault();
        setToken('');
        localStorage.removeItem('token', token)
    }
    return <Link className="main-link" to="/" onClick={handleLogout}>Logout</Link>
}

export default Logout;