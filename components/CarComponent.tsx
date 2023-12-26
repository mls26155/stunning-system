'use client'

import React, { useState } from 'react'

const carComponent = () => {

    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"})

    const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar((c) => ({...c, year: Number(event.target.value)}));
    }

    const handleMakeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar((c) => ({...c, make: event.target.value}));
    }


    const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar((c) => ({...c, model: event.target.value}));
    }

    return (
        <div>
            <p>Your favorite car is : {car.year} {car.make} {car.model}</p>

            <input className="text-black" type="number" value={car.year} onChange={handleYearChange}/><br/>

            <input className="text-black" type="text" value={car.make} onChange={handleMakeChange}/><br/>

            <input className="text-black" type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    )
}

export default carComponent