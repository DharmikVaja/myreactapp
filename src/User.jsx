import { React, useRef, useState } from "react";
// import ReactDOM from "react-dom";

const User = () => {
  let inputRef = useRef(null);
  function handleInput() {
    console.warn("clicked");
  }

  return (
    <>
      <h1>useRef Use</h1>
      <input type="text" />
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
};

export default User;
