import React, {Fragment} from 'react';
import Planet from './planet'

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
        </Fragment>
    );
}

export default Planets;