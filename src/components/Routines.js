import React from 'react';
import { callApi } from '../util';
import { Link } from 'react-router-dom';

import { SingleRoutine } from './';

const Routines = ({ routines, token, fetchRoutines }) => {
    return <div>
        <h1 className="welcome">Routines Page</h1>
        {token ? <div className="welcomeuser">
            You are logged in as {user}
        </div> : ''}
        
        
    </div>
}

// const Routines = ({ routines, token, fetchRoutines }) => {
   

//     const handleDelete = async (routineId) => {
//         const respObj = await callApi({
//             method: 'DELETE',
//             url: `/routines/${routineId}`,
//             token
//         });
//         await fetchRoutines();
//     }

//     return 

//         {
         
       
        
//             {/* routines.map(routines => <SingleRoutine key={routines._id} routines={routines} token={token}>

//                 {
//                     routine && <Link to={`/routines/${routines._id}`} className="view-link">View Routines</Link>
//                 }

//                 {
//                     routine.isUser && <Link to={`/routines/edit/${routines._id}`} className="edit-link">Edit Routines</Link>
//                 }

//                 {
//                     routine.isUser && <Link to={`/routines/delete/${routines._id}`} onClick={() => handleDelete(routines._id)} className="delete-link">Delete</Link>
//                 }
//             </SingleRoutine>) */}
//         }
//         </div>
// }
        
export default Routines;
