import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import {
    allRoutines,
} from '.';

const Routines = ({ Routines, token, fetchRoutines }) => {

    // const handleDelete = async (postId) => {
    //     const respObj = await callApi({
    //         method: 'DELETE',
    //         url: `/Routines/${postId}`,
    //         token
    //     });
    //     await fetchRoutines();
    // }

    // return <div>
    //     {
    //         Routines.map(post => <allRoutines key={post._id} post={post} token={token}>

    //             {
    //                 post && <Link to={`/Routines/${post._id}`} className="view-link">View Post</Link>
    //             }

    //             {
    //                 post.isAuthor && <Link to={`/Routines/edit/${post._id}`} className="edit-link">Edit</Link>
    //             }

    //             {
    //                 post.isAuthor && <Link to={`/Routines/delete/${post._id}`} onClick={() => handleDelete(post._id)} className="delete-link">Delete</Link>
    //             }
    //         </allRoutines>)
    //     }
    // </div>
}


export default Routines;