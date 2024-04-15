import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onclickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <h1>Count is: {count}</h1>
      <button onClick={onclickHandler}>Increment</button>
    </div>
  );
}
