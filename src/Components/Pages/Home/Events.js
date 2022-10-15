import React, { useEffect, useState } from 'react';
import Event from './Event';

const Events = () => {

    const [events, SetEvents] = useState([]);

    useEffect(() => {
        const url = 'https://hidden-fortress-64126.herokuapp.com/events';
        fetch(url)
            .then(res => res.json())
            .then(data => SetEvents(data))
    }, [])



    return (
        <div>
            <h1 className='text-4xl font-bold my-5'>Your All Events: {events.length}</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 '>
                
                    {
                        events.map(event => <Event key={event._id} event={event}></Event>)
                    }
                
            </div>
        </div>
    );
};

export default Events;