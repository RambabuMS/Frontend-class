import { useState } from "react";
import Counter from "./pages/Counter";

export function User(props) {
  const { topic, skill } = props;
  const [name, setName] = useState("");
  const student = "Nirmal";
  const showMessage = () => alert("Message Displayed");

  return (
    <div>
      <div className="header">
        <h1> Hi {student}</h1>
        <h2> React basics</h2>
        <h2>
          {" "}
          React {topic} {skill}
        </h2>
        {/* <Counter /> */}
        <button onClick={() => showMessage()}>Click Me</button>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h5>{name}</h5>
      </div>
    </div>
  );
}
