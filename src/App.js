import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <p>{inputText}</p>
      <input type="text" onChange={() => setInputText(inputText)}></input>
      <button type="submit">Submit</button>
    </div>
  );
}
