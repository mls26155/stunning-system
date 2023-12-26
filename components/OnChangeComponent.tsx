'use client'

import React, { useState } from 'react'

const OnChangeComponent = () => {

    const [comment, setComment] = useState("");
    
    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }

    return (
        <div>
            <textarea className='text-black' value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instructions"/>
            <p className="text-black"> Comment: {comment}</p>
        </div>
    )
}

export default OnChangeComponent