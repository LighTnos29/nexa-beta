import React, {useState} from 'react'

function Input({ placeholder, type, style, value, onChange }) {
    

    return (
        <div>
            <input
                type={type}
                name="prompt"
                className={`px-5 py-2 rounded-xl outline-none w-1/2 h-fit ${style}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            /></div>
    )
}

export default Input;
