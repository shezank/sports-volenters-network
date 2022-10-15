import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Volenters = () => {
    let navigate = useNavigate();
    const handelerOrder = data => {
        data.preventDefault();
        const volentersDetailes = {
            name: data.target.name.value,
            username: data.target.username.value,
            email: data.target.email.value,
            details: data.target.details.value,
            event: data.target.event.value
        }
        fetch('https://hidden-fortress-64126.herokuapp.com/volenters', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(volentersDetailes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertId) {
                    alert('Your Volenter Registration Successfully Complete')
                    data.target.reset();
                    navigate('/volenterlist');
                };
            })

    }
    return (

<div className='flex h-screen justify-center items-center'>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Register As A Volenters</h2>
                    <form onSubmit={handelerOrder}>
                        <input className='input input-bordered w-full max-w-xs mb-3' type="text" name="name" placeholder='Full Name' required />
                        <br />
                        <input className='input input-bordered w-full max-w-xs mb-3' type="text" name="username" placeholder='username' required />
                        <br />
                        <input className='input input-bordered w-full max-w-xs mb-3' type="email" name="email" placeholder='Email' required />
                        <br />
                        <input className='input input-bordered w-full max-w-xs mb-3' type="text" name="event" placeholder='Event' required />
                        <br />
                        <textarea className='input input-bordered w-full max-w-xs mb-3' type="text" name="details" placeholder='Details' required />
                        <br />
                        <button class="btn btn-primary w-full max-w-xs" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Volenters;