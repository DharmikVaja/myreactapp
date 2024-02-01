import React from "react";
import { Link } from "react-router-dom";
import User from "./User";

const About = () => {
  return (
    <>
      <h1>This is About page</h1>
      {/* <User /> */}
      <ul>
        <li>
          <Link to="../user/dharmik">Dharmik</Link>
        </li>
        <li>
          <Link to="../user/vaja">Vaja</Link>
        </li>
      </ul>

      <Link to="/"> Go Back to Home Page </Link>
    </>
  );
};

export default About;
