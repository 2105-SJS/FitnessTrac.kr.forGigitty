import React from 'react';

const SingleActivity = ({ activity, children }) => {
    return activity
        ? <div
            style={{ margin: '1.2rem' }}
        >
            <h5>
                {activity.title}
            </h5>
            <div>Name: {activity.name}</div>
            <div>Description: {post.description}</div>
            
            {
                children
            }
        </div>
        : 'Loading Single Activity...'
}

export default SingleActivity;