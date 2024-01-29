import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(1);

  useEffect(() => {
    console.log("heyy");
    // console.log("hello");
  }, [count]);

  useEffect(() => {
    console.log("Hello");
  }, [multi]);
  return (
    <>
      <h1> {count} </h1>
      <p>{multi}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          // setMulti(multi * 2);
        }}
      >
        click Here
      </button>
      <button
        onClick={() => {
          setMulti(multi * 2);
        }}
      >
        click
      </button>
    </>
  );
}
