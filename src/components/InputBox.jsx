import React, { useState } from 'react';
import './InputBox.css'; 

function InputBox() {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="input-container">
      <h2>Input Box</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        className="input-text"
      />
      <div className="output-box">
        {inputText}
      </div>
    </div>
  );
}

export default InputBox;
