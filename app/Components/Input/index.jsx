import React, { useState } from "react";

function Input({ placeholder, type, style, prompt, onChange }) {
  return (
    <>
      
        <input
          type={type}
          name="prompt"
          className={`px-5 py-2 rounded-xl outline-none w-1/2 h-fit ${style}`}
          placeholder={placeholder}
          value={prompt}
          onChange={onChange}
        />
  
    </>
  );
}

export default Input;
