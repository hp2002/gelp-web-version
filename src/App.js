import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <p>{count}</p>
      <input type="text"></input>
      <button type="submit" onClick={() => setInputText()}>
        Submit
      </button>
    </div>
  );
}
