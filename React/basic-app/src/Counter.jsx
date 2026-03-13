import { useEffect, useState } from "react";

function Counter({ sendData }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`counter mounted ${count}`);
  }, [count]);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => sendData("Hello I am from Counter")}>
        Data Send
      </button>
    </div>
  );
}

export default Counter;
