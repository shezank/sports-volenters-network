import React from 'react';

const MyEvent = ({event}) => {
    const {img, name, details} = event;
    return (
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{details}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Cancell</button>
                </div>
            </div>
        </div>
    );
};

export default MyEvent;