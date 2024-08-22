import React, { useEffect, useState } from 'react';
import './App.css';
import Typewriter from './Typewriter';
import Monkey from './Monkey';

const App = () => {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div className="image-container">
        <img src="/monkey-typewriter.png" alt="Monkey" className="image" />
      </div>
      <div className="header-container">
        <h1 className="header">
          <a href="https://en.wikipedia.org/wiki/Infinite_monkey_theorem" target="_blank" rel="noreferrer">
            A Monkey and a Typewriter.
          </a>
        </h1>
      </div>
      <div className="text-container">
        <Monkey onUpdateText={setText} />
        <Typewriter text={text} />
      </div>
    </div>
  );
};

export default App;
