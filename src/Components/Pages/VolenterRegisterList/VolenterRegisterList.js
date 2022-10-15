import React from 'react';
import UseVolenterRegisterList from './UseVolenterRegisterList';
import Volenter from './Volenter';

const VolenterRegisterList = () => {
    const [volenters] = UseVolenterRegisterList();
    return (
        <div className='container mx-auto my-5'>
            <h1 className='my-5 text-2xl'>Volenters Resigtration List</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>User Name</th>
                            <th>Event</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* <!-- row 1 --> */}
                        
                            {
                                volenters.map(volenter => <Volenter key={volenter._id} volenter={volenter}></Volenter>)
                            }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolenterRegisterList;