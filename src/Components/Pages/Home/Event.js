import React from 'react';

const Event = ({ event }) => {
    const { name, img, details } = event;
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl m-5">
                <figure><img className='h-80 w-full ' src={img} alt={name} /></figure>
                <div class="card-body">
                    <h2 class="text-center text-2xl">{name}</h2>
                    <p>{details}</p>
                </div>
            </div>

        </div>
    );
};

export default Event;