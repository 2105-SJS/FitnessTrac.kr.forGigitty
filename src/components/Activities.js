import React,{ useState } from 'react';
import { callApi } from '../util';
import {  useHistory } from 'react-router';
import { SingleActivity } from './'


const Activities = ({ activities, fetchActivities }) => {
    const token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();
    
    const handleAddActivity= async (event) => {
        event.preventDefault();
        try {
            const response = await callApi({
                url: 'activities',
                method: 'POST',
                body: { name, description },
                token
            })
            if (response) {
                await fetchActivities();
                setName('');
                setDescription('');
                history.push('/activities')
            }
            return response;            
        } catch (error) {
            console.error (error);
        };
    };

    return <>
        {
        token
            ? <div className='form-container'>
                <form onSubmit={handleAddActivity}>
                    <fieldset>
                        <label>Name: </label>
                        <input type='text' placeholder='name' value={name} onChange={(event) => {setName(event.target.value)}}></input>
                    </fieldset>
                    <fieldset>
                        <label>Description: </label>
                        <input type='text' value={description} placeholder='description' onChange={(event) => {setDescription(event.target.value)}}></input>
                    </fieldset>
                    <button type='submit'>Add activity</button>
                </form>
            </div>
            : ''
        }    
        {
        activities 
            ? <div className='activities'>
                    <span>Activities:</span>
                    {
                    activities.map(activity => <SingleActivity key={activity.id} activity={activity} />)
                    }
                </div>
            
            : 'It is cooking...'
        }
    </>
};

export default Activities;