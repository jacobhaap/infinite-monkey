import React, { useState, useEffect, useRef } from 'react';

const ClickableImage = () => {
  const [notification, setNotification] = useState(false);
  const imageRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      navigator.clipboard.writeText('Banana')
        .then(() => {
          setNotification(true);

          const imageElement = imageRef.current;
          const notificationElement = notificationRef.current;

          if (imageElement && notificationElement) {
            const rect = imageElement.getBoundingClientRect();
            notificationElement.style.top = `${rect.top + window.scrollY + rect.height / 2}px`;
            notificationElement.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
          }

          setTimeout(() => setNotification(false), 3500);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.style.cursor = 'pointer';
      imageElement.title = "Click for Banana";
      imageElement.addEventListener('click', handleClick);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <>
      <img ref={imageRef} src="/monkey-typewriter.png" alt="Monkey" className="image" />
      {notification && (
        <div
          ref={notificationRef}
          className="notification-box"
        >
          Banana Copied to Clipboard!
        </div>
      )}
    </>
  );
};

export default ClickableImage;
