import { useCallback, useEffect } from 'react';
import SHA256 from 'crypto-js/sha256';

const Entropy = ({ text, onGenerate }) => {
  const generateEntropy = useCallback(() => {
    const hash = SHA256(text).toString();
    const binaryHash = hash.split('').map(char => {
      const binaryChar = parseInt(char, 16).toString(2).padStart(4, '0');
      return binaryChar;
    }).join('');
    return binaryHash;
  }, [text]);

  const copyEntropyToClipboard = useCallback(() => {
    const entropy = generateEntropy();
    navigator.clipboard.writeText(entropy).catch((err) => {
      console.error('Failed to copy entropy: ', err);
    });
  }, [generateEntropy]);

  useEffect(() => {
    if (onGenerate) {
      onGenerate(copyEntropyToClipboard);
    }
  }, [onGenerate, copyEntropyToClipboard]);

  return null;
};

export default Entropy;
