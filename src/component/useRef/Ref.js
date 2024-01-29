import React, { useState, useRef, useEffect } from "react";

const Ref = () => {
  const [myData, setMyData] = useState("");
  //   const [count, setCount] = useState("");
  const renderTime = useRef(0);
  console.log(renderTime.current);

  useEffect(() => {
    renderTime.current = renderTime.current + 1;
  });

  return (
    <div>
      <h1> Type Something... </h1>
      <input
        type="text"
        ref={Number}
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>Number of Times render:{renderTime.current}</p>
      
      
    </div>
  );
};

export default Ref;
