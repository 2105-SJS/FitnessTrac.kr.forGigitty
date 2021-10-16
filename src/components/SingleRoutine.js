import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

const SingleRoutine = ({ routine, children }) => {
    return routine
        ? <div
            style={{ margin: '1.2rem' }}
        >
            <h5>
                {routine.title}
            </h5>
            <div> Routine: {routine.description}</div>
            
    
            {
                children
            }
        </div>
        : 'Loading Routines...'
}

export default SingleRoutine;