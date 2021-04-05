import { render } from '@testing-library/react';
import React, { componentDidMount ,useEffect, useState } from 'react';
import firebase from '../util/firebase'
import People from './People'

export default function ListPeople() {
  const [listPeople, setListPeople] = useState(0);

 

  

  useEffect(() => {
    const people = firebase.database().ref("Personas");
    people.on("value", (snapshot) => {
      const peoples = snapshot.val();
      const listPeople = [];
      for (let p in peoples) {
        listPeople.push(peoples[p]);
      }
      setListPeople(listPeople);
    });
  }, []);  

  return( 
    <div>
        <h1>Lista personas</h1>
        {listPeople 
        ? listPeople.map((people, index) => <People people={people} key={index} /> ) 
        : ''}
    </div>
  );
}
