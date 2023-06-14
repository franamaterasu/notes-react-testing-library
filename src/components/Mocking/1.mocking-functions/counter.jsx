const Counter = ({ handleIncrementClick, handleDecrementClick, count }) => {
  return (
    <section>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
    </section>
  );
};
export { Counter };
