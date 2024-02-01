import React, { ReactDOM } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
// import CompApi1 from "./component/APIComp/CompApi1";
// import CompApi2 from "./component/APIComp/CompAPI2";
import Home from "./component/RouterComp/Home";
import About from "./component/RouterComp/About";
import Contact from "./component/RouterComp/Contact.js";
import NavBar from "./component/RouterComp/NavBarLink.js";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import User from "./component/RouterComp/User.js";
import Error404 from "./component/RouterComp/Error404.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
