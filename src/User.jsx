import { React, useState } from "react";
// import ReactDOM from "react-dom";

let count = 0;
const User = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={IncNum}>CLick Here</button>
    </>
  );
};

export default User;
