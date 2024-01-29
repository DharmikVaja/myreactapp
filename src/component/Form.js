import React, { useState, useEffect } from "react";

function Form() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
  };

  return (
    <>
      <form action="#" method="post">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          onChange={handleInput}
          required
        />
        <br />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleInput}
          value={data.email}
        />
        <br />
        <label for="email">Password:</label>
        <input
          type="password"
          id="psd"
          name="password"
          required
          onChange={handleInput}
          value={data.password}
        />
        <br />
        <label for="mobile">Mobile:</label>
        <input
          type="mobile  "
          id="mobile"
          name="mobile"
          pattern="[0-9]{10}"
          value={data.mobile}
          onChange={handleInput}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Form;
