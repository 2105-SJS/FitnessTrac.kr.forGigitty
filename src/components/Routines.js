import React from 'react';

import { SingleRoutine } from './'

const Routines = ({ routines }) => {
    console.log("ROUTINES: ", routines);
    return <>
        {
            routines
                ? routines.map(routine => <SingleRoutine key={routine.id} routine={routine}>
                    {/* Children */}
                </SingleRoutine>)
                : 'Loading...'
        }
    </>;
};

export default Routines;