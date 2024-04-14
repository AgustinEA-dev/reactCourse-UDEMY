import { useState } from "react";
export default function Count() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={incrementCount}>Incrementar</button>
      <h1>Count is {count}</h1>
    </div>
  );
}
