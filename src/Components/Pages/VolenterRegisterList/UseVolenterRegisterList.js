import React, { useEffect, useState } from 'react';

const UseVolenterRegisterList = () => {
    const [volenters, setVolenters] = useState([]);
    useEffect(()=>{
        const url = 'https://hidden-fortress-64126.herokuapp.com/volenters';
        fetch(url)
        .then(res => res.json())
        .then(data => setVolenters(data))
    },[])
    return [volenters, setVolenters];
};

export default UseVolenterRegisterList;