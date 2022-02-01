import React from 'react';
import { useState } from 'react';
import './style.css';
export default function App() {
  const [count, setCount] = useState;

  function handleChange(e) {
    const text = e.target.value;
    setCount(text);
  }
  return (
    <div>
      <p>{count}</p>
      <input type="text" onChange={handleChange}></input>
      {/* <button type="submit">Submit</button> */}
    </div>
  );
}
