import { React, useRef, useState } from "react";
// import ReactDOM from "react-dom";

function User() {
  const [Data, setData] = useState();
  function getData(ip) {
    console.warn(ip.target.value);
    setData(ip.target.value);
  }

  return (
    <>
      <div className="inputC">
        <h2>{Data}</h2>
        <input type="text" onChange={getData}></input>
      </div>
    </>
  );
}
export default User;
