import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
        setTime(prevTime => {
            if (prevTime > 0) {
              return prevTime - 1;
            } else {
              clearInterval(timer);
              return 0;
            }
          });
        }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div>
      <h1>Compte à rebours</h1>
      <p>Temps restant: {time} secondes</p>
    </div>
  );
};

export default Timer;
