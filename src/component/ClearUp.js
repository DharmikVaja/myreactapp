import React from "react";
import { useState, useEffect } from "react";
//window size

const ClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currWindowSize = () => {
    setWidthCount(() => window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", currWindowSize);
    window.removeEventListener("resize", currWindowSize);
  });
  return (
    <>
      <div className="container">
        <h2>
          The size of window is: <span> {widthCount} </span>
        </h2>
      </div>
    </>
  );
};

export default ClearUp;
