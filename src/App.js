//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";

function App() {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [show, setshow] = useState(false);

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
    if(firstName && lastName){
      setshow(true);
    }
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form>
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
        <button onClick={submit}>Submit</button>
      </form>
      {show ? <p>Full Name: {firstName} {lastName}</p> : <></>}
    </>
  );
}

export default App;
