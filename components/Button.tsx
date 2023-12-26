'use client'

import React, { useState } from 'react';

const Button = () => {

  const [buttonText, setButtonText] = useState("Click me");
  
  const handleClick = () => {
    setButtonText("You clicked me!");
  };

  return (
    <button onClick={handleClick} className="rounded-xl bg-sky-500 text-white m-2 px-4 py-2 font-bold">{buttonText}</button>
  )
}

export default Button