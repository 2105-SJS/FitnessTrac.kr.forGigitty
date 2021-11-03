import React from 'react';

const Home = ({ username, token, messages, userId }) => {
    return <div>
        <h1 className="welcome">Welcome to FitnessTrac.kr</h1>
        {token ? <div className="welcomeuser">
            You are logged in as { username }
        </div> : ''}
    </div>
}
export default Home;