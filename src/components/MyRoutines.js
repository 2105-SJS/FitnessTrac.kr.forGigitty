import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {SingleRoutine} from './'
import {callApi} from '../util';

const MyRoutines = ({activities, fetchPublicRoutines, fetchUserRoutines, userRoutines}) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [error, setError] = useState('');
    const [duration, setDuration] = useState(Number);
    const [count, setCount] = useState(Number);
    const [activityId, setActivityId] = useState(Number)

    const token = localStorage.getItem('token');
    const history = useHistory();

    const handleAddRoutine = async (ev) => {
        ev.preventDefault();
        try {
            const response = await callApi({
                url: `routines`,
                method: "POST",
                body: {name, goal, isPublic},
                token
            })
            if (response.error) {
                setError(response.error);
            };
            if (response) {
                await callApi({url: 'routines', token});
                setName('');
                setGoal('');
                setIsPublic(false);
                await fetchPublicRoutines();
                await fetchUserRoutines();
                history.push('/user/routines');
            };
            return response;
        } catch (error) {
            console.error(error);
        };
    };

    const handleDeleteRoutine = async (routineId) => {
        try {
            await callApi({
                url: `routines/${routineId}`, 
                method: "DELETE",
                token            
            })
            await callApi({url: 'routines', token});
            fetchUserRoutines();
            fetchPublicRoutines();
            history.push('/user/routines');
        } catch (error) {
            console.error(error);
        };    
    };

    const handleAddActivity = (routineId) => async (ev) => {
        ev.preventDefault();
        try {
            const response = await callApi({
                url: `routines/${routineId}/activities`,
                method: 'POST',
                body: {activityId, count, duration},
                token
            });
            if (response) {
                await fetchUserRoutines();
            }
            return response;
        } catch (error) {
            console.error(error);
        };
    };

    return <>
        <div className='form-container'>
            <form onSubmit={handleAddRoutine}>
                <label>Create A New Routine:</label>
                <fieldset>
                    <label>Name: </label>
                    <input type='text' placeholder=' enter-name' onChange={(ev) => {setName(ev.target.value)}} />
                </fieldset>
                <fieldset>
                    <label>Goal: </label>
                    <input type='text' placeholder=' enter-goal' onChange={(ev) => {setGoal(ev.target.value)}} />
                </fieldset>
                <fieldset>
                    <label>Public: </label>
                    <select placeholder='no' onChange={(ev) => {setIsPublic(ev.target.value)}}>
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                    </select>
                </fieldset>
                <button type='submit'>Create Routine</button>
                { error
                    ? <div className='password-alert'>{error}</div>
                    : null
                }
            </form>
        </div>
        
        { userRoutines.length > 0
            ? 
                <div className='routines'>
                    <span>Routines:</span>
                    {
                    userRoutines.map(routine => <SingleRoutine key={routine.id} routine={routine}>

                        { <button onClick={() => handleDeleteRoutine(routine.id)}>Delete Routine</button> }

                        { <div>
                            <h3>Add Activity To Routine</h3>
                            <form onSubmit={handleAddActivity(routine.id)}>
                                <select onChange={(ev) => setActivityId(ev.target.value)}>
                                {activities.map(activity => <option key={activity.id} value={activity.id}>{activity.name}</option>)}
                                </select>
                                <fieldset>
                                    <label>Count: </label>
                                    <input type='number' placeholder='number-of-repetitions' onChange={(ev) => setCount(ev.target.value)}></input>
                                </fieldset>
                                <fieldset>
                                    <label>Duration: </label>
                                    <input type='number' placeholder='number-of-minutes' onChange={(ev) => setDuration(ev.target.value)}></input>
                                </fieldset>
                                <button type='submit'>Add Activity</button>
                            </form>
                        </div> }

                    </SingleRoutine>)
                    }
                </div>
            
            : null }
    </>
};

export default MyRoutines;