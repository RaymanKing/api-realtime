import React from 'react';

export default function People({ people }){
    return (
        <div>
            <h1>Nombre:{people.name} Edad: {people.age}</h1>
        </div>
    )
}