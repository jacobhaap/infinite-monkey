import React from 'react';

const Typewriter = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  );
};

export const useWeightedCharacters = () => {
  const characters = React.useMemo(() => ({
    topRow: 'QWERTYUIOP'.split(''),
    homeRow: 'ASDFGHJKL'.split(''),
    bottomRow: 'ZXCVBNM'.split(''),
    spaceBar: ' '.split('')
  }), []);

  const weights = React.useMemo(() => ({
    topRow: 1,
    homeRow: 2,
    bottomRow: 1,
    spaceBar: 4
  }), []);

  const createWeightedArray = React.useCallback(() => {
    let weightedArray = [];
    for (const [key, value] of Object.entries(characters)) {
      for (let i = 0; i < weights[key]; i++) {
        weightedArray = weightedArray.concat(value);
      }
    }
    return weightedArray;
  }, [characters, weights]);

  return React.useMemo(() => createWeightedArray(), [createWeightedArray]);
};

export default Typewriter;
