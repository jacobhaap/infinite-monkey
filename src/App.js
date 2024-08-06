import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const characters = 'abcdefghijklmnopqrstuvwxyz ';
    const interval = setInterval(() => {
      setText(prev => prev + characters.charAt(Math.floor(Math.random() * characters.length)));
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="text-container">{text}</div>
    </div>
  );
}

export default App;
