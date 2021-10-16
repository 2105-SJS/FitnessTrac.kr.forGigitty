import React from 'react';
import { SingleActivities } from './'

const Activities = ({ activities }) => {
    return activities
        ?
            <div className='activities'>
                <span>Activities:</span>
                {
                    activities.map(activity => <SingleActivities key={activity.id} activity={activity} />)
                }
            </div>
        
        : 'Loading...'
};

export default Activities;