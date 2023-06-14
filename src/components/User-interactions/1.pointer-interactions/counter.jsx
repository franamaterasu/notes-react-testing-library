import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrementClick = () => {
    setCounter(counter - 1);
  };

  const handleResetClick = () => {
    setCounter(0);
  };

  const handleIncrementClick = () => {
    setCounter(counter + 1);
  };

  return (
    <section className="counter">
      <h1>Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={handleDecrementClick}>-1</button>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handleIncrementClick}>+1</button>
      </div>
    </section>
  );
};

export { Counter };
