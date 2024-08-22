import React, { useState, useRef } from 'react';
import './App.css';
import Typewriter from './Typewriter';
import Monkey from './Monkey';
import ClickableImage from './ClickableImage';
import Entropy from './Entropy';

const App = () => {
  const [text, setText] = useState('');
  const entropyRef = useRef(null);

  const handleImageClick = () => {
    if (entropyRef.current) {
      entropyRef.current();
    }
  };

  return (
    <div className="App">
      <div className="image-container">
        <ClickableImage onImageClick={handleImageClick} />
      </div>
      <div className="header-container">
        <h1 className="header">
          <a href="https://en.wikipedia.org/wiki/Infinite_monkey_theorem" target="_blank" rel="noreferrer">
            1 Monkey, 1 Typewriter.
          </a>
        </h1>
      </div>
      <div className="text-container" id="text-container">
        <Monkey onUpdateText={setText} />
        <Typewriter text={text} />
      </div>
      <Entropy text={text} onGenerate={fn => entropyRef.current = fn} />
    </div>
  );
};

export default App;
