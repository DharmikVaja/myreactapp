import "./App.css";
import React, { useEffect, useState } from "react";
// import "./component/form.css";
// import Form from "./component/Form";
// import Navbar from "./Navbar.js";
// import ClearUp from "./component/ClearUp";
import { createContext } from "react";
// import CompA from "./component/useContext.js/CompA";
import ThemeComp from "./component/Themess/ThemeComp";

export const userContext = createContext();

function App() {
  return (
    <>
      <userContext.Provider>
        <ThemeComp />
      </userContext.Provider>
    </>
  );
}

export default App;
