import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import {
    SingleRoutine,
} from '.';

const Routines = ({ Routines, token, fetchRoutines }) => {

    const handleDelete = async (postId) => {
        const respObj = await callApi({
            method: 'DELETE',
            url: `/routines/${routineId}`,
            token
        });
        await fetchRoutines();
    }

    return 
        { 
            Routines.map(routines => <SingleRoutine key={routines._id} routines={routines} token={token}>

                {
                    routines && <Link to={`/routines/${routines._id}`} className="view-link">View Routines</Link>
                }

                {
                    routines.isUser && <Link to={`/routines/edit/${routines._id}`} className="edit-link">Edit Routines</Link>
                }

                {
                    routines.isUser && <Link to={`/routines/delete/${routines._id}`} onClick={() => handleDelete(routines._id)} className="delete-link">Delete</Link>
                }
            </SingleRoutine>)
        }
}


export default Routines;
