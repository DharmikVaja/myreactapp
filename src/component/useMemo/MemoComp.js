import React, { useState, useEffect, useMemo } from "react";

const MemoComp = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrTwo = () => {
    setCounterTwo(counterTwo + 2);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  useEffect(() => {
    console.log("One Incremented!!");
  }, [counterOne]);
  useEffect(() => {
    console.log("Two Incremented!!");
  }, [counterTwo]);

  return (
    <div>
      <div>
        <button onClick={incrOne}>CLick - {counterOne}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrTwo}>CLick - {counterTwo}</button>
      </div>
    </div>
  );
};

export default MemoComp;
