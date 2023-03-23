import React, { useState } from 'react';

function KeypadApp() {
  const [inputText, setInputText] = useState('');

  const [keypadType, setKeypadType] = useState(null);

  const handleKeypadClick = (type) => {
    setKeypadType(type);
  };

  const handleKeypadKeyPress = (key) => {
    setInputText(inputText + key);
  };

  const getKeypad = () => {
    const keypads = {
      UpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      LowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      Digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      Special: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', ';', ':', ',', '.', '/', '?', '<', '>'],
    };

    return (
      <div className="keypad">
        {keypads[keypadType].map((key) => (
          <button className='btn btn-dark m-1' key={key} onClick={() => handleKeypadKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="keypad-selector">
        <button className='btn btn-primary m-2' onClick={() => handleKeypadClick('UpperCase')}>UpperCase</button>
        <button className='btn btn-primary m-2' onClick={() => handleKeypadClick('LowerCase')}>LowerCase</button>
        <button className='btn btn-primary m-2' onClick={() => handleKeypadClick('Digits')}>Digits</button>
        <button className='btn btn-primary m-2' onClick={() => handleKeypadClick('Special')}>Special</button>
      </div>
      <h4> Text : {inputText}</h4>
      {keypadType && getKeypad()}
      
    </div>
  );
}

export default KeypadApp;
