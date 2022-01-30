import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <p>{inputText}</p>
      <input type="text" onChange ={()=> setInputText(inputText)}></input>
      <button type="submit">
        Submit
      </button>
    </div>
  );
}
