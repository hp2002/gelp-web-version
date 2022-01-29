import React from 'react';
import {useState} from 'react'
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  return <div>
    <p>{count}</p>
    <button onClick={()=> setCount(count+1)}> Increment </button>
  </div>;
}
