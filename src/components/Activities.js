import React,{useState} from 'react';
import {callApi} from '../util';
import {useHistory} from 'react-router';
import {SingleActivity} from './'

const Activities = ({activities, fetchActivities}) => {
    const token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const response = await callApi({
                url: '/activities',
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
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Name: </label>
                        <input type='text' placeholder='enter-activity-name' value={name} onChange={(ev) => {setName(ev.target.value)}}></input>
                    </fieldset>
                    <fieldset>
                        <label>Description: </label>
                        <input type='text' value={description} placeholder='enter-activity-description' onChange={(ev) => {setDescription(ev.target.value)}}></input>
                    </fieldset>
                    <button type='submit'>Add Activity</button>
                </form>
            </div>
            : null
        }    
        {
        activities 
            ? <div className='activities'>
                    <span>Activities:</span>
                    {
                    activities.map(activity => <SingleActivity key={activity.id} activity={activity} />)
                    }
                </div>
            
            : 'Loading Activities...'
        }
    </>
};

export default Activities;