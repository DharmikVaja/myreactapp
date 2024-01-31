import React, { useEffect, useState, useRef, createContext } from "react";
import "./App.css";
// import "./component/form.css";
// import Form from "./component/Form";
// import Navbar from "./Navbar.js";
// import ClearUp from "./component/ClearUp";
// import CompA from "./component/useContext.js/CompA";
// import ThemeComp from "./component/Themess/ThemeComp";
// import CompC from "./component/useContext.js/CompC";
// export const UserContext = createContext();
// export const FirstName = createContext();
// export const LastName = createContext();
// import Ref from "./component/useRef/Ref";
// import FormComp from "./component/useForm/FormComp";
// import MemoComp from "./component/useMemo/MemoComp";
import CompApi1 from "./component/APIComp/CompApi1";

function App() {
  return (
    <>
      <CompApi1 />
    </>
  );
}

export default App;
