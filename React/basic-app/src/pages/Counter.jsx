import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";

function Counter({ sendData, handleClick }) {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("");

  // console.log("Child Rendered");

  // const expensive = useMemo(() => {
  //   console.log("....Calculating");
  //   return count * 2; // 26
  // }, [count]);
  // const result = count * 2;
  // console.log(result, "result");
  useEffect(() => {
    console.log(`counter mounted ${count}`);
    const getName = sessionStorage.getItem("student");
    if (getName) setUserName(getName);
    // localStorage.clear();
  }, []);

  return (
    <div>
      <Header />
      <h1>Counter App - {userName}</h1>
      <h2>{count}</h2>
      <button onClick={() => handleClick}>Click</button>
      {/* <h2>{expensive}</h2> */}
      {/* <h2>{result}</h2> */}
      <input onChange={(e) => setUserName(e.target.value)} />
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
