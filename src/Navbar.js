import React from "react";

function Navbar(props) {
  return (
    <>
      <div
        id="navid"
        style={{ backgroundColor: "skyblue", margin: 20, color: "blue" }}
      >
        <h5>welcome {props.name}</h5>
        <h6>Your User id is: {props.email}</h6>
      </div>
    </>
  );
}

export default Navbar;
