import React from "react";

function Navbar(props) {
  return (
    <>
      <div>welcome {props.name}</div>
      <div>Your User id is: {props.email}</div>
    </>
  );
}

export default Navbar;
