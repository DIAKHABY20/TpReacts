import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Nombre : {count}</h2>
      <button onClick={increment}>Incrementer</button>
      <button onClick={decrement}>Decrementer</button>
    </div>
  );
}

export default Counter;
