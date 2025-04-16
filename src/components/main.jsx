import React, { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1 className="counter__display">{count}</h1>
      <div className="counter__buttons">
        <button className="counter__btn counter__btn--increment" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="counter__btn counter__btn--increment" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="counter__btn counter__btn--reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;