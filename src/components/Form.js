import React, { useState } from 'react';
import firebase from '../util/firebase'

export default function Form(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    };

    const handleOnChangeAge = (e) => {
        setAge(e.target.value);
    };

    const createPeople = () => {
        const people = firebase.database().ref('Personas');
        const me = {
            name,
            age
        };
        people.push(me);
    }

    return (
        <div>
            <input type="text" onChange={handleOnChangeName} value={name} />
            <input type="number" onChange={handleOnChangeAge} value={age} />
            <button onClick={createPeople}>Add name!</button>
        </div>
    )
}