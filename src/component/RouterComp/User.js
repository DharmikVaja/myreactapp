// import React from "react";
import { Link, useParams } from "react-router-dom";
// import About from "./About";

const User = () => {
  const params = useParams();
  const { name } = params;
  console.warn(name);
  return (
    <>
      <h1> This is {name}'s Page </h1>
      <Link to="/">Go Back to Home</Link>
    </>
  );
};

export default User;
