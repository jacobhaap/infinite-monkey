import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');

  const characters = {
    topRow: 'qwertyuiop'.split(''),
    homeRow: 'asdfghjkl'.split(''),
    bottomRow: 'zxcvbnm'.split(''),
    spaceBar: ' '.split('')
  };

  const weights = {
    topRow: 1,
    homeRow: 2,
    bottomRow: 1,
    spaceBar: 2
  };

  const createWeightedArray = () => {
    let weightedArray = [];
    
    for (const [key, value] of Object.entries(characters)) {
      for (let i = 0; i < weights[key]; i++) {
        weightedArray = weightedArray.concat(value);
      }
    }
    
    return weightedArray;
  };

  useEffect(() => {
    const weightedCharacters = createWeightedArray();

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * weightedCharacters.length);
      setText(prev => prev + weightedCharacters[randomIndex]);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="text-container">{text}</div>
    </div>
  );
};

export default App;
