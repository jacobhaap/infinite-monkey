import { useEffect, useCallback } from 'react';
import { useWeightedCharacters } from './Typewriter';

const Monkey = ({ onUpdateText }) => {
  const weightedCharacters = useWeightedCharacters();

  const getWeightedRandomInterval = () => {
    let random = Math.random();
    if (random < 0.5) {
      return Math.random() * (300 - 200) + 10;
    } else {
      return Math.random() < 0.5 ? Math.random() * (200 - 100) + 100 : Math.random() * (750 - 300) + 300;
    }
  };

  const addCharacter = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * weightedCharacters.length);
    onUpdateText(prev => prev + weightedCharacters[randomIndex]);

    const interval = getWeightedRandomInterval();
    const timerId = setTimeout(addCharacter, interval);

    return () => clearTimeout(timerId);
  }, [weightedCharacters, onUpdateText]);

  useEffect(() => {
    const timerId = setTimeout(addCharacter, getWeightedRandomInterval());

    return () => clearTimeout(timerId);
  }, [addCharacter]);

  return null;
};

export default Monkey;
