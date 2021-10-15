import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import {
    SingleRoutine,
} from './';

const Routines = ({ routines, token, fetchRoutines }) => {

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `/routines/${routineId}`,
            token
        });
        await fetchRoutines();
    }

    return <div>
        {
            routines.map(routine => <SingleRoutine key={routine._id} SingleRoutine={routine} token={token}>

                {
                    routine && <Link to={`/routines/${routine._id}`} className="view-link">View Routine</Link>
                }

                {
                    routine.isAuthor && <Link to={`/routines/edit/${routine._id}`} className="edit-link">Edit</Link>
                }

                {
                    routine.isAuthor && <Link to={`/routines/delete/${routine._id}`} onClick={() => handleDelete(routine._id)} className="delete-link">Delete</Link>
                }
            </SingleRoutine>)
        }
    </div>
}


export default Routines;