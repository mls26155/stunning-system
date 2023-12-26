'use client'

import React, { useState } from 'react';

const MyComponent = () => {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployement] = useState(false);
  
  const updateName = () => {
    setName("Mikey");
  };

  const updateAge = () => {
    setAge(age + 2);
  }

  const toggleEmployment = () => {
    setEmployement(!isEmployed);
  }

  return (
    <>
        <p>Name: {name}</p>
        <button onClick={updateName} className="rounded-xl bg-sky-500 text-white m-2 px-4 py-2 font-bold">Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge} className="rounded-xl bg-sky-500 text-white m-2 px-4 py-2 font-bold">Set Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployment} className="rounded-xl bg-sky-500 text-white m-2 px-4 py-2 font-bold">Toggle Employement</button>
    </>
  )
}

export default MyComponent