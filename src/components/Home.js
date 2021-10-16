import React from 'react';

const Home = ({ user, token, routines, userId }) => {
    return <div>
        <h1 className="welcome">FitnessTrac.kr</h1>
        {token ? <div className="welcomeuser">
            You are logged in as {user}
        </div> : ''}
    </div>
    
};

export default Home;