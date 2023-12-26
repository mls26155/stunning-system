"use client"

import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    }

    return (
        <div className="flex flex-col items-center font-mono m-4 space-y-4">
            <h1 className="font-bold uppercase text-5xl">Color Picker</h1>
            <div className="border-4 rounded-xl transition duration-700 ease-in-out" style={{backgroundColor: color}}>
                <p className='w-96 h-72 flex items-center justify-center font-bold text-xl'>Selected Color: {color}</p>
            </div>
            <label className='uppercase font-bold'>Select a Color:</label>
            <input className="border-2" type="color" onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker