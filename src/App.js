import React, { useState } from 'react';
import './App.css';
import Typewriter from './Typewriter';
import Monkey from './Monkey';
import ClickableImage from './ClickableImage';

const App = () => {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div className="image-container">
        <ClickableImage />
      </div>
      <div className="header-container">
        <h1 className="header">
          <a href="https://en.wikipedia.org/wiki/Infinite_monkey_theorem" target="_blank" rel="noreferrer">
          1 Monkey, 1 Typewriter.
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
