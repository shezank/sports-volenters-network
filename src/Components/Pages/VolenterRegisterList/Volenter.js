import React from 'react';
import UseVolenterRegisterList from './UseVolenterRegisterList';

const Volenter = ({ volenter }) => {
    const { _id, name, username, email, event } = volenter;
    const [volenters, setVolenters] = UseVolenterRegisterList();

    const handeleDelete = id => {
        const proceed = window.confirm('Are Your Sure?');
        if (proceed) {
            const url = `https://hidden-fortress-64126.herokuapp.com/volenters/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingUser = volenters.filter(volenter => volenter._id !== id)
                    setVolenters(remainingUser);
                })
        }

    }
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>{event}</td>
                <td><button onClick={(() => (handeleDelete(_id)))} className='btn btn-secondary'>X</button></td>
            </tr>
        </>


    );
};

export default Volenter;