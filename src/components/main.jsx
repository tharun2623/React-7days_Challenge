import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const animate = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const increment = () => {
    animate();
    if (Number(value) > 0) {
      setCount(count + Number(value));
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    animate();
    if (Number(value) > 0) {
      setCount(count - Number(value));
    } else {
      setCount(count - 1);
    }
  };

  const setCustomValue = () => {
    animate();
    setCount(Number(value));
  };

  return (
    <div className="counter">
      <h1 className={`counter__display ${isAnimating ? 'pulse' : ''}`}>
        {count}
      </h1>
      
      <div className="counter__input-group">
        <input type="number" value={value} onChange={handleChange} placeholder="Enter increment value" className="counter__input"/>
        <button className="counter__btn counter__btn--submit" onClick={setCustomValue}>Set Value</button>
      </div>
      
      <div className="counter__buttons">
        <button className="counter__btn counter__btn--increment" onClick={increment}>
          <span className="btn-icon">+</span> Increment
        </button>
        <button className="counter__btn counter__btn--decrement" onClick={decrement}>
          <span className="btn-icon">-</span> Decrement
        </button>
        <button className="counter__btn counter__btn--reset" onClick={() => {
          animate();
          setCount(0);
          setValue("");
        }}>
          <span className="btn-icon">↺</span> Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;