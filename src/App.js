import './App.css';
import Form from "./components/Form"
import React from 'react'
import ListPeople from './components/ListPeople';

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Form />
      <ListPeople />
    </div>
  );
}

export default App;
