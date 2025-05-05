import React, { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const counterRef = useRef(0);

  const handleClick = () => {
    counterRef.current += 1;
    console.log('Button clicked:', counterRef.current);
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <input ref={inputRef} type="text" placeholder="Focus on click" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
