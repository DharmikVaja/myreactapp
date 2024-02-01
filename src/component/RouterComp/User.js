import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { name } = params;
  return (
    <>
      <h1> This is {name} Page </h1>
    </>
  );
};

export default User;
