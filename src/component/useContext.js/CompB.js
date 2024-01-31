import React, { useContext } from "react";
import { UserContext } from "../../App";
import CompA from "./CompA";

const CompB = () => {
  const uname = useContext(UserContext);
  console.log(uname);
  return (
    <div>
      {/* <h1>Hello World from CompB</h1> */}
      <CompA />
    </div>
  );
};

export default CompB;
