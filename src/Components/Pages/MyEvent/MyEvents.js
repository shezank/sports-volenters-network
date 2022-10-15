import React, { useEffect, useState } from 'react';
import MyEvent from './MyEvent';

const MyEvents = () => {
    const [events, SetEvents] = useState([]);

    useEffect(() => {
        const url = 'https://hidden-fortress-64126.herokuapp.com/events';
        fetch(url)
            .then(res => res.json())
            .then(data => SetEvents(data))
    }, [])
    return (
        <div className='grid grid-cols-3 gap-3 m-5'>
            
                {
                    events.map(event => <MyEvent key={event._id} event={event} ></MyEvent>)
                }
            
        </div>
    );
};

export default MyEvents;