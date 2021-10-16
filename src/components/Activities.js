import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import {
    SingleActivity,
} from './';

const Activities = ({ activities, token, fetchActivities }) => {

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `/activities/${activityId}`,
            token
        });
        await fetchActivities();
    }

    return <div>
        {
            activities.map(activity => <SingleActivity key={activity._id} SingleActivity={activity} token={token}>

                {
                    activity && <Link to={`/activity/${activity._id}`} className="view-link">View Activity</Link>
                }

                {
                    activity.isAuthor && <Link to={`/activity/edit/${activity._id}`} className="edit-link">Edit</Link>
                }

                {
                    activity.isAuthor && <Link to={`/activity/delete/${activity._id}`} onClick={() => handleDelete(activity._id)} className="delete-link">Delete</Link>
                }
            </SingleActivity>)
        }
    </div>
}


export default Activities;