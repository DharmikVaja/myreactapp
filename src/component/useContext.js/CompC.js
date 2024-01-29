import React, { useContext } from "react";
import { FirstName } from "../../App";
import { LastName } from "../../App";

const CompC = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      My full name is {fname} {lname}
    </h1>
  );
};

export default CompC;
