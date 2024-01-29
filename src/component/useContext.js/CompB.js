import React, { useContext } from "react";
import { userContext } from "../../App";

const CompB = (props) => {
  const uname = useContext(userContext);
  console.log(uname);
  return (
    <div>
      <h1>Hello World from CompB</h1>
    </div>
  );
};

export default CompB;
