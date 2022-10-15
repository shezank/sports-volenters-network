import React from 'react';
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
            const url = 'https://hidden-fortress-64126.herokuapp.com/events';
            fetch(url,{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(reslut => {

                if(reslut.insertedId){
                    toast('Successfully Add Your Event');
                    console.log(reslut);
                };
               
            })
        }
    return (
        <div className='flex h-screen justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center font-bold text-xl">Add Your Events</h2>
                        <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs"  {...register("name", { required: true })} />
                        <input type="text" placeholder="Details" class="input input-bordered w-full max-w-xs" {...register("details", { required: true })} />
                        <input type="text" placeholder="URL" class="input input-bordered w-full max-w-xs" {...register("img", { required: true })} />
                        <div class="card-actions justify-center">
                        <button type="submit" class="btn btn-primary w-full max-w-xs">Add Event</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddEvent;