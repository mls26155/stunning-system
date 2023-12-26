'use client'

import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    return (
        <div className="items-center">
            <p className="border-4 font-bold p-2 m-4">Count = {count}</p>


            <button onClick={increment} className="bg-green-500 rounded-full px-6 py-2 font-bold m-2 shadow-lg hover:bg-green-700">Increment</button>

            <button onClick={decrement} className="bg-red-500 rounded-full px-6 py-2 font-bold m-2 shadow-lg hover:bg-red-700">Decrement</button>
        </div>
    )
}

export default Counter