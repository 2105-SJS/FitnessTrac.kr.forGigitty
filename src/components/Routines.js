import React from 'react';
import { SingleRoutine } from './'

const Routines = ({ routines}) => {
    return routines
        ? <>
            <div>
                <span>-Public Routines-</span>
                {
                routines.map(routine => <SingleRoutine key={routine.id} routine={routine} />)
                }
            </div>
        </>
        : `We're getting something...`
};

export default Routines;

