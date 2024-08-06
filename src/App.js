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

  const getWeightedRandomInterval = () => {
    let random = Math.random();
    if (random < 0.5) {
      return Math.random() * (300 - 200) + 200;
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
  }, []);

  return (
    <div className="App">
      <div className="text-container">{text}</div>
    </div>
  );
};

export default App;
