import { useMemo, useState } from "react";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = () => {
    // imagine this being a huge data set of 10000 users
    return Math.random() * 1000;
  };

  // useMemo
  const memoizedValue = useMemo(() => expensiveCalculation(), [])
//   const value = expensiveCalculation()

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Expensive Calculation (Memoized Value): {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default UseMemoDemo;
