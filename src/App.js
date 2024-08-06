import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');

  const characters = useMemo(() => ({
    topRow: 'QWERTYUIOP'.split(''),
    homeRow: 'ASDFGHJKL'.split(''),
    bottomRow: 'ZXCVBNM'.split(''),
    spaceBar: ' '.split('')
  }), []);

  const weights = useMemo(() => ({
    topRow: 1,
    homeRow: 2,
    bottomRow: 1,
    spaceBar: 2
  }), []);

  const createWeightedArray = useCallback(() => {
    let weightedArray = [];
    
    for (const [key, value] of Object.entries(characters)) {
      for (let i = 0; i < weights[key]; i++) {
        weightedArray = weightedArray.concat(value);
      }
    }
    
    return weightedArray;
  }, [characters, weights]);

  const getWeightedRandomInterval = () => {
    let random = Math.random();
    if (random < 0.5) {
      return Math.random() * (300 - 200) + 10;
    } else {
      return Math.random() < 0.5 ? Math.random() * (200 - 100) + 100 : Math.random() * (750 - 300) + 300;
    }
  };

  useEffect(() => {
    const weightedCharacters = createWeightedArray();
    
    const addCharacter = () => {
      const randomIndex = Math.floor(Math.random() * weightedCharacters.length);
      setText(prev => prev + weightedCharacters[randomIndex]);
      
      clearTimeout(timerId);
      timerId = setTimeout(addCharacter, getWeightedRandomInterval());
    };

    let timerId = setTimeout(addCharacter, getWeightedRandomInterval());

    return () => clearTimeout(timerId);
  }, [createWeightedArray]);

  return (
    <div className="App">
      <div className="image-container">
        <img src="/monkey-typewriter.png" alt="Monkey" className="image" />
      </div>
      <div className="header-container">
        <h1 className="header">
          <a href="https://en.wikipedia.org/wiki/Infinite_monkey_theorem" target="_blank" rel="noreferrer">
            1 Monkey, 1 Typewriter.
          </a>
        </h1>
      </div>
      <div className="text-container">{text}</div>
    </div>
  );
};

export default App;
