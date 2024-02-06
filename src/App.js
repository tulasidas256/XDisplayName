//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";

function App() {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [fullName, setfullName] = useState('');

  // Function for set first name
  const handleFirst = (e)=>{
    setfirstName(e.target.value);
  };
  // Function for set last name
  const handleLast = (e)=>{
    setlastName(e.target.value);
  };
  // Function for submit process
  const submit = (e)=>{
    e.preventDefault();
    let text = `Full Name: ${firstName} ${lastName}`;
    setfullName(text);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={submit}>
        <label htmlFor="firstName">
          First Name:
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleFirst}
            required
          />
        </label>
        <br/>
        <label htmlFor="lastName">
          Last Name:
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleLast}
            required
          />
        </label>
        <br/>
        <button>Submit</button>
      </form>
      <p>{fullName}</p>
    </>
  );
}

export default App;
